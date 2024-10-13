"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import navLogo from "../../public/logo.png";
import { Squash as Hamburger } from "hamburger-react";
const Header = () => {
  useEffect(() => {
    const updateHeight = () => {
      const element = document.getElementById("header");

      if (element) {
        const height = element.offsetHeight;
        document.documentElement.style.setProperty(
          "--footerHeight",
          `${height}px`
        );
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);
  const [isMenu, setIsMenu] = useState(false);
  return (
    <>
      <div
        id="header"
        className=" flex justify-between gap-[10px] items-center max-w-[1200px] mx-auto h-full"
      >
        <div className=" min-w-[max-content]">
          <Image
            className=" max-desktop:h-[60px] max-laptop:h-[55px] max-mobile:h-[40px] max-tablet:h-[45px] w-auto"
            alt="nav-logo-agency"
            src={navLogo}
            height={70}
          />
        </div>
        <div>
          <ul className=" nav__link max-desktop:text-[15px] max-laptop-sm:text-[13px] max-laptop:text-[14px] transition-all font-[500] flex justify-center max-tablet:hidden flex-wrap max-laptop:gap-[18px] max-laptop-sm:gap-[16px] max-desktop:gap-[20px] gap-[24px] text-[#23282d]">
            <li>Home</li>
            <li className="hover__item items-center flex relative gap-[7px]">
              <span>Websites</span>
              <svg
                className="si-icon"
                xmlns="http://www.w3.org/2000/svg"
                width={11}
                height={11}
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M24.958 10.483c-0.534-0.534-1.335-0.534-1.868 0l-7.074 7.074-7.074-7.074c-0.534-0.534-1.335-0.534-1.868 0s-0.534 1.335 0 1.868l8.008 8.008c0.267 0.267 0.667 0.4 0.934 0.4s0.667-0.133 0.934-0.4l8.008-8.008c0.534-0.534 0.534-1.335 0-1.868z" />
              </svg>
              <ul className=" bg-[#fff] shadow-xl w-[max-content] text-[#30373e] flex flex-col gap-[14px] border-b border-[#007aff] absolute p-[20px] top-[24px]">
                <li>WooCommerce</li>
                <li>WordPress Website</li>
                <li>Shopify E-Commerce</li>
              </ul>
            </li>
            <li className="hover__item relative items-center flex gap-[7px]">
              <span>Shopify</span>
              <svg
                className="si-icon"
                xmlns="http://www.w3.org/2000/svg"
                width={11}
                height={11}
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M24.958 10.483c-0.534-0.534-1.335-0.534-1.868 0l-7.074 7.074-7.074-7.074c-0.534-0.534-1.335-0.534-1.868 0s-0.534 1.335 0 1.868l8.008 8.008c0.267 0.267 0.667 0.4 0.934 0.4s0.667-0.133 0.934-0.4l8.008-8.008c0.534-0.534 0.534-1.335 0-1.868z" />
              </svg>
              <ul className=" bg-[#fff] shadow-xl w-[max-content] text-[#30373e] flex flex-col gap-[14px] border-b border-[#007aff] absolute p-[20px] top-[24px]">
                <li>Shopify Store Development</li>
                <li>Shopify Migration</li>
                <li>Shopify Marketing</li>
              </ul>
            </li>
            <li className="hover__item relative items-center flex gap-[7px]">
              <span>Marketing</span>
              <svg
                className="si-icon"
                xmlns="http://www.w3.org/2000/svg"
                width={11}
                height={11}
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M24.958 10.483c-0.534-0.534-1.335-0.534-1.868 0l-7.074 7.074-7.074-7.074c-0.534-0.534-1.335-0.534-1.868 0s-0.534 1.335 0 1.868l8.008 8.008c0.267 0.267 0.667 0.4 0.934 0.4s0.667-0.133 0.934-0.4l8.008-8.008c0.534-0.534 0.534-1.335 0-1.868z" />
              </svg>
              <ul className=" bg-[#fff] shadow-xl w-[max-content] text-[#30373e] flex flex-col gap-[14px] border-b border-[#007aff] absolute p-[20px] top-[24px]">
                <li>Social Media Marketing</li>
                <li>Design & Branding</li>
                <li>SEO</li>
                <li>Influencer Marketing</li>
              </ul>
            </li>
            <li>Portfolio</li>
            <li>About Us</li>
            <li>Blogs</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className=" flex items-center gap-[10px]">
          <a
            href="#"
            className=" max-mobile:hidden max-laptop:px-[20px] max-desktop:px-[25px] max-desktop:py-[8px] transition-all max-tablet:px-[18px] max-tablet:py-[5px] px-[30px] py-[10px] rounded-md bg-[#0a84ff]"
          >
            <span className=" text-[15px] max-desktop:text-[15px] max-laptop:text-[14px] max-laptop-sm:text-[13px]  text-nowrap text-[#fff] font-[500]">
              Get In Touch
            </span>
          </a>
          <div className=" hidden max-tablet:block">
            <Hamburger
              color="#0A84FF"
              size={23}
              toggled={isMenu}
              toggle={setIsMenu}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          visibility: isMenu ? "visible" : "hidden",
          opacity: isMenu ? 1 : 0,
        }}
        className="bg-[#fff] transition-opacity h-[calc(100vh-var(--headerHeight))]"
      >
        <ul className="mobile__nav text-[16px] font-[500]">
          <li>Home</li>
          <li>Websites</li>
          <li>Shopify</li>
          <li>Marketing</li>
          <li>Portfolio</li>
          <li>About Us</li>
          <li>Blogs</li>
          <li>Careers</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
