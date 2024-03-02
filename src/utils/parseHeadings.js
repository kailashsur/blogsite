// // utils/parseHeadings.js
// import cheerio from 'cheerio';
// import slugify from 'slugify'; // You may need to install this library for slugification

// export function parseHeadings(htmlContent) {
//   const $ = cheerio.load(htmlContent);
//   const headingsWithIds = [];

//   $('h1, h2, h3, h4, h5, h6').each((index, element) => {
//     const headingText = $(element).text().trim();
//     const headingId = slugify(headingText, { lower: true, strict: true });
//     $(element).attr('id', headingId);
//     headingsWithIds.push({ text: headingText, id: headingId });
//   });

//   return headingsWithIds;
// }
