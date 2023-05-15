const SectionFour = () => {
  return (
    <section
      style={{ marginInline: "auto" }}
      className="pb-[6.4rem] md:pb-[8rem] lg:pb-[12rem] block overflow-x-visible text-black bg-white max-w-[80rem] mx-auto md:max-w-[71rem] lg:max-w-[91rem] xl:max-w-[120rem] text-left"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-[0rem]">
        <div className="relative md:col-span-2 order-first md:translate-x-[12rem] md:order-last">
          <div className="w-[95%] relative mx-auto md:w-full h-full pointer-events-none block">
            <video
              preload="auto"
              playsInline
              webkit-playsinline=""
              x5-playsinline=""
              autoPlay
              muted
              style={{
                objectPosition: "center center",
                width: "100%",
                height: "100%",
              }}
              className={`block object-contain`}
            >
              <source
                src="https://cdn.sanity.io/files/599r6htc/localized/c6300c170556dc28b7ad376c6b47308a1cb91fdf.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="ml-[3.2rem] md:ml-0 mt-2 md:mt-0">
          <div className="md:max-w-[23rem] lg:max-w-[29rem] xl:max-w-[36rem] text-left m-0">
            <h3 className="font-semibold leading-[1.2] tracking-[-0.02em] mb-[2.4rem] lg:text-[3.6rem] md:text-[3.2rem] text-[2.6rem]">
              Powerful design <br className="hidden md:block" /> systems
            </h3>
            <p className="leading-[1.5] tracking-[-0.02em] lg:text-[1.8rem] font-[500] text-[1.6rem] max-w-[90%]">
              Increase design consistency with searchable assets and shareable
              styles in one home—centralized and accessible to your entire
              company.
            </p>
          </div>
          <div className="mt-[2.4rem]">
            <a
              href="#"
              className="bg-black inline-block text-white rounded-[1rem] pt-[1.4rem] px-[2.4rem] pb-[1.6rem] text-[1.6rem] md:text-[1.8rem] font-[700] leading-[1] border-none cursor-pointer text-center transition-all ease-in duration-[200ms] hover:translate-y-[-0.2rem]"
            >
              Build systems
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
