import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="flex-col pb-20 lg:flex ">
        <div className="lg:flex lg:flex-row lg:justify-between">
          <div>
            <div className="flex justify-start items-center">
              <svg
                width="40"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1113_5096)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M115.295 1.2998L153.528 46.6258L162.446 130.383L94.9624 201.3L16.4463 130.15L55.9808 29.5573L115.295 1.2998ZM59.4094 37.2798L90.9446 70.5936L58.6944 117.37L24.8947 125.1L59.4094 37.2798ZM26.3158 130.963L86.2524 185.277L58.7638 123.543L26.3158 130.963ZM65.3463 123.535L95.7255 191.761L152.845 131.736L65.3463 123.535ZM155.477 121.723L148.068 52.1487L100.376 71.3063L155.477 121.723ZM95.5829 66.7325L145.647 46.6222L113.694 8.74155L63.3789 32.7121L95.5829 66.7325ZM95.323 74.8483L150.648 125.47L65.8982 117.527L95.323 74.8483Z"
                    fill="url(#paint0_linear_1113_5096)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1113_5096"
                    x1="89.4463"
                    y1="1.2998"
                    x2="89.4463"
                    y2="201.3"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFAC0B" />
                    <stop offset="1" stop-color="#0B99FF" />
                  </linearGradient>
                  <clipPath id="clip0_1113_5096">
                    <rect width="200" height="200" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <h1 className="sm:text-2xl text-xl font-bold ml-2 tracking-tight text-white">
                EchoWave
              </h1>
            </div>
            <p className="font-inter mt-4 max-w-[350px] text-base text-left font-light text-zinc-200">
              Imagine a world where every podcast feels like it was made just
              for you. Where your interests, no matter how niche or broad, are
              met with content that educates, entertains, and enlightens.
            </p>
            <div className="mb-8 mt-6 flex flex-row">
              <a
                href="https://github.com/UtkarshS611"
                className="text-white transition hover:text-zinc-100 ml-4"
              >
                <svg
                  className="fill-current"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />{" "}
                </svg>
              </a>
            </div>
          </div>
          <div className="flex grow flex-row flex-wrap text-left lg:mx-10 lg:flex-nowrap lg:justify-center">
            <div className="my-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10">
              <h2 className="font-inter font-medium text-white">SUPPORT</h2>
              
              <a href="/" className="font-inter font-light text-zinc-200">
                Guides
              </a>
              <a href="#faq" className="font-inter font-light text-zinc-200">
                FAQ
              </a>
            </div>
            <div className="my-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10">
              <h2 className="font-inter font-medium text-white">COMPANY</h2>
              <a href="" className="font-inter font-light text-zinc-200">
                About
              </a>
              <a href="/" className="font-inter font-light text-zinc-200">
                Blog
              </a>
            </div>
          </div>
          <div className="mt-10 flex flex-col lg:">
            <div className="mb-4 flex flex-row items-center">
              <svg
                className="flex-none"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill="black"></circle>
                <path
                  d="M26.6211 14.45C25.5711 9.83 21.5411 7.75 18.0011 7.75C18.0011 7.75 18.0011 7.75 17.9911 7.75C14.4611 7.75 10.4211 9.82 9.37107 14.44C8.20107 19.6 11.3611 23.97 14.2211 26.72C15.2811 27.74 16.6411 28.25 18.0011 28.25C19.3611 28.25 20.7211 27.74 21.7711 26.72C24.6311 23.97 27.7911 19.61 26.6211 14.45ZM18.0011 19.46C16.2611 19.46 14.8511 18.05 14.8511 16.31C14.8511 14.57 16.2611 13.16 18.0011 13.16C19.7411 13.16 21.1511 14.57 21.1511 16.31C21.1511 18.05 19.7411 19.46 18.0011 19.46Z"
                  fill="white"
                ></path>
              </svg>
              <p className="font-inter ml-4 text-white">Earth</p>
            </div>
            
          </div>
        </div>
        <div className="mx-auto my-6 w-full border border-white lg:my-12"></div>
        <div>
          <p className="font-inter text-center text-sm text-zinc-200 lg:">
            © Copyright 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
