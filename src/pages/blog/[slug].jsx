import axios from "axios";
// import parse from "html-react-parser"; // Import the HTML parser library
import Link from "next/link"
import Image from "next/image"

import formatDate from "@/lib/formatDate";
import { User } from "@nextui-org/react";
import Layout from "./BlogLayout";
import NotFound from "@/components/notfound";

import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import React from "react";
import PostBody from "@/components/post-body";
// import { useRouter } from "next/router";
import SocialShare from "@/components/socialShare";
import extractWordsFromParagraphs from "@/lib/extractWordHtml";
import { useRouter } from "next/router";
// Font section -------------------------------
import { Pathway_Extreme } from "@next/font/google";
import { Nanum_Myeongjo } from "@next/font/google"
import TableOfContent from "@/components/tableofcontent";
import { parseHeadings } from "@/utils/parseHeadings";
import { extractHeadingsFromHtml } from "@/utils/setIdToHtml";


const pathway_extreme = Pathway_Extreme({
  subsets: ['latin'],
  weight: ['200', '700']
})

const nanum_myeongjo = Nanum_Myeongjo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--nanum_myeongjo'
  // width : [ '100' ]
})
// -----------font section end ------------------

export default function PostPage({ post, similarPosts, slug }) {

  // Get the full domain name
  const fullDomain = typeof window !== 'undefined' ? window.location.href : 'https://www.kailashsur.in';

  const date = formatDate(post.updated);
  // console.log("Post is ", post);
  // const router = useRouter();
  const path = `${process.env.SERVER_DOMAIN}/blog/${slug}`;

  const title = !post.error ? post.title : ""
  const description = !post.error ? (extractWordsFromParagraphs(post.content)) : ""
  const featureImage = !post.error ? post.images[0].url : ""
  // if (router.isFallback) {
  //   return <NotFound />;
  // }



  //----------------------Table of content Start -------------------------


  const { headings, modifiedHtmlContent } = extractHeadingsFromHtml(post.content)
  // console.log("Headings crgo : ", headings);
  // console.log("Modified Html content : ", modifiedHtmlContent);

  // -----------------------Tabel of content End ----------------------------



  return (
    <Layout title={title} description={description} featureImage={featureImage} pathUrl={fullDomain} headings={headings} >

      {/* Body Content Statr */}
      {!post.error ? (

        <article>




          {/* content section start */}
          <div className={` flex justify-center w-full min-h-screen `}>

            {/* Render post content */}

            <div className=" w-full max-w-[680px] ">
              {/* Title of the content */}
              <div className={`${nanum_myeongjo.variable}  w-full px-4 py-10 mb-10 md:my-10 rounded-md`}>
                <Breadcrumbs size="sm">
                  <BreadcrumbItem href="/" className=" cursor-pointer">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbItem href="/blog" className=" cursor-pointer">
                    Blog
                  </BreadcrumbItem>
                </Breadcrumbs>

                <h1 className="my-6 tracking-tight font-semibold from-[#fcab49] to-[#FF705B] text-4xl  bg-clip-text text-transparent bg-gradient-to-b">
                  {post.title}
                </h1>

                <div className=" flex gap-4 items-center ">
                  <User
                    name={post.displayName}
                    avatarProps={{
                      src: `${post.author.image.url}`,
                    }}
                  />
                  <div>
                    <div className=" text-sm text-gray-800 font-semibold">
                      {" "}
                      {post.author.displayName}{" "}
                    </div>
                    <div className=" text-sm text-gray-800 font-light">
                      {date}
                    </div>
                  </div>
                </div>
              </div>
              {/* End of head and title */}

              <SocialShare slug={slug} title={post.title} />

              {/* Table of content is started */}
              <div className=" lg:hidden">

                <TableOfContent headings={headings} /> {/* Table of content End */}
              </div>





              {/* Body of the content */}
              <div className={`${nanum_myeongjo.variable} ${pathway_extreme.className} w-full px-4`}>
                {/* <div className="w-full">{parse(post.content)}</div> */}
                <PostBody content={modifiedHtmlContent} />
              </div>
              <SocialShare slug={slug} title={post.title} />

            </div>
          </div>
          {/* content section end */}
        </article>

      ) : (
        <NotFound />
      )}
      {/* End of body content */}

      {/* Similar post start */}
      <div className=" w-full max-w-[680px]">
        <div className={" pl-4 pt-6 text-3xl font-semibold text-[#335133] " + `${nanum_myeongjo.className}`}> Similar Stories </div>

        {
          similarPosts.items && !similarPosts.error ? (
            <div className=" mb-6 px-4 py-6 flex flex-col w-full md:gap-6 ">

              {similarPosts.items.map((post, i) => {
                let idxSlash = post.url.lastIndexOf("/")
                let htmlIdx = post.url.lastIndexOf(".html");

                let slug = post.url.slice(idxSlash + 1, htmlIdx);

                // console.log("images is ", post.images);

                return (
                  <Link key={i} href={`/blog/${slug}+${post.id}`} className={"flex max-w-xl items-center border-t py-14 gap-4 "} >

                    {
                      post.images ? (
                        <div className="overflow-hidden w-32 mb-4 rounded-md ">
                          <img
                            src={post.images[0].url}
                            alt=""
                            className="mx-auto h-full w-full object-cover"
                          />
                        </div>

                        // <Image
                        // width={}
                        // height={}
                        // src={}
                        // alt=""
                        // />
                      ) : ""
                    }

                    <div className=" flex flex-col justify-center items-start gap-2">
                        <div className="text-gray-500 text-xs m-0 p-0">
                          {formatDate(post.updated)}
                        </div>
                        {/* {
                          post.labels ?
                            <div className="relative z-10 border rounded-full px-3 py-1.5 font-medium text-black hover:bg-gray-100 tracking-tight from-[#defbff] to-[#ffdfd2] bg-gradient-to-tl ">
                              {post.labels[0]}
                            </div>
                            : ""
                        } */}
                    
                        <h3 className={`${nanum_myeongjo.className} text-lg font-semibold text-[#335133] `}>
                          {post.title}
                        </h3>
                    </div>

                  </Link>
                )
              })
              }
            </div>
          ) : ""
        }
      </div>
      {/* Similar post end */}
    </Layout>
  );
}

export async function getStaticPaths() {
  const { data } = await axios.get(
    `https://blogger.googleapis.com/v3/blogs/3041366657471632387/posts?orderBy=UPDATED&key=${process.env.YOUR_API_KEY}`
  );

  const paths = data.items
    ? data.items.map((post) => {
      let idxSlash = post.url.lastIndexOf("/");
      let htmlIdx = post.url.lastIndexOf(".html");
      let slug = post.url.slice(idxSlash + 1, htmlIdx) + "+" + post.id;

      return { params: { slug: slug } };
    })
    : "";
  return { paths, fallback: "blocking" }; // Set fallback to 'blocking' for on-demand ISR
}

export async function getStaticProps({ params }) {
  let { slug } = params;
  let id = slug.split("+")[1];

  const post = await fetch(
    `https://blogger.googleapis.com/v3/blogs/3041366657471632387/posts/${id}?fetchBody=true&fetchImages=true&maxComments=5&key=${process.env.YOUR_API_KEY}`
  );

  const similarPosts = await fetch(
    `https://blogger.googleapis.com/v3/blogs/${process.env.BLOG_ID}/posts?fetchImages=true&sortOption=SORT_OPTION_UNSPECIFIED&fetchBodies=false&maxResults=2&orderBy=ORDER_BY_UNSPECIFIED&key=${process.env.YOUR_API_KEY}`
  );

  return {
    props: { post: await post.json(), similarPosts: await similarPosts.json(), slug },
    revalidate: 10,
  };
}


