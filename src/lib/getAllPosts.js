import axios from "axios"


 const getAllPosts = async () => {
  try {
    const res = await axios.get(`https://blogger.googleapis.com/v3/blogs/${process.env.BLOG_ID}/posts?fetchBodies=true&orderBy=UPDATED&key=${process.env.YOUR_API_KEY}`, { next: { revalidate: 10 } })

    return res.data;
  } catch (error) {
    console.log("getPost() error ", error);
  }
}

export default getAllPosts;

