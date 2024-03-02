import cheerio from 'cheerio';
import slugify from 'slugify';

// This function extracts headings from the HTML content
export const extractHeadingsFromHtml = (htmlContent) => {
  const $ = cheerio.load(htmlContent);
  const headings = [];

  // Iterate through each heading tag and extract its content and id
  $('h1, h2, h3, h4, h5, h6').each((index, element) => {
    const headingText = $(element).text().trim();

    const heading = {
      id: slugify(headingText, { lower: true, strict: true }), // Generate a unique id for the heading
      tag: element.name, // Get the tag name (e.g., h1, h2)
      content: headingText, // Get the content of the heading and trim any whitespace
    };

    // Add the heading object to the headings array
    headings.push(heading);

    // Add an id attribute to the heading tag in the HTML content
    $(element).attr('id', heading.id);
  });

  // Return the extracted headings along with the modified HTML content
  return {
    headings,
    modifiedHtmlContent: $.html(),
  };
};

// Usage example
// const { headings, modifiedHtmlContent } = extractHeadings(content);

// // Now you have an array of headings and modified HTML content with added id attributes
// console.log(headings);
// console.log(modifiedHtmlContent);



// const headingsArray = parseHeadings(post.content)
// console.log("Headings are = ", headingsArray);

// let h2Tags = typeof document !== 'undefined' ? document.querySelectorAll('h1, h2, h3, h4, h5, h6') : null;

// const h2Array = h2Tags !== null ? Array.from(h2Tags) : []
// console.log("Tag Array ", h2Array);
// if (h2Array.length > 0) {
//   h2Array.forEach((tag, index) => {
//     console.log("Tag - ", tag);
//     tag.setAttribute('id', 'idnameofArray' + index);
//   });
// }