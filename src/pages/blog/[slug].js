import axios from "axios";
import parse from "html-react-parser"; // Import the HTML parser library
import formatDate from "@/lib/formatDate";
import { User } from "@nextui-org/react";
import Layout from "../Layout";
import NotFound from "@/components/notfound";

import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import React from "react";

export async function getStaticPaths() {
  const { data } = await axios.get(
    "https://blogger.googleapis.com/v3/blogs/3041366657471632387/posts?orderBy=UPDATED&key=AIzaSyD49CIYDypfLAhBGzkBJ-8yAbn5hPWPzHc"
  );

  const paths = data.items ?(data.items.map((post) => {
    let idxSlash = post.url.lastIndexOf("/");
    let htmlIdx = post.url.lastIndexOf(".html");
    let slug = post.url.slice(idxSlash + 1, htmlIdx) + "+" + post.id;

    return { params: { slug: slug } };
  })) : ""
  return { paths, fallback: "blocking" }; // Set fallback to 'blocking' for on-demand ISR
}

export async function getStaticProps({ params }) {
  let { slug } = params;
  let id = slug.split("+")[1];

  const post = await fetch(
    `https://blogger.googleapis.com/v3/blogs/3041366657471632387/posts/${id}?fetchBody=true&fetchImages=true&maxComments=5&key=AIzaSyD49CIYDypfLAhBGzkBJ-8yAbn5hPWPzHc`
  );

  return {
    props: { post: await post.json() },
    revalidate: 10,
  };
}

export default function PostPage({ post }) {
  // const {
  //   updated,
  //   title,
  //   content,
  //   author: {
  //     displayName,
  //     image: { url },
  //   },
  //   labels,
  // } = post ? post : null;

  const date = formatDate(post.updated);

  return (
    <Layout>
      {!post.error ? (
        <div className="flex justify-center w-full min-h-screen ">
          {/* <ContentSection post={post} /> */}

          {/* Render post content */}

          <div className=" w-full max-w-[680px] ">
            {/* Title of the content */}
            <div className=" w-full bg-orange-50 px-4 py-10 mb-10 md:my-10 rounded-md">
              <Breadcrumbs size="sm" variant="bordered" >
                <BreadcrumbItem href="/" className=" cursor-pointer" >Home</BreadcrumbItem>
                <BreadcrumbItem href="/blog" className=" cursor-pointer">Blog</BreadcrumbItem>
              </Breadcrumbs>

              <h1>{post.title}</h1>

              <div className=" flex gap-4 items-center ">
                <User
                  name={post.displayName}
                  avatarProps={{
                    src: "/profile.gif",
                  }}
                />

                <div className=" text-sm text-gray-800">{date}</div>
              </div>
            </div>

            {/* Body of the content */}
            <div className=" w-full px-4">
              <div className="w-full">{parse(post.content)}</div>
            </div>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </Layout>
  );
}

// export default function Blog(){
//     return <div>Blog Page</div>
// }
