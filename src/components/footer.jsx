import Link from "next/link"

export default function Footer() {
  return (
    <section className="relative border-t border-gray-200 pb-6 pt-10 overflow-hidden ">
      
      <div className="relative container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
         
          <div className=" text-sm flex flex-wrap -mb-5 -mx-6 items-center justify-center py-6">
            <div className="px-4 mb-5">
              <a
                className="inline-block text-gray-900 hover:text-gray-600"
                href="/blog"
              >
                Blog
              </a>
            </div>

            <div className="px-4 mb-5">
              <Link
                className="  inline-block text-gray-900 hover:text-gray-600"
                href="#"
              >
                Privecy Policy
              </Link>
            </div>
            
          </div>
          <div className="mt-15 text-center">
            <span className="text-gray-500 text-xs">
              © 2023 Kailashsur. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
