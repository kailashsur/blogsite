import PostSection from "@/components/post";
import Hero from "@/components/sections/hero";
import PrittierSection from "@/components/sections/pritter";
import Layout from "./Layout";


export default function App({ data }) {
 
  
    return (
      <Layout>
        <div>
          <PrittierSection />
          <Hero />
          {
          data.items ? 
          data.items.length > 0 ? (
            <PostSection posts={data.items} />
          ) : (
            <div>No posts found</div>
          )
          : ""
          }
        </div>
      </Layout>
    );
  }
  
  export async function getStaticProps() {
    const res = await fetch(`https://blogger.googleapis.com/v3/blogs/${process.env.BLOG_ID}/posts?fetchBodies=true&orderBy=UPDATED&key=${process.env.YOUR_API_KEY}`);
    const data = await res.json();
  
    return {
      props: { data },
      revalidate: 10,
    };
  }
  