import PostCard from "@/components/postCard";

export const metadata = {
    title: "Search",
    description: "Here learn that you think",
  };

async function getSearchData({ query }) {
    const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOG_ID}/posts/search?q=${query}&key=${process.env.YOUR_API_KEY}`, { cache: 'no-store' })

    return res.json();
}

export default async function SearchPage({ searchParams }) {

    let data = await getSearchData({ query: searchParams.q })
    // console.log("Data search =  ", data);

    return (
        <div className=" w-full grid justify-center gap-10 ">
            

            {
                data.items ?
                    data.items.map((post, i) => {
                        let idxSlash = post.url.lastIndexOf("/")
                        let htmlIdx = post.url.lastIndexOf(".html");

                        let slug = post.url.slice(idxSlash + 1, htmlIdx);

                        return (
                            <PostCard post={post} slug={slug} key={i} css="border-b pb-10" />
                        )
                    })

                    : (<div className=" text-center"> Post Not Found </div>)
            }
        </div>
    )
}

