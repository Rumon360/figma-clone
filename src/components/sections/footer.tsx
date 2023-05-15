const Footer = () => {
  return (
    <footer className="grid md:grid-cols-4 lg:grid-cols-5 gap-y-[4.8rem] text-[1.4rem]  max-w-[90%] md:max-w-[85%] lg:max-w-[95%] xl:max-w-[120rem] mx-auto">
      <div className="flex col-span-5 lg:col-span-1 justify-between lg:justify-start lg:flex-col items-start">
        <a href="#" className="relative mb-[1.3rem] w-[7.3rem] h-[2.6rem]">
          <img
            className="block w-full object-contain"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MyIgaGVpZ2h0PSIyNiIgY2xhc3M9InN2ZyI+CiAgPHBhdGggZD0iTS41MiAwdjIwLjE2bDIuNi4wMXYtOS42aDYuMjVWOC4wM0gzLjExdi01LjVoOC4xNVYwSC41MnptMTUuNCA0LjFhMS43IDEuNyAwIDEgMCAwLTMuNCAxLjcgMS43IDAgMCAwIDAgMy40em0tMS4zMSAyLjUzdjEzLjU0aDIuNlY2LjYzaC0yLjZ6Ii8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjYuODIgNi4yNGMtMy40NCAwLTUuODQgMi45MS01Ljg0IDYuMzdzMi40IDYuMzcgNS44NCA2LjM3YzEuNTggMCAyLjg4LS42IDMuODMtMS42djEuOGE0LjA3IDQuMDcgMCAwIDEtNC4wNiA0LjEyYy0uODMgMC0xLjY1LS4zMi0yLjMtLjc4bC0xLjMgMi4yNWE2LjY1IDYuNjUgMCAwIDAgMTAuMjYtNS42VjYuNjRoLTIuNnYxLjIxYy0uOTUtMS0yLjI1LTEuNi0zLjgzLTEuNnptLTMuMjUgNi4zN2MwLTIuMTUgMS42NC0zLjg0IDMuNTQtMy44NCAxLjkgMCAzLjUzIDEuNyAzLjUzIDMuODQgMCAyLjE1LTEuNjQgMy44My0zLjUzIDMuODMtMS45IDAtMy41NC0xLjY4LTMuNTQtMy44M3oiLz4KICA8cGF0aCBkPSJNNDIuNTkgOC43N2EyLjgzIDIuODMgMCAwIDAtMi43OCAyLjg0djguNTZoLTIuNlY2LjYzaDIuNnYxLjI0YTQuMSA0LjEgMCAwIDEgMy4zNC0xLjYzYzEuODIgMCAzLjIyLjkgNC4wMiAyLjI4YTQuOTggNC45OCAwIDAgMSA0LjEzLTIuMjhjMi45NSAwIDQuOCAyLjM4IDQuOCA1LjMzdjguNmgtMi41OFYxMS42YTIuODMgMi44MyAwIDAgMC0yLjc4LTIuODQgMi44MyAyLjgzIDAgMCAwLTIuNzggMi44NHY4LjU2aC0yLjZWMTEuNmEyLjgzIDIuODMgMCAwIDAtMi43Ny0yLjg0eiIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTY5LjkzIDguMTdhNi4yNyA2LjI3IDAgMCAwLTQuNTctMS45M2MtMy44NiAwLTYuNiAzLjI2LTYuNiA3LjE2IDAgMy45IDIuNzQgNy4xNiA2LjYgNy4xNmE2LjMgNi4zIDAgMCAwIDQuNTctMS45M3YxLjU0aDIuNTlWNi42M2gtMi42djEuNTR6bS04LjU4IDUuMjNjMC0yLjU4IDEuOTgtNC42MyA0LjI5LTQuNjMgMi4zIDAgNC4yOSAyLjA1IDQuMjkgNC42M3MtMS45OCA0LjYyLTQuMjkgNC42MmMtMi4zIDAtNC4yOS0yLjA0LTQuMjktNC42MnoiLz4KPC9zdmc+Cg=="
            alt="Figma"
          />
        </a>
        <ul className="flex lg:flex-col items-start gap-[1.6rem]">
          <li>
            <a
              href="#"
              className="text-[1.4rem] leading-[1.5] tracking-[0.02em] text-black flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 417"
                className="mr-[0.9rem] block w-[1.6rem] h-[1.6rem]"
              >
                <path d="M459.37 104.22c.32 4.54.32 9.1.32 13.64 0 138.72-105.58 298.56-298.55 298.56-59.45 0-114.68-17.22-161.14-47.1 8.45.97 16.57 1.3 25.34 1.3 49.05 0 94.21-16.58 130.27-44.84A105.12 105.12 0 0 1 57.51 253a132.7 132.7 0 0 0 19.81 1.62c9.42 0 18.84-1.3 27.61-3.57A104.95 104.95 0 0 1 20.8 148.07v-1.3a105.68 105.68 0 0 0 47.43 13.32A104.86 104.86 0 0 1 21.44 72.7c0-19.49 5.2-37.36 14.3-52.95a298.27 298.27 0 0 0 216.36 109.8c-1.62-7.8-2.6-15.91-2.6-24.03C249.5 47.69 296.28.58 354.44.58c30.2 0 57.5 12.67 76.67 33.14a206.6 206.6 0 0 0 66.6-25.34 104.65 104.65 0 0 1-46.14 57.83c21.12-2.28 41.59-8.13 60.43-16.25a225.57 225.57 0 0 1-52.63 54.26z"></path>
              </svg>
              <span className="hidden md:block">Twitter</span>
            </a>
          </li>
          <li className="figma-ou8xsw">
            <a
              href="#"
              className="text-[1.4rem] leading-[1.5] tracking-[0.02em] text-black flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-[0.9rem] block w-[1.6rem] h-[1.6rem]"
              >
                <path d="M15.6 2c.4 1.4.4 4.4.4 4.4s0 3-.4 4.4c-.2.8-.8 1.4-1.5 1.6-1.4.4-6.1.4-6.1.4s-4.7 0-6-.4c-.8-.2-1.4-.8-1.6-1.6C0 9.4 0 6.4 0 6.4S0 3.4.4 2C.6 1.2 1.2.6 1.9.4 3.3 0 8 0 8 0s4.7 0 6 .4c.8.2 1.4.8 1.6 1.6zM6.4 9.2l4.8-2.8-4.8-2.8v5.6z"></path>
              </svg>
              <span className="hidden md:block">YouTube</span>
            </a>
          </li>
          <li className="figma-ou8xsw">
            <a
              href="#"
              className="text-[1.4rem] leading-[1.5] tracking-[0.02em] text-black flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-[0.9rem] block w-[1.6rem] h-[1.6rem]"
                viewBox="0 0 449 449"
              >
                <path d="M224.18 109.6c-63.6 0-114.9 51.3-114.9 114.9 0 63.6 51.3 114.9 114.9 114.9 63.6 0 114.9-51.3 114.9-114.9 0-63.6-51.3-114.9-114.9-114.9zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8a26.8 26.8 0 1 1 26.8-26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1-26.3 26.2-34.4 58-36.2 93.9-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9 26.3 26.2 58 34.4 93.9 36.2 37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zm-47.8 224.5a75.63 75.63 0 0 1-42.6 42.6c-29.5 11.7-99.5 9-132.1 9-32.6 0-102.7 2.6-132.1-9a75.63 75.63 0 0 1-42.6-42.6c-11.7-29.5-9-99.5-9-132.1 0-32.6-2.6-102.7 9-132.1a75.63 75.63 0 0 1 42.6-42.6c29.5-11.7 99.5-9 132.1-9 32.6 0 102.7-2.6 132.1 9a75.63 75.63 0 0 1 42.6 42.6c11.7 29.5 9 99.5 9 132.1 0 32.6 2.7 102.7-9 132.1z"></path>
              </svg>
              <span className="hidden md:block">Instagram</span>
            </a>
          </li>
          <li className="figma-ou8xsw">
            <a
              href="#"
              className="text-[1.4rem] leading-[1.5] tracking-[0.02em] text-black flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-[0.9rem] block w-[1.6rem] h-[1.6rem]"
                viewBox="0 0 448 449"
              >
                <path d="M448 25.2v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V275h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8V70.8c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4V275h58.4v173.5H24.7C11.1 448.5 0 437.4 0 423.8V25.2C0 11.6 11.1.5 24.7.5h398.5C436.9.5 448 11.6 448 25.2z"></path>
              </svg>
              <span className="hidden md:block">Facebook</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-span-5 md:col-span-1 mb-[1.6rem] pr-[2.6rem]">
        <h6 className="font-semibold mb-[1.6rem]">Use Cases</h6>
        <ul className="flex flex-col items-start gap-[1.6rem]">
          <li>
            <a className="" href="#">
              UI design
            </a>
          </li>
          <li>
            <a className="" href="#">
              UX design
            </a>
          </li>
          <li>
            <a className="" href="#">
              Wireframing
            </a>
          </li>
          <li>
            <a className="" href="#">
              Diagramming
            </a>
          </li>
          <li>
            <a className="" href="#">
              Brainstorming
            </a>
          </li>
          <li>
            <a className="" href="#">
              Agile workflows
            </a>
          </li>
          <li>
            <a className="" href="#">
              Strategic planning
            </a>
          </li>
          <li>
            <a className="" href="#">
              Templates
            </a>
          </li>
          <li>
            <a className="" href="#">
              Remote design
            </a>
          </li>
          <li>
            <a className="" href="#">
              Agencies
            </a>
          </li>
          <li>
            <a className="" href="#">
              Figma for education
            </a>
          </li>
        </ul>
      </div>
      <div className="col-span-5 md:col-span-1 mb-[1.6rem] pr-[2.6rem]">
        <h6 className="font-semibold mb-[1.6rem]">Explore</h6>
        <ul className="flex flex-col items-start gap-[1.6rem]">
          <li>
            <a className="" href="/design/">
              Design features
            </a>
          </li>
          <li>
            <a className="" href="/prototyping/">
              Prototyping features
            </a>
          </li>
          <li>
            <a className="" href="/design-systems/">
              Design systems features
            </a>
          </li>
          <li>
            <a className="" href="/collaboration/">
              Collaboration features
            </a>
          </li>
          <li>
            <a className="" href="/design-process/">
              Design process
            </a>
          </li>
          <li>
            <a className="" href="/figjam/">
              FigJam
            </a>
          </li>
          <li>
            <a className="" href="/pricing/">
              Pricing
            </a>
          </li>
          <li>
            <a className="" href="/enterprise/">
              Enterprise
            </a>
          </li>
          <li>
            <a className="" href="/organization/">
              Organization
            </a>
          </li>
          <li>
            <a className="" href="/professional/">
              Professional
            </a>
          </li>
          <li>
            <a className="" href="/customers/">
              Customers
            </a>
          </li>
          <li>
            <a className="" href="/security/">
              Security
            </a>
          </li>
          <li>
            <a className="" href="/product-integrations/">
              Integrations
            </a>
          </li>
          <li>
            <a className="" href="/contact/">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="col-span-5 md:col-span-1 mb-[1.6rem] pr-[2.6rem]">
        <h6 className="font-semibold mb-[1.6rem]">Resources</h6>
        <ul className="flex flex-col items-start gap-[1.6rem]">
          <li>
            <a className="" href="/blog/">
              Blog
            </a>
          </li>
          <li>
            <a className="" href="/best-practices/">
              Best practices
            </a>
          </li>
          <li>
            <a href="https://help.figma.com/hc/en-us" className="">
              Support
            </a>
          </li>
          <li>
            <a href="/developers" className="">
              Developers
            </a>
          </li>
          <li>
            <a className="" href="/resources/learn-design/">
              Learn design
            </a>
          </li>
          <li>
            <a className="" href="/downloads/">
              Downloads
            </a>
          </li>
          <li>
            <a className="" href="/whats-new/">
              What's new
            </a>
          </li>
          <li>
            <a className="" href="/release-notes/">
              Releases
            </a>
          </li>
          <li>
            <a className="" href="/careers/">
              Careers
            </a>
          </li>
          <li>
            <a className="" href="/about/">
              About us
            </a>
          </li>
          <li>
            <a className="" href="/partners/">
              Partners
            </a>
          </li>
          <li>
            <a className="" href="/summary-of-policy/">
              Privacy
            </a>
          </li>
          <li>
            <a
              href="https://static.figma.com/uploads/e7358481d9f34ffad1416f2b2660bbf95b4e9618"
              className=""
            >
              Modern Slavery Statement
            </a>
          </li>
          <li>
            <a href="https://status.figma.com/" className="">
              Status
            </a>
          </li>
        </ul>
      </div>
      <div className="col-span-5 md:col-span-1 mb-[1.6rem] pr-[2.6rem]">
        <h6 className="font-semibold mb-[1.6rem]">Compare</h6>
        <ul className="flex flex-col items-start gap-[1.6rem]">
          <li>
            <a className="" href="/figma-vs-sketch/">
              Sketch
            </a>
          </li>
          <li>
            <a className="" href="/figma-vs-adobe-xd/">
              Adobe XD
            </a>
          </li>
          <li>
            <a className="" href="/figma-vs-invision-studio/">
              Invision Studio
            </a>
          </li>
          <li>
            <a className="" href="/figma-vs-framer/">
              Framer
            </a>
          </li>
          <li>
            <a className="" href="/sketch-alternative/">
              Design on Windows
            </a>
          </li>
          <li>
            <a className="" href="/figjam-vs-miro/">
              Miro
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
