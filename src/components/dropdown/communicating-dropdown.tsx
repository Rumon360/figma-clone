import classNames from "classnames";
import { FC } from "react";

interface communicatingDropdownProps {
  className?: string;
}

const CommunicatingDropDown: FC<communicatingDropdownProps> = ({
  className,
}) => {
  return (
    <div
      className={classNames(
        "absolute mb-[1.6rem] min-w-[77.2rem] min-h-[28.3rem] bg-white border-black border-[3px] whitespace-nowrap z-30 top-[3.6rem] p-0",
        className
      )}
      role="menu"
    >
      <div
        style={{ gridTemplateColumns: "1fr 200px" }}
        className="grid items-stretch"
      >
        <div className="flex py-[1.2rem]">
          <div className="py-[0.8rem] px-[2.2rem]">
            <a href="#" role="menuitem" className="max-w-[24rem]">
              <span className="spanStyles">Files and templates</span>
              <p className="text-[1.4rem] leading-[1.5] tracking-[0.02em] whitespace-normal opacity-[0.585] mt-[0.4rem] max-w-[24rem] mb-[2rem]">
                Free expertly crafted files you can duplicate, remix, and use
              </p>
              <img
                src="https://cdn.sanity.io/images/599r6htc/localized/c26f4735dcfe8661c138da8e281ea9da5d71c814-248x160.svg?q=75&amp;fit=max&amp;auto=format"
                alt=""
                className="w-[24rem] block max-w-full"
                loading="lazy"
              />
            </a>
          </div>
          <div className="py-[0.8rem] px-[2.2rem]">
            <a href="#" role="menuitem" className="max-w-[24rem]">
              <span className="spanStyles">Plugins and widgets</span>
              <p className="text-[1.4rem] leading-[1.5] tracking-[0.02em] whitespace-normal opacity-[0.585] mt-[0.4rem] max-w-[24rem] mb-[2rem]">
                Extend what’s possible and automate work
              </p>
              <img
                src="https://cdn.sanity.io/images/599r6htc/localized/1d1d0c4cf2eaeb5445a28a971ad9d6a21095c3a4-248x160.svg?q=75&amp;fit=max&amp;auto=format"
                alt=""
                className="w-[24rem] block max-w-full"
                loading="lazy"
              />
            </a>
          </div>
        </div>
        <div className="border-l-[3px] border-l-black py-[0.8rem] whitespace-normal max-w-[20rem] h-full">
          <a role="menuitem" className="block py-[1.2rem] px-[2.2rem]" href="#">
            <span className="spanStyles">Events and livestreams</span>
          </a>
          <a role="menuitem" className="block py-[1.2rem] px-[2.2rem]" href="#">
            <span className="spanStyles">Best practices</span>
          </a>
          <a role="menuitem" className="block py-[1.2rem] px-[2.2rem]" href="#">
            <span className="spanStyles">Education program</span>
          </a>
          <a className="block py-[1.2rem] px-[2.2rem]" href="#">
            <span className="spanStyles">User groups</span>
          </a>
          <a role="menuitem" className="block py-[1.2rem] px-[2.2rem]" href="#">
            <span className="spanStyles">Community creators</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommunicatingDropDown;
