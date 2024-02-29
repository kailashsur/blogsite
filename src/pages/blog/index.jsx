
import PostSection from "@/components/post";
import Layout from "../Layout";
import React from "react";

export const metadata = {
    title: "Blog",
    description: "Here learn that you think",
  };



export default function Blogs({data}) {

    // console.log("Data is ", data);

    return (
      
        <Layout>

            <section className=" pt-10">

                <div>
                    <div className="flex-col gap-2 items-start justify-center w-full inline md:block">
                        <div className="tracking-tight inline font-semibold text-4xl lg:text-6xl">
                            All Blogs
                        </div>
                        <div>
                            <div className="tracking-tight inline font-semibold from-[#FF72E1] to-[#F54C7A] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
                                Here.
                            </div>
                        </div>
                    </div>
                    <p className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full">
                        NextUI is based on{" "}
                        <a
                            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 underline hover:opacity-80 active:opacity-disabled transition-opacity underline-offset-4 text-xl text-default-500 font-light [&amp;>svg]:ml-1"
                            tabIndex="0"
                            role="link"
                            href="#"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Tailwind Variants
                        </a>
                        , it simplifies component slots customization while avoiding Tailwind
                        class conflicts.
                    </p>
                </div>


                <PostSection posts={data.items ? data.items : []} />



            </section>
        </Layout>

    )
}


export async function getStaticProps(){
    const data = await fetch(`https://blogger.googleapis.com/v3/blogs/${process.env.BLOG_ID}/posts?fetchBodies=true&orderBy=UPDATED&key=${process.env.YOUR_API_KEY}`);


    return {
        props: { data: await data.json()},
        revalidate: 10,
      };
}