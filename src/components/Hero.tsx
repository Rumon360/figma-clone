const Hero = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="text-center px-[2rem] mb-[12rem]">
        <h1 className="lg:hidden font-semibold text-[3.6rem] md:text-[6.4rem] leading-[1.15] tracking-[-0.03rem] mt-[6.4rem] mb-[3.2rem] text-black">
          Nothing great is <br /> made alone
        </h1>
        <video
          aria-label="Nothing great is made alone"
          role="heading"
          aria-level={1}
          src="https://cdn.sanity.io/files/599r6htc/localized/4caa8274fa1a76f5df188b7969c41e2b00890801.mp4"
          muted
          autoPlay
          className="hidden lg:block mx-auto z-10 w-[790px] my-0 max-w-full"
        ></video>
        <p className="text-[2.2rem] leading-[1.45] tracking-[0] mx-auto mb-[4rem] max-w-[50rem]">
          Figma connects everyone in the design process so teams can deliver
          better products,&nbsp;faster.
        </p>
        <a
          href="#"
          className="inline-block rounded-[1rem] pt-[1.4rem] pb-[1.6rem] px-[2.4rem] font-[700] leading-[1] border-none cursor-pointer text-center bg-[rgb(85,81,255)] relative transition-all ease-in duration-[200ms] hover:translate-y-[-0.2rem] text-white text-[1.8rem]"
        >
          Get started
        </a>
      </div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(250, 250, 250, 0) 0%, rgb(250, 250, 250) 85%);",
          backgroundSize: "cover",
        }}
      >
        <div className="relative mx-auto w-full overflow-visible pointer-events-none">
          <img
            src="https://cdn.sanity.io/images/599r6htc/localized/455e29e0d05e64300b4a2aa99bcd25fa10a341a7-6969x2010.png?rect=0,1,6969,2008&amp;w=2016&amp;h=581&amp;q=75&amp;fit=max&amp;auto=format"
            srcSet="https://cdn.sanity.io/images/599r6htc/localized/455e29e0d05e64300b4a2aa99bcd25fa10a341a7-6969x2010.png?w=2016&amp;q=75&amp;fit=max&amp;auto=format&amp;dpr=0.5 1008w,https://cdn.sanity.io/images/599r6htc/localized/455e29e0d05e64300b4a2aa99bcd25fa10a341a7-6969x2010.png?w=2016&amp;q=75&amp;fit=max&amp;auto=format&amp;dpr=0.75 1512w,https://cdn.sanity.io/images/599r6htc/localized/455e29e0d05e64300b4a2aa99bcd25fa10a341a7-6969x2010.png?w=2016&amp;q=75&amp;fit=max&amp;auto=format 2016w,https://cdn.sanity.io/images/599r6htc/localized/455e29e0d05e64300b4a2aa99bcd25fa10a341a7-6969x2010.png?w=2016&amp;q=75&amp;fit=max&amp;auto=format&amp;dpr=1.5 3024w,https://cdn.sanity.io/images/599r6htc/localized/455e29e0d05e64300b4a2aa99bcd25fa10a341a7-6969x2010.png?w=2016&amp;q=75&amp;fit=max&amp;auto=format&amp;dpr=2 4032w"
            loading="eager"
            alt="FigJam and Figma product windows"
            className="block w-[150%] ml-[-40%] mr-0 h-auto max-w-none"
          />
          <video
            aria-hidden="true"
            autoPlay
            muted
            playsInline
            tabIndex={-1}
            className="outline-none absolute left-[52%] md:left-[52.11%] w-[40.97%] object-contain overflow-clip lg:left-[50%] lg:w-[46%] bottom-[0.78125vw]"
          >
            <source
              src="https://cdn.sanity.io/files/599r6htc/localized/d11d54cb6d0a9d60f39e53b5b19b58cf4664e1fb.mov"
              type="video/quicktime"
            />
            <source
              src="https://cdn.sanity.io/files/599r6htc/localized/c5a4b82a0fe219bfcf609b75148e8e058f7745ee.webm"
              type="video/webm"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
