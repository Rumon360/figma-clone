const SectionTwo = () => {
  return (
    <section
      style={{ marginInline: "auto" }}
      className="pb-[6.4rem] md:pb-[8rem] lg:pb-[12rem] block overflow-x-visible text-black bg-white max-w-[80rem] mx-auto md:max-w-[71rem] lg:max-w-[91rem] xl:max-w-[120rem] text-left"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-[0rem]">
        <div className="relative md:col-span-2 order-first md:translate-x-[12rem] my-[-3.2rem] md:my-[-6rem] md:order-last">
          <div className="w-[100%] relative mx-auto md:w-full h-full pointer-events-none block">
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
                src="https://cdn.sanity.io/files/599r6htc/localized/f1393126ce284d180abf1b8f5a9ece9a0af7c28e.mov"
                type="video/quicktime"
              />
              <source
                src="https://cdn.sanity.io/files/599r6htc/localized/7177f277efd135ed9ebea82b829bf2a1af8238c4.webm"
                type="video/webm"
              />
            </video>
          </div>

          <img
            style={{
              opacity: 0,
              filter: "drop-shadow(rgba(0, 0, 0, 0.2) 0px 8px 12px);",
            }}
            className="block anim-img-section-two scale-75 md:scale-100 absolute left-[38%] bottom-[26%] sm:bottom-[34%] md:bottom-[28%] lg:bottom-[32%] xl:bottom-[36%] pointer-events-none transition-[transform,opacity]"
            src="https://cdn.sanity.io/images/599r6htc/localized/77604c790a151fcda78695ecdde65ba4991e9825-248x106.svg"
            alt=""
            width="248"
          />
        </div>
        <div className="ml-[3.2rem] md:ml-0 mt-2 md:mt-0">
          <div className="md:max-w-[23rem] lg:max-w-[29rem] xl:max-w-[36rem] text-left m-0">
            <h3 className="font-semibold leading-[1.2] tracking-[-0.02em] mb-[2.4rem] lg:text-[3.6rem] md:text-[3.2rem] text-[2.6rem]">
              Explore ideas <br className="hidden md:block" /> together
            </h3>
            <p className="leading-[1.5] tracking-[-0.02em] lg:text-[1.8rem] font-[500] text-[1.6rem]">
              Diagram, sticky-note, and workshop in FigJam—an online whiteboard
              for you and your team to brainstorm in&nbsp;the&nbsp;open.
            </p>
          </div>
          <div className="mt-[2.4rem]">
            <a
              href="#"
              className="bg-black inline-block text-white rounded-[1rem] pt-[1.4rem] px-[2.4rem] pb-[1.6rem] text-[1.6rem] md:text-[1.8rem] font-[700] leading-[1] border-none cursor-pointer text-center transition-all ease-in duration-[200ms] hover:translate-y-[-0.2rem]"
            >
              Meet FigJam
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
