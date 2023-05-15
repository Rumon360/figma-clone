import { FC } from "react";
import classNames from "classnames";

interface CompanyDropDownProps {
  className?: string;
}

const CompanyDropDown: FC<CompanyDropDownProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        "absolute mb-[1.6rem] bg-white border-black border-[3px] whitespace-nowrap z-30 top-[3.6rem] py-[1.8rem]",
        className
      )}
    >
      <a role="menuitem" className="block pb-[1.2rem] px-[2.2rem]" href="#">
        <span className="spanStyles">Blog</span>
      </a>
      <a role="menuitem" className="block pb-[1.2rem] px-[2.2rem]" href="#">
        <span className="spanStyles">Careers</span>
      </a>
      <a role="menuitem" className="block pb-[1.2rem] px-[2.2rem]" href="#">
        <span className="spanStyles">Our story</span>
      </a>
      <a role="menuitem" className="block pb-[1.2rem] px-[2.2rem]" href="#">
        <span className="spanStyles">Help Center</span>
      </a>
    </div>
  );
};

export default CompanyDropDown;
