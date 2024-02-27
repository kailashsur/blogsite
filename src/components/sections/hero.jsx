export default function Hero() {
  return (
    <div className=" flex flex-col gap-8">
      <div>
        <div className="flex-col gap-2 items-start justify-center w-full inline md:block">
          <h1 className="tracking-tight inline font-semibold text-4xl lg:text-6xl">
            Know,
          </h1>
          <div>
            <h1 className="tracking-tight inline font-semibold from-[#FF72E1] to-[#F54C7A] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
            that inspires you,
            </h1>
          </div>
        </div>
        <p className="w-full md:w-1/2 my-2 text-lg lg:text-xl font-normal text-default-500 block max-w-full">
          Send us your article{" "}
          <a
            className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 underline hover:opacity-80 active:opacity-disabled transition-opacity underline-offset-4 text-xl text-default-500 font-light [&amp;>svg]:ml-1"
            tabIndex="0"
            role="link"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Here
          </a>
          . Unleash your thoughts, ignite the world.
Where words find wings, and stories unfurl.
        </p>
      </div>
    </div>
  );
}
