
import { data } from "../page";
import PostSection from "@/components/post";

export const revalidate = 10;

export default function Blogs() {

    return (
        <>
            <section className=" pt-10">

                <div>
                    <div class="flex-col gap-2 items-start justify-center w-full inline md:block">
                        <h1 class="tracking-tight inline font-semibold text-4xl lg:text-6xl">
                            All Blogs
                        </h1>
                        <div>
                            <h1 class="tracking-tight inline font-semibold from-[#FF72E1] to-[#F54C7A] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
                                Here.
                            </h1>
                        </div>
                    </div>
                    <p class="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full">
                        NextUI is based on{" "}
                        <a
                            class="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 underline hover:opacity-80 active:opacity-disabled transition-opacity underline-offset-4 text-xl text-default-500 font-light [&amp;>svg]:ml-1"
                            tabindex="0"
                            role="link"
                            href="#"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Tailwind Variants
                        </a>
                        , it simplifies component slots customization while avoiding Tailwind
                        class conflicts.
                    </p>
                </div>


                <PostSection posts={data.items ? data.items : []} />



            </section>
        </>
    )
}