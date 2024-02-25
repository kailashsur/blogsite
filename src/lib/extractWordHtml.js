function extractWordsFromParagraphs(htmlContent) {
    // Regular expression to match content inside <p> tags
    const regex = /<p[^>]*>(.*?)<\/p>/g;
    const matches = htmlContent.match(regex);
    const words = [];

    if (matches) {
        matches.forEach(match => {
            // Remove HTML tags and extract words
            const text = match.replace(/<[^>]*>/g, '');
            const wordsInParagraph = text.split(/\s+/);
            // Filter out empty strings and add to words array
            words.push(...wordsInParagraph.filter(word => word !== ''));
        });
    }

    return words.length > 20 ? words.slice(0, 20) : words;
}

// Example usage:
// const content = "{content: \"<p>Test paragraph</p> ..."; // Your HTML content string here
// const extractedWords = extractWordsFromParagraphs(content);
// console.log(extractedWords);

export default extractWordsFromParagraphs;
