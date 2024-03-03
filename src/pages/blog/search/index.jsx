import NotFound from "@/components/notfound";
import PostCard from "@/components/postCard";
import Layout from "@/pages/Layout";
import { useRouter } from "next/router";
import React from "react";

export const metadata = {
    title: "Search",
    description: "Here learn that you think",
};



export default function SearchPage() {
    const router = useRouter();
    const { query } = router;

    const [data , setData] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const responce = await fetch(`/api/search?q=${query.q}`);
                const searchData = await responce.json();
                setData(searchData.data);
               console.log("Data ", searchData.data);
            } catch (error) {
                console.error("Error fetching search data:", error);
                setData({ items: [] }); // Set empty data in case of error
            }
        };

        if (query.q) {
            fetchData();
        } else {
            setData({ items: [] }); // Set empty data if no query
        }
    }, [query]);

    return (
        <Layout>
            {
                query.q ?
            <div className="w-full grid justify-center gap-10 mt-20">
                {data !== null ? (
                    data.items && data.items.length > 0 ? (
                        data.items.map((post, i) => {
                            let idxSlash = post.url.lastIndexOf("/");
                            let htmlIdx = post.url.lastIndexOf(".html");

                            let slug = post.url.slice(idxSlash + 1, htmlIdx);

                            return (
                                <PostCard post={post} slug={slug} key={i} css="border-b pb-10" />
                            );
                        })
                    ) : (
                        <div className="text-center">Post Not Found</div>
                    )
                ) : (
                    <div className="text-center">Loading...</div>
                )}
            </div>
            : <NotFound/>
            }
        </Layout>
    );
}
