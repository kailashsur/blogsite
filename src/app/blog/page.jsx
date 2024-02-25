
import { data } from "../page";
import PostSection from "@/components/post";



export default function Blogs() {

    return (
        <>
            <section>
                <PostSection posts={data ? data.items : []} />


                
            </section>
        </>
    )
}