import axios from "axios"


 const getContent = async ({id}) => {
  try {
    const res = await axios.get(`https://blogger.googleapis.com/v3/blogs/${process.env.BLOG_ID}/posts/${id}?fetchBody=true&fetchImages=true&maxComments=5&key=${process.env.YOUR_API_KEY}`)

    return res.data;
  } catch (error) {
    console.log("getContent() error ", error);
  }
}

export default getContent;

