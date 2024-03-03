
export default async function getAllPagesSitemap() {
  const post_urls = await getAllPostUrl();
  const home = `${process.env.SERVER_DOMAIN}`
  const blog = `${process.env.SERVER_DOMAIN}/blog`
  
  return {
    home : home,
    blog : blog, 
    posts : post_urls
  }
}

async function getAllPostUrl() {
  const res = await fetch(
    `https://blogger.googleapis.com/v3/blogs/${process.env.BLOG_ID}/posts?fetchBodies=false&fetchImages=false&orderBy=UPDATED&key=${process.env.YOUR_API_KEY}`
  );

  let urls = [];
  const data = await res.json();

  data.items.map((post) => {
    let idxSlash = post.url.lastIndexOf("/");
    let htmlIdx = post.url.lastIndexOf(".html");

    let slug = post.url.slice(idxSlash + 1, htmlIdx);

    urls.push({
        url : `${process.env.SERVER_DOMAIN}/blog/${slug}+${post.id}`,
        updated : post.updated
        });
  });

  return urls;
}

