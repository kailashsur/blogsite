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
import { Noto_Serif_Display } from "@next/font/google"
import TableOfContent from "@/components/tableofcontent";
import { parseHeadings } from "@/utils/parseHeadings";


const pathway_extreme = Pathway_Extreme({
  subsets: ['latin'],
  weight: ['200', '700']
})

const noto_serif_display = Noto_Serif_Display({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--noto-serif-display'
  // width : [ '100' ]
})
// -----------font section end ------------------

export default function PostPage({ post, similarPosts, slug }) {

  const router = useRouter();

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
// React.useEffect(()=>{

//   const headingsArray = parseHeadings(post.content)
//   console.log("Headings are = ", headingsArray);

//   let h2Tags = typeof document !== 'undefined' ? document.querySelectorAll('h1, h2, h3, h4, h5, h6') : null;

//   const h2Array = h2Tags !== null ? Array.from(h2Tags) : []
// console.log( "Tag Array ", h2Array);
//   if(h2Array.length > 0){
//     h2Array.forEach((tag, index) => {
//       console.log("Tag - ", tag);
//       tag.setAttribute('id', 'idnameofArray' + index);
//     });
//   }

// },[])

  // -----------------------Tabel of content End

  return (
    <Layout title={title} description={description} featureImage={featureImage} pathUrl={fullDomain} >

      {/* Body Content Statr */}
      {!post.error ? (

        <article>




          {/* content section start */}
          <div className={` flex justify-center w-full min-h-screen `}>

            {/* Render post content */}

            <div className=" w-full max-w-[680px] ">
              {/* Title of the content */}
              <div className={`${noto_serif_display.variable}  w-full bg-orange-50 px-4 py-10 mb-10 md:my-10 rounded-md`}>
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



              {/* Table of content is started */}




              <SocialShare slug={slug} title={post.title} />


              {/* Body of the content */}
              <div className={`${noto_serif_display.variable} ${pathway_extreme.className} w-full px-4`}>
                {/* <div className="w-full">{parse(post.content)}</div> */}
                <PostBody content={post.content} />
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
        <div className=" pl-4 pt-6 text-3xl font-semibold "> Similar Stories </div>

        {
          similarPosts.items && !similarPosts.error ? (
            <div className=" mb-6 px-4 py-6 grid grid-cols-1 md:grid-cols-2 justify-center w-full md:gap-6">

              {similarPosts.items.map((post, i) => {
                let idxSlash = post.url.lastIndexOf("/")
                let htmlIdx = post.url.lastIndexOf(".html");

                let slug = post.url.slice(idxSlash + 1, htmlIdx);

                // console.log("images is ", post.images);

                return (
                  <Link key={i} href={`/blog/${slug}+${post.id}`} className={"flex max-w-xl flex-col items-start border-t py-14 "} >

                    {
                      post.images ? (
                        <div className="overflow-hidden w-full h-52 mb-4 rounded-md ">
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

                    <div>
                      <div className="flex h-10 items-center  gap-x-4 text-xs">
                        <div className="text-gray-500">
                          {formatDate(post.updated)}
                        </div>
                        {
                          post.labels ?
                            <div className="relative z-10 border rounded-full px-3 py-1.5 font-medium text-black hover:bg-gray-100 tracking-tight from-[#defbff] to-[#ffdfd2] bg-gradient-to-tl ">
                              {post.labels[0]}
                            </div>
                            : ""
                        }
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <span className="absolute inset-0"></span>
                          {post.title}
                        </h3>

                      </div>
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
    `https://blogger.googleapis.com/v3/blogs/${process.env.BLOG_ID}/posts?fetchImages=true&sortOption=SORT_OPTION_UNSPECIFIED&fetchBodies=false&maxResults=2&orderBy=UPDATED&key=${process.env.YOUR_API_KEY}`
  );

  return {
    props: { post: await post.json(), similarPosts: await similarPosts.json(), slug },
    revalidate: 10,
  };
}


