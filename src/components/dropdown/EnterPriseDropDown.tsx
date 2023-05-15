import classNames from "classnames";

const EnterPriseDropDown = ({ className }: { className: string }) => {
  return (
    <div
      className={classNames(
        "absolute mb-[1.6rem] bg-white border-black border-[3px] whitespace-nowrap z-30 top-[3.6rem] py-[1.8rem]",
        className
      )}
    >
      <a role="menuitem" className="block pb-[1.2rem] px-[2.2rem]" href="#">
        <span className="spanStyles">Overview</span>
      </a>
      <a role="menuitem" className="block pb-[1.2rem] px-[2.2rem]" href="#">
        <span className="spanStyles">Curtomers</span>
      </a>
      <a role="menuitem" className="block pb-[1.2rem] px-[2.2rem]" href="#">
        <span className="spanStyles">Contact Sales</span>
      </a>
    </div>
  );
};

export default EnterPriseDropDown;
