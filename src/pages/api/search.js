// const res = await fetch(
//   `https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOG_ID}/posts/search?q=${query}&key=${process.env.YOUR_API_KEY}`,
//   { cache: "no-store" }
// );
// return res.json();



// export default async function handler(req, res) {

//     try {
//         return status(200).josn({data : query})
//         // const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOG_ID}/posts/search?q=${query}&key=${process.env.YOUR_API_KEY}`)

//         return res.status(200).json({data : response.data })
//     } catch (error) {
//         consolel.log("Api Error :: api/search - ", error)
//         return res.status(500).json({ error : error.message})
//     }
// }


export default async function handler(req, res) {
    try {
        const { query } = req; // Access query parameters from req

        if (query.q) {

            // Fetch data from the external API
            const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOG_ID}/posts/search?q=${query.q}&key=${process.env.YOUR_API_KEY}`);

            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`Failed to fetch data. Status: ${response.status}`);
            }

            // Extract JSON data from the response
            const data = await response.json();

            // Return the data in the response
            return res.status(200).json({ data });
        } else {
            return res.status(400).json({ response: "Invalid Parameter" });
        }
        
    } catch (error) {
        console.error("API Error :: api/search - ", error);
        return res.status(500).json({ error: error.message });
    }
}
