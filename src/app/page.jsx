import PostSection from "@/components/post";
import getAllPosts from "@/lib/getAllPosts";

export const revalidate = 10;
export const data = await getAllPosts();


export default async function App() {
  


  return (
    <main className="">
      Home page 

      <PostSection posts={data.items}/>
    </main>
  )
}