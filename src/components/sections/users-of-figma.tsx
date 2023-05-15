const UsersOfFigma = () => {
  return (
    <section className="py-[6.4rem] md:py-[8rem] lg:py-[12rem] bg-white text-black text-center">
      <div
        style={{ marginInline: "auto" }}
        className="max-w-[80%] md:max-w-[70%]"
      >
        <div className="text-center mx-auto max-w-[72rem]">
          <p className="leading-[1.5] tracking-[0.01em] text-[1.6rem] lg:text-[1.8rem]">
            Join other industry-leading organizations pushing boundaries and
            solving problems in Figma
          </p>
        </div>
        <div className="inline-flex mt-[8rem] flex-wrap gap-y-[7.2rem] gap-x-[8rem] justify-center place-content-center m-auto">
          <img
            src="https://cdn.sanity.io/images/599r6htc/localized/5cc4ec7efbf529d23d98eb5cea426716848fbd56-77x77.svg?q=75&amp;fit=max&amp;auto=format"
            alt="Slack logo"
            className="w-[6.4rem] block"
            loading="lazy"
          />
          <img
            src="https://cdn.sanity.io/images/599r6htc/localized/ae44fb1f0119d84e2fdadaadf20c7c6f3cc57e76-78x77.svg?q=75&amp;fit=max&amp;auto=format"
            alt="Twitter logo"
            className="w-[6.4rem] block"
            loading="lazy"
          />
          <img
            src="https://cdn.sanity.io/images/599r6htc/localized/17b5b66d29a94a2e06bec865e350c55563ac4b59-78x77.svg?q=75&amp;fit=max&amp;auto=format"
            alt="Dropbox logo"
            className="w-[6.4rem] block"
            loading="lazy"
          />
          <img
            src="https://cdn.sanity.io/images/599r6htc/localized/b0c4a3e058a3e978a66b86716cc5cf908a107139-78x77.svg?q=75&amp;fit=max&amp;auto=format"
            alt="Square logo"
            className="w-[6.4rem] block"
            loading="lazy"
          />
          <img
            src="https://cdn.sanity.io/images/599r6htc/localized/5e7d9f4dc1a2ad8bb116a3bdf1ff010b6e3e895f-78x77.svg?q=75&amp;fit=max&amp;auto=format"
            alt="New York Times logo"
            className="w-[6.4rem] block"
            loading="lazy"
          />
        </div>
        <div className="mt-[8rem] underline underline-offset-[0.25em] text-[1.6rem]">
          <a href="#">See all customer stories</a>
        </div>
      </div>
    </section>
  );
};

export default UsersOfFigma;
