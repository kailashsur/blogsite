import PostSection from "@/components/post";
import Hero from "@/components/sections/hero";
import PrittierSection from "@/components/sections/pritter";

// export const revalidate = 10;
async function getPosts() {
  const res = await fetch(`https://blogger.googleapis.com/v3/blogs/${process.env.BLOG_ID}/posts?fetchBodies=true&orderBy=UPDATED&key=${process.env.YOUR_API_KEY}`, { next: { revalidate: 10 } })
  
  return res.json();
}


export default async function App() {
  let data = await getPosts();



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
