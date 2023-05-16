const SectionFive = () => {
  return (
    <section
      style={{ marginInline: "auto" }}
      className="pb-[6.4rem] md:pb-[8rem] lg:pb-[12rem] block overflow-x-clip text-black bg-white max-w-[80rem] mx-auto md:max-w-[71rem] lg:max-w-[91rem] xl:max-w-[120rem] text-left"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-[0rem]">
        <div className="relative md:col-span-2 items-start">
          <div className="w-[100%] relative mx-auto md:w-full h-full pointer-events-none block overflow-hidden">
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
                src="https://cdn.sanity.io/files/599r6htc/localized/d6712df81650468cd676c184ae9655aba96cceaf.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="ml-[3.2rem] md:ml-0 mt-2 md:mt-0">
          <div className="md:max-w-[23rem] lg:max-w-[29rem] xl:max-w-[36rem] text-left m-0">
            <h3 className="font-semibold leading-[1.2] tracking-[-0.02em] mb-[2.4rem] lg:text-[3.6rem] md:text-[3.2rem] text-[2.6rem]">
              Build the bridge
            </h3>
            <p className="leading-[1.5] tracking-[-0.02em] lg:text-[1.8rem] font-[500] text-[1.6rem]">
              Ship a better experience with ongoing conversations and a shared
              language between design and development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
