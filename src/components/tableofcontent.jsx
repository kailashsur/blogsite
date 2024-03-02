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

  return (
    <div className=" my-6 px-4 border-t border-b py-6">
      <h3 className={`${nanum_myeongjo.className} text-xl font-semibold text-[#335133]`}> Table of Contents </h3>

      <div className={`${pathway_extreme.className} flex flex-col my-6 gap-2`}>
        {
          headings ?
            headings.map((item, idx) => {
              return (
                <div key={idx} className="flex items-center">

                  <span >
                    <ArrowLongRightIcon className="w-4 h-4 text-[#335133] mr-2" />
                  </span>

                  <div>
                    <a href={"#" + item.id}
                      className="font-nanum_myeongjo hover:underline text-lg lg:text-base text-[#cc2e00] hover:text-[#cc2e00]"
                    >
                      {item.content}
                    </a>
                  </div>
                </div>

              )
            })
            : ""
        }

      </div >
    </div>
  )
}
