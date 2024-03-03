import axios from "axios"
import Layout from "@/pages/Layout";

 
export default function Page({page, slug}) {
    console.log("Slug is ", slug);

    console.log("Page is ", page);


  return (
    <Layout>
        <p>Post: </p>
    </Layout>
  )
}

// export async function getServerSideProps() {
//     // Fetch data from external API
//     const res = await fetch(`https://blogger.googleapis.com/v3/blogs/3041366657471632387/pages?fetchBodies=false&key=${process.env.YOUR_API_KEY}`)
//     const data = await res.json()
   
//     // Pass data to the page via props
//     return { props: { data } }
//   }



// export async function getStaticPaths() {
//     const {data} = await axios.get(
//       `https://blogger.googleapis.com/v3/blogs/3041366657471632387/pages?fetchBodies=false&key=${process.env.YOUR_API_KEY}`
//     );
//     console.log("Page Data", data);
  
//     const paths = data.items
//       ? data.items.map((page) => {
//         let idxSlash = page.url.lastIndexOf("/");
//         let htmlIdx = page.url.lastIndexOf(".html");
//         let pageid = page.url.slice(idxSlash + 1, htmlIdx) + "+" + page.id;
//         console.log("pageid in paths - ", pageid);
  
//         return { params: { pageid: pageid } };
//       })
//       : "";
//     return { paths, fallback: "blocking" }; // Set fallback to 'blocking' for on-demand ISR

//   }
  
//   export async function getStaticProps({ params }) {
//     let { pageid } = params;
//     let id = pageid.split("+")[1];
//     let slug = pageid.split("+")[0]
//   console.log("id = ", pageid);
//   console.log("slug = ", slug);
//   console.log("Params = ", params);
//     const page = await fetch(
//       `https://blogger.googleapis.com/v3/blogs/3041366657471632387/pages/${id}?fetchBody=true&key=${process.env.YOUR_API_KEY}`
//     );
  
 
//     return {
//       props: { page: await page.json(), slug : slug },
//       revalidate: 10,
//     };
//   }
  
  
  