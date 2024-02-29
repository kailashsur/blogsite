// https://<your-site.com>/api/revalidate?secret=<token>



// http://localhost:3000/api/revalidate?path=/blog&secret=c72bb1a1083914e8c1a8602a72196815a33bec7291fee11a30c112598a76f8e7

// route is : page/api/revalidate.js

export default async function handler(req, res){

    if(req.query.secret !== process.env.SEC_KEY){
        return res.status(401).json({message : "Invalid Token"})
    }

    const path = req.query.path 
    await res.revalidate(path)

    return res.json({ revalidated : true})
}