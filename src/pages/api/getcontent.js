import axios from "axios";

export default async function handler(req, res) {
    const {id} = req.body; // Assuming req.body directly contains the ID
   

    try {
        const response = await axios.get(`https://blogger.googleapis.com/v3/blogs/${process.env.BLOG_ID}/posts/${id}?fetchBody=true&fetchImages=true&maxComments=5&key=${process.env.YOUR_API_KEY}`);

        return res.status(200).json({ data: response.data }); // Sending back response data
    } catch (error) {
        return res.status(500).json({ error: error.message }); // Sending error message
    }
}
