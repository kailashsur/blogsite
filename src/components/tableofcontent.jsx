import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Nanum_Myeongjo } from "@next/font/google"
import { Pathway_Extreme } from "@next/font/google";



const pathway_extreme = Pathway_Extreme({
  subsets: ['latin'],
  weight: ['200', '700']
})

const nanum_myeongjo = Nanum_Myeongjo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--nanum_myeongjo'
  // width : [ '100' ]
})

export default function TableOfContent({ headings }) {
  /*
   * Here the headings is an array which contents [id, tag, content]
      */
     console.log("Heading is not array is : ", headings);
  return (
    <div className=" my-6 px-4 border-t border-b py-6">
    <h3 className={`${nanum_myeongjo.className} text-xl font-semibold text-[#335133]`}> Table of Contents </h3>

    <div className={`${pathway_extreme.className} flex flex-col my-6 gap-2`}>
      {
        headings.map((item, idx) => {
          return (
            <div className=" flex items-center gap-4 ">
              <ArrowLongRightIcon className=" w-4 h-4 inline-block text-[#335133]" />

              <a href={"#" + (`${item.id}`)} key={idx}
              className=" font-nanum_myeongjo hover:underline text-lg text-[#cc2e00] hover:text-[#a85036] "
              >
                 {item.content} 
              </a>
            </div>
          )
        })
      }

    </div >
    </div>
  )
}
