import DropLogo from "./icons/drop-logo";
import { useState } from "react";

const Sidebar = () => {
  const [showProductMenu, setShowProductMenu] = useState<boolean>(false);
  const [showEnterpriseMenu, setShowEnterpriseMenu] = useState<boolean>(false);
  const [showCommunity, setShowCommunity] = useState<boolean>(false);
  const [showCompany, setShowCompany] = useState<boolean>(false);

  const dropDownMenus = [
    {
      name: "Products",
      menu: [
        "Figma",
        "Design",
        "Prototyping",
        "Design systems",
        "Downloads",
        "FigJam",
        "Online whiteboarding",
        "Strategic planning",
        "Team meetings",
        "Diagramming",
      ],
    },
    {
      name: "Enterprise",
      menu: ["Overview", "Curtomers", "Contact Sales"],
    },
    {
      name: "Community",
      menu: [
        "Files and templates",
        "Plugins and widgets",
        "Events and livestreams",
        "Best practices",
        "Education program",
        "User groups",
        "Community creators",
      ],
    },
    {
      name: "Company",
      menu: ["Blog", "Careers", "Our story", "Help Center"],
    },
  ];

  return (
    <nav className="px-[4.8rem] sidebar flex flex-col items-start mt-[0.8rem] text-[2rem] min-h-screen xl:hidden">
      <div className="flex relative items-start flex-col">
        <button
          onClick={() => setShowProductMenu((prev) => !prev)}
          className="flex items-center justify-between py-[1.2rem] mb-[0.6rem] cursor-pointer"
        >
          <span>Products</span>
          <DropLogo />
        </button>
        {showProductMenu && (
          <div
            className="flex flex-col items-start whitespace-nowrap z-20"
            role="menu"
          >
            {dropDownMenus[0].menu.map((item) => (
              <a
                key={item}
                role="menuitem"
                className="ml-[1em] pb-[0.6rem] px-[1.2rem] mb-[0.6rem] cursor-pointer"
                href="#"
              >
                <span>{item}</span>
              </a>
            ))}
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => setShowEnterpriseMenu((prev) => !prev)}
          className="flex items-center justify-between py-[1.2rem] mb-[0.6rem] cursor-pointer"
        >
          <span>Enterprise</span>
          <DropLogo />
        </button>
        {showEnterpriseMenu && (
          <div
            className="flex flex-col items-start whitespace-nowrap z-20"
            role="menu"
          >
            {dropDownMenus[1].menu.map((item) => (
              <a
                key={item}
                role="menuitem"
                className="ml-[1em] pb-[0.6rem] px-[1.2rem] mb-[0.6rem] cursor-pointer"
                href="#"
              >
                <span>{item}</span>
              </a>
            ))}
          </div>
        )}
      </div>
      <a>
        <button className="flex items-center justify-between py-[1.2rem] mb-[0.6rem]">
          Pricing
        </button>
      </a>
      <div>
        <button
          onClick={() => setShowCommunity((prev) => !prev)}
          className="flex items-center justify-between py-[1.2rem] mb-[0.6rem]"
        >
          <span>Community</span>
          <DropLogo />
        </button>
        {showCommunity && (
          <div
            className="flex flex-col items-start whitespace-nowrap z-20"
            role="menu"
          >
            {dropDownMenus[2].menu.map((item) => (
              <a
                key={item}
                role="menuitem"
                className="ml-[1em] pb-[0.6rem] px-[1.2rem] mb-[0.6rem] cursor-pointer"
                href="#"
              >
                <span>{item}</span>
              </a>
            ))}
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => setShowCompany((prev) => !prev)}
          className="flex items-center justify-between py-[1.2rem] mb-[0.6rem]"
        >
          <span>Company</span>
          <DropLogo />
        </button>
        {showCompany && (
          <div
            className="flex flex-col items-start whitespace-nowrap z-20"
            role="menu"
          >
            {dropDownMenus[3].menu.map((item) => (
              <a
                key={item}
                role="menuitem"
                className="ml-[1em] pb-[0.6rem] px-[1.2rem] mb-[0.6rem] cursor-pointer"
                href="#"
              >
                <span>{item}</span>
              </a>
            ))}
          </div>
        )}
      </div>
      <a href="#">
        <button className="flex items-center justify-between py-[1.2rem] mb-[0.6rem]">
          Login
        </button>
      </a>
      <a>
        <button className="bg-black inline-block text-white rounded-[1rem] pt-[1.4rem] px-[2.4rem] pb-[1.6rem] text-[1.8rem] font-[700] leading-[1] border-none cursor-pointer text-center transition-all ease-in duration-[200ms] hover:translate-y-[-0.2rem]">
          Get started
        </button>
      </a>
    </nav>
  );
};

export default Sidebar;
