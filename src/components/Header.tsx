import CompanyDropDown from "./dropdown/CompanyDropDown";
import EnterPriseDropDown from "./dropdown/EnterPriseDropDown";
import CommunicatingDropDown from "./dropdown/communicating-dropdown";
import ProductDropDown from "./dropdown/product-dropdown";
import CloseIcon from "./icons/close-icon";
import DropLogo from "./icons/drop-logo";
import HamburgerIcon from "./icons/hamburger";
import Logo from "./icons/logo";
import classNames from "classnames";
import { Dispatch } from "react";

const Header = ({
  sideBar,
  setSideBar,
}: {
  sideBar: boolean;
  setSideBar: Dispatch<boolean>;
}) => {
  return (
    <header className="flex justify-between py-[2.4rem] px-[4.8rem] w-screen items-center text-black">
      <div className="block w-[3.2rem] xl:w-[3.8rem]">
        <a href="/">
          <Logo />
        </a>
      </div>
      <nav className="flex items-center">
        <ul className="items-center min-h-[4.2rem] text-[1.6rem] hidden xl:flex">
          <li>
            <a
              href="#"
              className="flex leading-[2.24rem] justify-center group relative items-center py-[0.8rem] px-[1.6rem] flex-shrink-0"
            >
              Products
              <DropLogo />
              <ProductDropDown className="hidden group-hover:inline-block" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex justify-center group relative items-center py-[0.8rem] px-[1.6rem] flex-shrink-0"
            >
              Enterprise
              <DropLogo />
              <EnterPriseDropDown className="hidden group-hover:inline-block" />
            </a>
          </li>
          <li>
            <a
              className={classNames(
                "flex items-center py-[0.8rem] px-[1.6rem] flex-shrink-0 cursor-pointer"
              )}
            >
              <span className="spanStyles">Pricing</span>
            </a>
          </li>
          <li>
            <a className="flex justify-center group cursor-pointer relative items-center py-[0.8rem] px-[1.6rem] flex-shrink-0">
              Communating
              <DropLogo />
              <CommunicatingDropDown className="hidden group-hover:inline-block" />
            </a>
          </li>
          <li>
            <a className="flex justify-center cursor-pointer group relative items-center py-[0.8rem] px-[1.6rem] flex-shrink-0">
              Company
              <DropLogo />
              <CompanyDropDown className="hidden group-hover:inline-block" />
            </a>
          </li>
          <li>
            <a className="flex items-center py-[0.8rem] px-[1.6rem] flex-shrink-0 cursor-pointer">
              <span className="spanStyles">Log in</span>
            </a>
          </li>
        </ul>
        {!sideBar && (
          <div>
            <a
              href="#"
              className="block rounded-[1rem] pt-[1.4rem] pb-[1.6rem] px-[2.4rem] font-[700] leading-[1] border-none cursor-pointer text-center bg-black relative transition-all ease-in duration-[200ms] hover:translate-y-[-0.2rem] text-white text-[1.8rem]"
            >
              Get started
            </a>
          </div>
        )}

        <button
          onClick={() => {
            if (sideBar) {
              setSideBar(false);
            } else {
              setSideBar(true);
            }
          }}
          className="xl:hidden ml-[2.4rem] cursor-pointer"
        >
          {sideBar ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
