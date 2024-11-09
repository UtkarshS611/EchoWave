"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { GradientButton } from "./ui/GradientButton";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex-col md:flex md:flex-row justify-between items-center w-full mt-2 pb-2 sm:px-4 px-2 text-white">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="ml-4 md:ml-4 flex items-center justify-center"
        >
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

          <h1 className="sm:text-2xl text-xl font-bold tracking-tight">
            EchoWave
          </h1>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden mr-4"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {!isOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="md:justify-end md:items-center hidden w-full md:flex">
        <Link
          className="mr-2 rounded-xl cursor-pointer font-medium px-4 py-3 "
          href="/#how-it-works"
        >
          How it works
        </Link>
        <Link
          className="mr-2 rounded-xl cursor-pointer font-medium px-4 py-3 "
          href="/#features"
        >
          Features
        </Link>
        <Link
          className="mr-4 rounded-xl cursor-pointer font-medium px-4 py-3 "
          href="/#faq"
        >
          FAQ
        </Link>
        <Link
          className="rounded-xl cursor-pointer font-medium"
          href="/dashboard"
        >
          <button className="rounded-xl inline-flex h-12 animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Get Started
          </button>
        </Link>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div
              ref={ref}
              className="px-6 pt-2 pb-3 space-y-4 sm:px-3 flex-col flex text-xl "
            >
              <Link className="font-medium " href="/#how-it-works">
                How it works
              </Link>
              <Link className="font-medium " href="/#features">
                Features
              </Link>
              <Link className="font-medium " href="/#pricing">
                Pricing
              </Link>
              <Link className="rounded-xl font-bold " href="/dashboard">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </header>
  );
}
