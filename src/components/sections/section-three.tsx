const SectionThree = () => {
  return (
    <section
      style={{ marginInline: "auto" }}
      className="pb-[6.4rem] md:pb-[8rem] lg:pb-[12rem] block overflow-x-clip text-black bg-white max-w-[80rem] mx-auto md:max-w-[71rem] lg:max-w-[91rem] xl:max-w-[120rem] text-left"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-[0rem]">
        <div className="relative md:col-span-2 items-start">
          <div className="w-[90%] relative mx-auto md:w-full h-full pointer-events-none block overflow-hidden">
            <video
              preload="auto"
              playsInline
              webkit-playsinline=""
              x5-playsinline=""
              autoPlay
              muted
              style={{ overflowClipMargin: "content-box" }}
              className={` object-contain overflow-clip translate-x-[10%] md:translate-x-0`}
            >
              <source
                src="https://cdn.sanity.io/files/599r6htc/localized/aba03f6d51aa568bcdf74a9b123aacf9a9e0a744.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="ml-[3.2rem] md:ml-0 mt-2 md:mt-0">
          <div className="md:max-w-[23rem] lg:max-w-[29rem] xl:max-w-[36rem] text-left m-0">
            <h3 className="font-semibold leading-[1.2] tracking-[-0.02em] mb-[2.4rem] lg:text-[3.6rem] md:text-[3.2rem] text-[2.6rem]">
              Create. Iterate. <br className="hidden md:block" /> Repeat.
            </h3>
            <p className="leading-[1.5] tracking-[-0.02em] lg:text-[1.8rem] font-[500] text-[1.6rem]">
              Build an iterative design flow with live collaboration that keeps
              you in the loop whether you’re working in the office or remotely.
            </p>
          </div>
          <div className="mt-[2.4rem]">
            <a
              href="#"
              className="bg-black inline-block text-white rounded-[1rem] pt-[1.4rem] px-[2.4rem] pb-[1.6rem] text-[1.6rem] md:text-[1.8rem] font-[700] leading-[1] border-none cursor-pointer text-center transition-all ease-in duration-[200ms] hover:translate-y-[-0.2rem]"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
