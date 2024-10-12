import Image from "next/image";
import "./globals.css";
import navLogo from "../public/nav-logo.png";
import azencyLogo from "../public/azency-footer-logo.png";
import { Poppins } from "next/font/google";
import "@/app/styles/homepage.css";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import FooterHeightSet from "./components/FooterHeightSet";
import Header from "./components/Header";
export const metadata = {
  title: "Azency | Best Digital Marketing Agency In USA, India &amp; Nepal",
  description:
    "Azency is one of the best digital marketing agency in USA, India &amp; Nepal. Our countless years of expertise have made us the best digital marketing agency around!",
  icons: {
    icon: "./logo.png",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${poppins.className}`}>
        <div className=" px-[40px] max-laptop:px-[20px]">
          <div className=" max-w-[1200px] mx-auto ">
            <div className=" h-[var(--headerHeight)] fixed max-laptop:px-[20px] px-[40px] bg-[#fff] w-full left-0 gap-[10px] ">
              <Header />
            </div>
            <div className=" min-h-[calc(calc(100vh-calc(var(--headerHeight)+var(--footerHeight)))+61px)]">
              <div className=" h-[var(--headerHeight)]"></div>
              <p className=" text-center my-[40px]">
                content will be placed here
              </p>
            </div>
            <div className=" h-[var(--footerHeight)]">
              <footer id="footer">
                <FooterHeightSet />
                <div className=" flex  flex-wrap gap-[20px] justify-between">
                  <div>
                    <Image
                      className=" mb-[30px]"
                      alt="azency-footer-logo"
                      src={navLogo}
                      height={40}
                    />
                    <p className=" text-[#908f8f] my-[14px] text-[14px] font-[300]">
                      Creative Design & <br /> Development Agency
                    </p>
                    <p className="text-[#000] my-[14px] text-[14px] font-[300]">
                      Info@Azency.Com
                    </p>
                    <ul className=" flex gap-[18px] text-[24px] mt-[20px]">
                      <li>
                        <a
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram />
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebook />
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin />
                        </a>
                      </li>
                    </ul>
                    <p className="text-[#908f8f] text-[14px] font-[300] mt-[40px]">
                      Unit Of MG Group
                    </p>
                  </div>
                  <div>
                    <ul className=" flex flex-col gap-[8px] footer__nav__list">
                      <li>Home</li>
                      <li>About Us</li>
                      <li>Portfolio</li>
                      <li>Contact</li>
                      <li>Careers</li>
                      <li>Blogs</li>
                      <li>News Release</li>
                    </ul>
                  </div>
                  <div>
                    <ul className=" flex flex-col gap-[8px] footer__nav__list">
                      <li>Website</li>
                      <li>E-Commerce Website</li>
                      <li>WordPress Website</li>
                      <li>Shopify E-Commerce</li>
                    </ul>
                  </div>
                  <div>
                    <ul className=" flex flex-col gap-[8px] footer__nav__list">
                      <li>Shopify</li>
                      <li>Shopify E-Commerce</li>
                      <li>Shopify Migration</li>
                      <li>Shopify Marketing</li>
                    </ul>
                  </div>
                  <div>
                    <ul className=" flex flex-col gap-[8px] footer__nav__list">
                      <li>Marketing</li>
                      <li>Social Media Marketing</li>
                      <li>Design & Branding</li>
                      <li>SEO</li>
                      <li>Influencer Marketing</li>
                    </ul>
                  </div>
                </div>
                <div className=" mt-[55px] text-[14px] flex max-laptop:gap-[50px] max-laptop:justify-between max-laptop:flex-wrap gap-[230px]">
                  <div>
                    2035 Sunset Lake Road, Suite B-2, Newark, <br /> DE - 19702
                    Delaware, USA <br />
                    +1 863 825 5654
                  </div>
                  <div>
                    II floor, 125, Shahpur Jat, <br /> 110049, Delhi , India{" "}
                    <br />
                    +91 8447769638
                  </div>
                  <div>
                    Balkumari 44700,
                    <br />
                    Lalitpur, Nepal <br />
                    +977 9801282911
                  </div>
                </div>
                <div className=" mt-[35px]">
                  <Image
                    alt="azency-footer-logo"
                    height={100}
                    src={azencyLogo}
                  />
                </div>
              </footer>
            </div>
          </div>
        </div>
        <div className=" bg-[#fdece0] text-[14px] py-[20px] mt-[15px]">
          <p className=" text-center">© Azency, 2024 All Rights Reserved</p>
        </div>
      </body>
    </html>
  );
}
