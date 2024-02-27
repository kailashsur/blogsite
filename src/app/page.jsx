import PostSection from "@/components/post";
import Hero from "@/components/sections/hero";
import PrittierSection from "@/components/sections/pritter";
import getAllPosts from "@/lib/getAllPosts";

// export const revalidate = 10;



export default async function App() {
  const data = await getAllPosts();



  return (
    <div className="">
      <PrittierSection />
      <Hero />

      {
        data ?
        <PostSection posts={data.items ? data.items : []} />
        : <div> No post found </div>
      }

      
    </div>
  )
}
