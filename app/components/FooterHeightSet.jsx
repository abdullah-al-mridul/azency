"use client";
import React, { useEffect } from "react";

const FooterHeightSet = () => {
  useEffect(() => {
    const updateHeight = () => {
      const element = document.getElementById("footer");

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
  return null;
};

export default FooterHeightSet;
