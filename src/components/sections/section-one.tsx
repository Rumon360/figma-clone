import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const SectionOne = ({
  setShowFloatingButton,
}: {
  setShowFloatingButton: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { ref, inView } = useInView({
    threshold: 0,

    rootMargin: "1000% 0px 0px 0px",
  });

  useEffect(() => {
    setShowFloatingButton(inView);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="py-[6.4rem] md:py-[8rem] lg:py-[12rem] bg-white text-black"
    >
      <div
        style={{ marginInline: "auto" }}
        className="max-w-[48rem] md:max-w-[60rem] lg:max-w-[78rem] xl:max-w-[84rem] text-center"
      >
        <h2 className="mb-[1.6rem] font-semibold text-[3.6rem] md:text-[4.8rem] lg:text-[6.4rem] leading-[1.2] tracking-[-0.02em] ">
          Explore more ideas. Ship better products.
        </h2>
        <p
          style={{ marginInline: "auto" }}
          className="leading-[1.5] max-w-[43.6rem] lg:max-w-[60rem] text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] tracking-[0.01em]"
        >
          Whether you’re brainstorming ideas, designing prototypes, or building
          solutions, Figma helps teams align early and stay in-sync, from
          initial idea to shipped product.
        </p>
      </div>
    </section>
  );
};

export default SectionOne;
