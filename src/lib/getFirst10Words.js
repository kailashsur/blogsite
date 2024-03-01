
import extractWordsFromParagraphs from "./extractWordHtml";

export default function getFirst10Words(content) {
    const paragraph = extractWordsFromParagraphs(content)
    // Split the paragraph into words
    const words = paragraph.split(/\s+/);
    // Slice the array to get the first 10 words
    const first10Words = words.slice(0, 10);
    // Join the first 10 words back into a string
    const result = first10Words.join(" ");
    return result;
}