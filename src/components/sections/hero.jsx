export default function Hero() {
  return (
    <div className=" flex flex-col gap-8">
      <div>
        <div class="flex flex-col gap-2 items-start justify-center w-full">
          <h1 class="tracking-tight inline font-semibold text-4xl lg:text-6xl">
            Dark mode
          </h1>
          <div>
            <h1 class="tracking-tight inline font-semibold text-4xl lg:text-6xl">
              is&nbsp;
            </h1>
            <h1 class="tracking-tight inline font-semibold from-[#FF705B] to-[#FFB457] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
              effortless.
            </h1>
          </div>
        </div>
        <p class="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full">
          NextUI comes with a fully well-scaled default dark theme that you can
          apply to your application with just adding the{" "}
          <code class="px-2 py-1 h-fit font-mono font-normal inline-block whitespace-nowrap bg-default/40 text-default-foreground text-small rounded-small">
            dark
          </code>{" "}
          attribute to your{" "}
          <code class="px-2 py-1 h-fit font-mono font-normal inline-block whitespace-nowrap bg-default/40 text-default-foreground text-small rounded-small">
            html
          </code>
          .
        </p>
      </div>

      <div>
        <div class="flex-col gap-2 items-start justify-center w-full inline md:block">
          <h1 class="tracking-tight inline font-semibold text-4xl lg:text-6xl">
            Customization made
          </h1>
          <div>
            <h1 class="tracking-tight inline font-semibold from-[#FF72E1] to-[#F54C7A] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
              easy.
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
    </div>
  );
}
