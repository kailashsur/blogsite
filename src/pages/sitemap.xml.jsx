import formatDate from "@/lib/formatDate";
import getAllPagesSitemap from "@/lib/getAllPagesSitemap";

export default function Sitemap() {
  return null;
}

export async function getServerSideProps(ctx) {
  ctx.res.setHeader("Content-Type", "text/xml");
  const xml = await generateSitemap();
  ctx.res.write(xml);
  ctx.res.end();

  return {
    props: {},
  };
}

async function generateSitemap() {
  const url = await getAllPagesSitemap();

  const currentDate = formatDate(new Date());

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     
<url>
<loc>${url.home}</loc>
<lastmod>${currentDate}</lastmod>
</url>

<url>
<loc>${url.blog}</loc>
<lastmod>${currentDate}</lastmod>

${url.posts.map((post) => {
    return `<url>
      <loc>${post.url}</loc>
      <lastmod>${post.updated}</lastmod>
  </url>`
  })}
</url>

    </urlset>`;
}

// {
//     home: 'http://localhost:3000',
//         blog: 'http://localhost:3000/blog',
//             posts: [
//                 {
//                     url: 'http://localhost:3000/blog/introduction-to-postgresql+6368968192826365576',
//                     updated: '27/02/2024'
//                 },
//                 {
//                     url: 'http://localhost:3000/blog/what-database-data-deluge+1035439245607071114',
//                     updated: '26/02/2024'
//                 }
//             ]
// }
