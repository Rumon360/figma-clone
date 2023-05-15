import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import SectionOne from "./components/sections/section-one";
import SectionTwo from "./components/sections/section-two";
import SectionThree from "./components/sections/section-three";

import { useState, useEffect } from "react";
import SectionFour from "./components/sections/section-four";
import SectionFive from "./components/sections/section-five";
import SectionSix from "./components/sections/section-six";
import UsersOfFigma from "./components/sections/users-of-figma";
import Community from "./components/sections/join-community";
import Login from "./components/sections/login";
import Footer from "./components/sections/footer";
import Note from "./components/note";

function App() {
  const [sideBar, setSideBar] = useState<boolean>(false);
  const [showFloatingButton, setShowFloatingButton] = useState<boolean>(false);
  const [showNote, setShowNote] = useState<boolean>(true);

  useEffect(() => {
    if (sideBar) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [sideBar]);

  return (
    <div className={`${sideBar && "overflow-hidden relative"}`}>
      <Header sideBar={sideBar} setSideBar={setSideBar} />
      {sideBar && <Sidebar />}
      <main>
        <Hero />
        <SectionOne setShowFloatingButton={setShowFloatingButton} />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <UsersOfFigma />
        <Community />
        <Login />
        <Footer />
        <div className="flex gap-[2.4rem] justify-center items-center flex-wrap py-[6rem]">
          <a
            aria-current="page"
            className="text-[1.4rem] leading-[1.5] tracking-[0.02em] pl-[2.4rem] relative"
            href="#s"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="absolute left-0 top-[0.3rem] w-[1.7rem] h-[1.7rem]"
            >
              <rect
                width="15"
                height="15"
                x="0.5"
                y="0.5"
                stroke="#000"
                rx="7.5"
              ></rect>
              <path
                stroke="#000"
                d="M1 8h14M10.5 8c0 2.165-.33 4.103-.847 5.481-.259.691-.556 1.216-.86 1.559-.304.343-.573.46-.793.46-.22 0-.49-.117-.794-.46-.304-.343-.6-.868-.86-1.559C5.83 12.103 5.5 10.165 5.5 8s.33-4.103.847-5.481c.259-.691.555-1.216.86-1.559C7.51.617 7.78.5 8 .5c.22 0 .49.117.794.46.303.343.6.868.86 1.559.516 1.378.846 3.316.846 5.481Z"
              ></path>
            </svg>
            English
          </a>
        </div>
      </main>
      <div className="hidden lg:block">
        <a
          href="#"
          className={`fixed  ${
            showFloatingButton ? "translate-y-0" : "-translate-y-[200%]"
          } top-[3.2rem] right-[3.2rem] block rounded-[1rem] pt-[1.4rem] pb-[1.6rem] px-[2.4rem] font-[700] leading-[1] border-none cursor-pointer text-center bg-black transition-all ease-in duration-[200ms] hover:translate-y-[-0.2rem] text-white text-[1.8rem]`}
        >
          Get started
        </a>
      </div>
      {showNote && <Note setShowNote={setShowNote} />}
    </div>
  );
}

export default App;
