import PostSection from "@/components/post";
import Hero from "@/components/sections/hero";
import PrittierSection from "@/components/sections/pritter";
import getAllPosts from "@/lib/getAllPosts";

export const revalidate = 10;
export const data = await getAllPosts();


export default async function App() {
  


  return (
    <div className="">
      <PrittierSection/>
      <Hero/>

      <PostSection posts={data.items}/>

    </div>
  )
}