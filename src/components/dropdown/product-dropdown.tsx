import classNames from "classnames";

const ProductDropDown = ({ className }: { className: string }) => {
  return (
    <div
      className={classNames(
        "absolute mb-[1.6rem] bg-white min-w-[57.5rem] border-black border-[3px] whitespace-nowrap z-30 top-[3.6rem] p-0",
        className
      )}
    >
      <div className="grid items-stretch">
        <div className="flex divide-x-[3px] divide-black">
          <div className="py-[0.8rem] px-0 group">
            <a role="menuitem" className="py-[1.2rem] px-[2.2rem]" href="#">
              <span className="spanStyles">Figma</span>
              <p className="text-[1.4rem] mb-[2rem] leading-[1.5] tracking-[0.02em] whitespace-normal opacity-[0.585] mt-[0.4rem] mx-[2rem]">
                An all-in-one design platform
              </p>
              <img
                src="https://cdn.sanity.io/images/599r6htc/localized/3e7c45b33de8d6a1ff1bf9952c4b1c423f079f88-240x120.svg?q=75&amp;fit=max&amp;auto=format"
                alt=""
                className="min-w-[24rem] h-[12rem] max-w-full block mx-auto px-[2rem]"
                loading="lazy"
              />
            </a>
            <div>
              <a
                role="menuitem"
                className="block pb-[1.2rem] px-[2.2rem]"
                href="#"
              >
                <span className="spanStyles">Design</span>
              </a>
              <a
                role="menuitem"
                className="block pb-[1.2rem] px-[2.2rem]"
                href="#"
              >
                <span className="spanStyles">Prototyping</span>
              </a>
              <a
                role="menuitem"
                className="block pb-[1.2rem] px-[2.2rem]"
                href="#"
              >
                <span className="spanStyles">Design systems</span>
              </a>
              <a
                role="menuitem"
                className="block pb-[1.2rem] px-[2.2rem]"
                href="#"
              >
                <span className="spanStyles">Downloads</span>
              </a>
            </div>
          </div>
          <div className="py-[0.8rem] px-0 group">
            <a role="menuitem" className="py-[1.2rem] px-[2.2rem]" href="#">
              <span className="spanStyles">FigJam</span>
              <p className="text-[1.4rem] mb-[2rem] leading-[1.5] tracking-[0.02em] whitespace-normal opacity-[0.585] mt-[0.4rem] mx-[2rem]">
                An online whiteboard for teams
              </p>
              <img
                src="https://cdn.sanity.io/images/599r6htc/localized/2cd12cf136c014ec23ef42647e0e4ee2818a6b53-480x240.png?w=240&amp;h=120&amp;q=75&amp;fit=max&amp;auto=format"
                loading="lazy"
                alt=""
                className="min-w-[24rem] h-[12rem] max-w-full block mx-auto px-[2rem]"
              />
            </a>
            <div>
              <a
                role="menuitem"
                className="block pb-[1.2rem] px-[2.2rem]"
                href="#"
              >
                <span className="spanStyles">Online whiteboarding</span>
              </a>
              <a
                role="menuitem"
                className="block pb-[1.2rem] px-[2.2rem]"
                href="#"
              >
                <span className="spanStyles">Strategic planning</span>
              </a>
              <a
                role="menuitem"
                className="block pb-[1.2rem] px-[2.2rem]"
                href="#"
              >
                <span className="spanStyles">Team meetings</span>
              </a>
              <a
                role="menuitem"
                className="block pb-[1.2rem] px-[2.2rem]"
                href="#"
              >
                <span className="spanStyles">Diagramming</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDropDown;
