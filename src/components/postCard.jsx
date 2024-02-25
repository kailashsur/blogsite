import Link from "next/link"

//import methods
import formatDate from "@/lib/formatDate";
import extractWordsFromParagraphs from "@/lib/extractWordHtml";




export default function PostCard({ post, slug }) {

  let { id, published, updated, title, content, labels, author: { displayName, image: { url } } } = post;
  let description = extractWordsFromParagraphs(content).join(' ')


  return (
    <Link href={`/blog/${slug}+${id}`} className="flex max-w-xl flex-col items-start justify-between" >
      <div className="flex items-center gap-x-4 text-xs">
        <div className="text-gray-500">
          {formatDate(updated)}
        </div>
        {
          labels ?
            <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
              {labels[0]}
            </div>
            : ""
        }
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <span className="absolute inset-0"></span>
          {title}
        </h3>
        <div className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>

      </div>
      
    </Link>
  )
}