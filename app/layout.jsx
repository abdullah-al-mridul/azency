import Image from "next/image";
import "./globals.css";
import navLogo from "../public/logo.png";
import azencyLogo from "../public/azency-footer-logo.png";
import { Poppins } from "next/font/google";
import "@/app/styles/homepage.css";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import FooterHeightSet from "./components/FooterHeightSet";
import Header from "./components/Header";
import HeroTop from "@/public/hero-top.png";
import WebsiteDevImg from "@/public/website-dev.webp";
import ShopifyExpertLogo from "@/public/shopify-expert.png";
import ShopifyExpertId from "@/public/shopify-id.webp";
import FacebookBuiss from "@/public/facebook-buiss.png";
import GooglePart from "@/public/google-part.webp";
import MarketingPart from "@/public/marketing-partner.webp";
import Project1 from "@/public/project-1.webp";
import Project2 from "@/public/project-2.webp";
import Project3 from "@/public/project-3.webp";
import Project4 from "@/public/project-4.webp";
import BasePoke from "@/public/bespoke.webp";
import Better from "@/public/better.png";
import Cossac from "@/public/cossac.webp";
import Dfsk from "@/public/dfsk.webp";
import Gimpress from "@/public/gimpress.webp";
import GrandPati from "@/public/grandpati.webp";
import Gravity from "@/public/gravity.webp";
import Hyatt from "@/public/hyatt.webp";
import Raghu from "@/public/raghuvanshi.webp";
import Unicef from "@/public/unicef.webp";
import Wayfree from "@/public/wayfree.webp";
import Yadea from "@/public/yadea.webp";
import Gayatri from "@/public/gayatri.webp";
import ShopifyExperts from "@/public/shopify-express.webp";
import SCM from "@/public/social-marketing.webp";
import AndroidIOS from "@/public/android-ios.webp";
import DesignBrand from "@/public/design-branding.webp";
import Influencer from "@/public/influencer.webp";
import { TbWorldBolt } from "react-icons/tb";
import { FaDroplet } from "react-icons/fa6";
import { MdAccountBox } from "react-icons/md";
import { FaSearchengin } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { TbSocial } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa";

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
            <div className=" h-[var(--headerHeight)] fixed z-40 max-laptop:px-[20px] px-[40px] bg-[#fff] w-full left-0 gap-[10px] ">
              <Header />
            </div>
            <div className=" min-h-[calc(calc(100vh-calc(var(--headerHeight)+var(--footerHeight)))+61px)]">
              <div className=" h-[var(--headerHeight)]"></div>
              <div className=" mt-[80px]">
                <p className=" text-[#000] text-center text-[14px] font-[300]">
                  Creative Design & Development Agency
                </p>
                <h1 className=" mt-[30px] text-[54px] text-center text-[#0174B5] font-[900]">
                  Digital Marketing.
                  <br />
                  Website. Shopify. branding.
                </h1>
                <p className=" mt-[50px] mb-[100px] text-center font-[300] hero__desc">
                  A digital marketing agency consisting of top experts in{" "}
                  <a>Shopify store development</a>,{" "}
                  <a>social media marketing</a>,{" "}
                  <a>website design and development</a>, and{" "}
                  <a>search engine optimization (SEO)</a>.
                </p>
                <div className=" mb-[80px]">
                  <Image alt="hero-top-img" src={HeroTop} />
                </div>
              </div>
              <div>
                <p className=" text-[14px] text-[#0272fa] mb-[50px]">
                  What We Do
                </p>
                <h1 className=" font-[900] mb-[30px] text-[54px] text-[#0174B5]">
                  An All-Rounded Digital <br /> Marketing Approach To <br />{" "}
                  Your Brand’s Online <br /> Presence
                </h1>
                <p className=" font-[300] max-w-[740px] what__we_do">
                  The great thing about Azency is that we provide all marketing
                  solutions in one! Get entire tech solutions provided for all
                  of your brand’s needs. From <a href="">website development</a>{" "}
                  to <a href="">Shopify migration</a>, <a href="">branding</a>,
                  and <a href="">digital promotions</a>. We’ve got you covered!
                </p>
                <div className=" grid grid-cols-2 mt-[70px] gap-[25px]">
                  <div>
                    <div className="image__brightness transition-all">
                      <Image
                        className=" hover:brightness-75 transition-all"
                        src={WebsiteDevImg}
                        alt="Website-development"
                        placeholder="blur"
                      />
                    </div>
                    <p className=" font-[500] mt-[20px]">Website Development</p>
                  </div>
                  <div>
                    <div>
                      <Image
                        src={ShopifyExperts}
                        className=" hover:brightness-75 transition-all"
                        alt="shopify-experts"
                        placeholder="blur"
                      />
                    </div>
                    <p className=" font-[500] mt-[20px]">Shopify Experts</p>
                  </div>
                  <div>
                    <div>
                      <Image
                        className=" hover:brightness-75 transition-all"
                        src={SCM}
                        alt="social-media-marketing"
                        placeholder="blur"
                      />
                    </div>
                    <p className=" font-[500] mt-[20px]">
                      Social Media Marketing
                    </p>
                  </div>
                  <div>
                    <div>
                      <Image
                        className=" hover:brightness-75 transition-all"
                        src={AndroidIOS}
                        alt="android-ios-development"
                        placeholder="blur"
                      />
                    </div>
                    <p className=" font-[500] mt-[20px]">
                      Android & IOS App Development
                    </p>
                  </div>
                  <div>
                    <div>
                      <Image
                        className=" hover:brightness-75 transition-all"
                        src={DesignBrand}
                        alt="design-branding"
                        placeholder="blur"
                      />
                    </div>
                    <p className=" font-[500] mt-[20px]">Design & Branding</p>
                  </div>
                  <div>
                    <div>
                      <Image
                        className=" hover:brightness-75 transition-all"
                        src={Influencer}
                        alt="influencer-marketing"
                        placeholder="blur"
                      />
                    </div>
                    <p className=" font-[500] mt-[20px]">
                      Influencer Marketing
                    </p>
                  </div>
                </div>
              </div>
              <div className=" mt-[120px]">
                <p className=" text-[14px] text-[#0272fa] mb-[30px]">
                  Who We Are
                </p>
                <div className=" flex justify-between">
                  <h1 className=" text-[40px] max-w-[600px] text-wrap font-[900] text-[#0174B5]">
                    A digital marketing agency that provides 360-degree solution
                    to all of your online marketing needs.
                  </h1>
                  <div className=" grid grid-cols-2 gap-x-[150px]">
                    <div className="counter__gradiant">
                      <h3>5000+</h3>
                      <p>Creatives Made</p>
                    </div>
                    <div className="counter__gradiant">
                      <h3>250+</h3>
                      <p>Websites</p>
                    </div>
                    <div className="counter__gradiant">
                      <h3>800+</h3>
                      <p>Projects</p>
                    </div>
                    <div className="counter__gradiant">
                      <h3>500+</h3>
                      <p>Clients</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mt-[100px]">
                <div className=" mx-auto w-max">
                  <Image
                    alt="shopify-experts"
                    height={22}
                    src={ShopifyExpertLogo}
                  />
                </div>
                <h1 className=" text-center mt-[30px] text-[54px] font-[900] text-[#0174B5]">
                  We Are <br /> Shopify Expert Partners
                </h1>
                <p className=" mt-[30px] text-center text-[#0082CD] max-w-[850px] mx-auto">
                  Azency as a certified{" "}
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    Shopify Expert
                  </a>
                  . We will help your Shopify stores stand out from other
                  eCommerce websites out there. Whether you require Shopify
                  website development, Shopify store migration or eCommerce
                  marketing, we provide all services.
                </p>
                <a
                  className=" block w-max mx-auto mt-[40px] text-[#007EC3] font-[500] py-[10px] px-[20px] rounded-md bg-[#a1dcffc5] hover:bg-[#a1dcffe1] transition-all"
                  href="http://"
                >
                  View Shopify Experts Profile
                </a>
              </div>
              <div className=" mt-[70px]">
                <div className=" flex gap-[30px] mb-[30px] items-center">
                  <Image height={30} alt="facebook-buiss" src={FacebookBuiss} />
                  <div className="h-max">
                    <Image height={20} alt="google-part" src={GooglePart} />
                  </div>
                </div>
                <div className=" flex gap-[30px]">
                  <div>
                    <h1 className=" text-[54px] text-[#0174B5] font-[900]">
                      Facebook and <br /> Google Marketing Partners
                    </h1>
                    <p className=" mt-[40px] font-[300]">
                      As a digital marketing agency, our services include{" "}
                      <a className=" text-[#0a84ff] font-[500]">
                        social media marketing
                      </a>
                      . We are marketing partners for Facebook and Google, and
                      we can help you grow your business on popular platforms
                      for your potential customers. We work with paid
                      advertising and PPC (Pay-Per-Click).
                    </p>
                  </div>
                  <div>
                    <Image alt="marketing-side-img" src={MarketingPart} />
                  </div>
                </div>
              </div>
              <div className=" mt-[70px] ">
                <h1 className=" text-[54px] text-[#0174B5] font-[900] mb-[35px]">
                  The Azency <br /> Experience.
                </h1>
                <p className=" font-[300] max-w-[550px] mb-[20px]">
                  We are hooked on providing creative approaches to make your
                  brand stand out. Don’t just find a solution, find the right
                  solution. With Azency, you get the brand development and
                  transformation that your business requires.
                </p>
                <p className=" font-[300] max-w-[550px] mb-[20px]">
                  We have collaborated with a diverse range of clients, from
                  fashion houses and electronics to jewellery lines and pet
                  stores. Thus, providing us with an all-rounded knowledge of
                  digital marketing required for eCommerce development and
                  digital branding.
                </p>
              </div>
              <div className=" mt-[60px]">
                <p className=" font-[300] text-[#0272fa] mb-[50px]">About Us</p>
                <div className=" grid grid-cols-4 gap-y-[25px] about__us__list">
                  <div>
                    <span>
                      <TbWorldBolt />
                    </span>
                    <p>Beautiful And Fast Websites</p>
                  </div>
                  <div>
                    <span>
                      <FaDroplet />
                    </span>
                    <p>Smooth Website Runtime</p>
                  </div>
                  <div>
                    <span>
                      <MdAccountBox />
                    </span>
                    <p>Best Social Media Creatives</p>
                  </div>
                  <div>
                    <span>
                      <FaSearchengin />
                    </span>
                    <p>Data Driven Aproach</p>
                  </div>
                  <div>
                    <span>
                      <FaShopify />
                    </span>
                    <p>Work With Shopify Experts</p>
                  </div>
                  <div>
                    <span>
                      <TbSocial />
                    </span>
                    <p>Top Quality Social Media</p>
                  </div>
                  <div>
                    <span>
                      <BsGraphUpArrow />
                    </span>
                    <p>We Grow With You</p>
                  </div>
                  <div>
                    <span>
                      <FaHeadphones />
                    </span>
                    <p>Priority Customer Support</p>
                  </div>
                </div>
              </div>
              <div className=" mt-[70px]">
                <p className=" text-[14px] font-[400] text-[#0272fa] mb-[40px]">
                  Our Services
                </p>
                <h1 className=" text-[54px] font-[900] text-[#0174B5]">
                  Project <br /> Showcase
                </h1>
                <p className=" font-[300] mt-[20px] max-w-[550px] mb-[50px]">
                  We have collaborated with a diverse range of clients, thus,
                  providing us an all-rounded knowledge of digital marketing,
                  Shopify store development and digital branding.
                </p>
                <div className=" grid grid-cols-4 gap-[20px] project__showcase">
                  <div>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <Image
                        placeholder="blur"
                        src={Project1}
                        alt="Gravity Nepal Wordpress"
                      />
                      <p>Gravity Nepal WordPress, E-commerce</p>
                    </a>
                  </div>
                  <div>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <Image
                        placeholder="blur"
                        src={Project2}
                        alt="Wayfree Nepal Wordpress"
                      />
                      <p>Wayfree Nepal WordPress, E-commerce</p>
                    </a>
                  </div>
                  <div>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <Image
                        placeholder="blur"
                        src={Project3}
                        alt="Zhanes Shopify,E-commerce"
                      />
                      <p>Zhanes Shopify, E-commerce</p>
                    </a>
                  </div>
                  <div>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                      <Image
                        placeholder="blur"
                        src={Project4}
                        alt="Fischersund Shopify, E-commerce"
                      />
                      <p>Fischersund Shopify, E-commerce</p>
                    </a>
                  </div>
                </div>
                <a
                  className=" block w-max mt-[40px] text-[#007EC3] font-[500] py-[10px] px-[20px] rounded-md bg-[#a1dcffc5] hover:bg-[#a1dcffe1] transition-all"
                  href=""
                >
                  View More
                </a>
              </div>
              <div className=" mt-[50px] pb-[40px]">
                <div>
                  <h1 className=" text-[54px] font-[900] text-[#0174B5]">
                    The Brands We Have <br /> Catered To
                  </h1>
                  <p className=" mt-[40px] max-w-[700px] text-[#0082CD] font-[300] mb-[40px]">
                    We have assisted many companies in either establishing or
                    communicating their brand via different marketing mediums.
                  </p>
                  <div className=" grid grid-cols-7 gap-y-[30px] sponsore__list">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={115}
                        height={37}
                        viewBox="0 0 115 37"
                        fill="none"
                      >
                        <path
                          d="M32.4713 7.24164C33.2356 8.17219 34.5721 8.7204 35.3541 9.65297C34.7938 6.89572 32.7109 4.64421 30.2478 4.10611C31.4497 5.03059 31.709 6.31514 32.4713 7.24164ZM2.86698 14.2309C4.56381 10.4581 7.09617 11.2572 8.16733 7.66241C7.57334 8.76491 4.8014 9.23018 3.51245 12.0562C4.16781 10.3772 3.83914 7.80806 4.94792 6.42236C1.63347 8.92067 3.04518 12.9625 2.86698 14.2309ZM5.93988 23.2794C6.24479 24.748 5.34589 26.8681 6.77146 28.895C5.29837 27.2079 2.17795 26.7791 0.906821 24.214C2.49079 30.4851 6.6487 29.1904 8.50788 30.5518C6.97144 28.2963 8.22871 26.7973 5.93988 23.2794ZM5.46271 27.214C4.55391 23.7123 6.17351 22.4986 4.93604 19.1405C4.80734 21.034 3.57185 21.9564 4.40541 25.4116C2.9343 22.4864 0.659326 21.394 0 19.3832C0.0455391 24.8816 4.36977 25.6968 5.46271 27.214ZM12.1035 33.0805C10.8304 31.2801 11.7075 30.2625 8.12377 26.9935C8.88012 28.187 8.10001 29.688 10.5116 32.0225C8.15149 30.6064 4.89644 31.2133 3.32633 29.3097C6.02303 34.5835 10.7611 32.4311 12.1035 33.0866V33.0805ZM29.4123 32.0225C31.8239 29.688 31.0438 28.1789 31.8001 26.9935C28.2243 30.2625 29.0935 31.2801 27.8204 33.0805C29.1628 32.4251 33.9009 34.5774 36.5956 29.3097C35.0275 31.2153 31.7724 30.6064 29.4123 32.0286V32.0225ZM33.1524 28.889C34.5721 26.8661 33.6791 24.742 33.984 23.2733C31.6952 26.7912 32.9525 28.2902 31.4101 30.5559C33.2791 29.1944 37.4212 30.4851 39.0111 24.218C37.742 26.7791 34.6255 27.2079 33.1524 28.895V28.889ZM27.4383 33.3293C26.1611 32.9781 24.8495 32.7745 23.5279 32.7224C22.312 32.6926 21.1019 32.9028 19.9639 33.3414C18.8259 32.903 17.6159 32.6928 16.4 32.7224C15.0784 32.7745 13.7667 32.9781 12.4896 33.3293C10.3374 33.9139 8.47818 34.3671 6.8566 33.5316C8.41087 34.9476 10.2225 35.4433 12.842 35.1499C15.02 34.9112 16.7841 33.7966 18.8393 33.8128H18.9205C17.6282 34.4737 16.4763 35.3887 15.5308 36.5053L16.5208 36.6408C16.5208 36.6408 17.5642 34.4986 19.9639 33.9402C22.3636 34.4986 23.4071 36.6408 23.4071 36.6408L24.3971 36.5053C23.4497 35.3944 22.298 34.4844 21.0074 33.8269H21.0885C23.1437 33.8108 24.9039 34.9254 27.0839 35.1641C29.7033 35.4534 31.517 34.9497 33.0713 33.5458C31.4497 34.3731 29.5905 33.92 27.4383 33.3354V33.3293ZM5.08255 15.3435C4.19553 17.0832 2.81748 17.4817 2.96994 21.0825C2.22151 17.8822 0.443511 16.6968 0.46529 14.6557C-0.770204 19.976 2.53237 20.6071 3.37979 22.8364C3.25505 19.6422 5.25085 18.9969 5.08255 15.3435ZM6.32201 11.2369C6.01313 11.6779 5.79732 11.8661 4.97366 12.5599C3.73679 13.5618 2.88674 14.9785 2.57395 16.5592C2.65908 14.6091 1.47903 11.8074 2.26309 9.76423C-0.772184 14.1439 2.43733 16.7676 2.55019 18.3536C3.33821 15.301 5.14789 15.2767 6.32201 11.2369ZM37.348 16.5592C37.0349 14.9791 36.1857 13.5628 34.9502 12.5599C34.1266 11.8661 33.9108 11.6779 33.6019 11.2369C34.776 15.2828 36.5857 15.301 37.3638 18.3536C37.4767 16.7676 40.6862 14.1439 37.6489 9.76423C38.4409 11.8074 37.2628 14.6091 37.348 16.5592ZM39.9219 19.3913C39.2626 21.4021 36.9876 22.4945 35.5165 25.4278C36.3501 21.9645 35.1205 21.042 34.9859 19.1567C33.7484 22.5188 35.3819 23.7265 34.4592 27.2302C35.5541 25.6968 39.8784 24.8816 39.9239 19.3832L39.9219 19.3913ZM34.8473 15.3435C34.679 18.9969 36.6768 19.6422 36.55 22.8283C37.3994 20.6031 40.708 19.9679 39.4645 14.6476C39.4883 16.6887 37.7103 17.8843 36.9678 21.0643C37.1064 17.4817 35.7284 17.0832 34.8473 15.3435ZM7.45652 7.25176C8.22277 6.32121 8.48214 5.0407 9.682 4.11622C7.21893 4.65432 5.12809 6.90584 4.57569 9.66309C5.34589 8.7204 6.68434 8.17219 7.44861 7.24164L7.45652 7.25176ZM31.7645 7.67253C32.8356 11.2673 35.368 10.4682 37.0629 14.241C36.8866 12.9726 38.2983 8.93079 34.9839 6.43247C36.0927 7.8202 35.764 10.3873 36.4194 12.0663C35.1264 9.23018 32.3604 8.76491 31.7566 7.66241L31.7645 7.67253ZM23.1655 9.70355C22.5161 9.43135 21.8355 9.24442 21.14 9.14724C21.14 9.29896 21.14 9.45473 21.14 9.60847C21.7789 9.70427 22.4039 9.87954 23.0012 10.1304C23.082 10.0001 23.1378 9.8552 23.1655 9.70355ZM22.6527 5.25311L22.7873 5.12971L22.53 5.01845L21.8528 5.00429L21.6766 5.12971L21.2806 5.09532V5.19444C21.514 5.20728 21.7466 5.23226 21.9775 5.26929L22.3082 5.23895L22.6527 5.25311ZM21.34 20.1722C21.34 20.0549 21.1875 19.9396 20.9618 19.8303H20.9202C20.9202 19.9254 20.9202 20.3947 20.9064 20.6233C21.1856 20.4959 21.34 20.3583 21.34 20.1722ZM13.4954 11.3725C13.5097 11.2871 13.5288 11.2027 13.5528 11.1196C13.4619 11.1405 13.3688 11.15 13.2756 11.1479L13.4954 11.3725ZM19.9758 31.7231C23.5083 31.7101 26.9017 30.3147 29.4582 27.8238C32.0146 25.333 33.5398 21.936 33.7201 18.3315C33.9004 14.727 32.7221 11.1889 30.4275 8.44472C28.1329 5.70059 24.8964 3.95901 21.3836 3.57812C21.3836 3.60442 21.3836 3.63274 21.3677 3.65904C21.34 3.7966 21.3143 3.92 21.2945 4.02924C24.327 4.33371 27.1661 5.69016 29.339 7.8728L27.8145 9.43045L27.8719 9.15533L27.6739 9.06632L27.4007 9.05014L27.4581 8.8701L27.2739 8.23288L26.8938 7.80604L25.7058 7.16477L25.6028 7.27603L25.387 7.34077C25.793 7.94249 26.0124 8.65511 26.0167 9.38595C26.0167 9.48102 26.0167 9.57206 26.0167 9.66309L26.6106 10.4217L26.3335 10.4864L26.5176 10.7696L25.9969 11.2996L25.787 10.895C25.6875 11.1757 25.5545 11.4427 25.391 11.6901L25.5078 11.7993L23.9021 13.4399C23.805 13.3448 23.7041 13.2538 23.6011 13.1668C23.4467 13.2396 23.2903 13.3064 23.1299 13.3691L23.2665 13.4783L23.1853 13.5613L22.9873 13.6685L22.918 13.8708L22.8012 13.7514L22.4626 13.8667L22.5557 14.0184L22.7893 13.9557L22.9418 13.9679L22.9537 13.8829L23.0705 13.8222L23.1061 13.7514L23.316 13.6907H23.4803C23.512 13.7191 23.5457 13.7494 23.5754 13.7797L22.9299 14.4068L22.8824 14.3381L22.2171 14.4493L22.0686 14.6011L21.9241 14.6193L22.3359 14.2147L22.1894 14.1398L21.8033 14.6658L21.9162 14.6536V14.8559L22.0567 14.9126L22.0845 15.1149L21.8528 15.0683L21.6113 15.1129L21.0173 14.8074C21.0173 14.8074 20.9856 16.4095 20.9697 17.2147C22.3557 17.688 23.811 18.3718 23.811 20.1681C23.8163 20.5441 23.7283 20.9154 23.5552 21.2472C23.3821 21.579 23.1295 21.8606 22.821 22.0656L22.7913 22.0859L22.7477 22.1162C22.1894 22.4925 21.4727 22.6948 20.8509 22.893L20.8331 24.1513C21.8231 24.653 23.021 25.3832 22.9101 27.4729C22.8962 27.9868 22.7002 28.1284 22.5319 28.1749C21.9473 28.3239 21.351 28.4207 20.75 28.4642C20.75 28.626 20.75 28.7797 20.75 28.9234C23.3304 28.742 25.767 27.6426 27.6363 25.8162L29.24 27.4547C26.7609 29.8957 23.454 31.2627 20.0111 31.2699C16.5682 31.277 13.2558 29.9238 10.767 27.4932L12.3708 25.8546C14.2205 27.6451 16.6189 28.7278 19.1601 28.9193C19.1601 28.7777 19.1601 28.624 19.1601 28.4601C16.7362 28.2714 14.4492 27.2381 12.6816 25.5329L13.1093 25.094L13.7033 25.1627L14.0161 24.8189L14.8358 24.8472L14.9566 24.5579L14.9269 24.4345C16.1391 25.384 17.5839 25.974 19.1026 26.1398C19.1026 25.9618 19.1026 25.806 19.1026 25.6786C17.421 25.4859 15.8442 24.7471 14.6042 23.5707L16.2099 21.9301C16.6014 22.2871 17.0391 22.5873 17.5108 22.8222C17.5435 22.6711 17.5983 22.5259 17.6731 22.3913C17.2584 22.1824 16.8728 21.9177 16.5267 21.6044L18.1364 19.9618C18.3941 20.1724 18.6846 20.3372 18.9957 20.4493C18.9957 20.2875 18.9957 20.1155 18.9957 19.9557C18.8064 19.8716 18.6281 19.7636 18.4651 19.6341L18.9185 19.1708C18.7601 19.1223 18.5978 19.0697 18.4394 19.0131L18.1344 19.3246C17.9801 19.1491 17.8508 18.9523 17.7503 18.74C17.4751 18.6181 17.2103 18.4733 16.9583 18.3071C16.4898 18.0187 16.1042 17.6091 15.8403 17.1196C15.5764 16.6301 15.4437 16.0781 15.4556 15.5195C15.4285 14.7565 15.6577 14.007 16.105 13.3954L14.5052 11.7609C15.682 10.6092 17.1785 9.85739 18.7898 9.60847C18.7898 9.45068 18.7898 9.29491 18.7799 9.14724C17.0524 9.40286 15.4466 10.2051 14.1884 11.4412L13.9171 11.1702C13.8558 11.2814 13.7845 11.421 13.7013 11.597L13.8716 11.773C12.4463 13.3187 11.6371 15.3523 11.6026 17.4756H9.33155C9.36792 14.733 10.4199 12.1063 12.2757 10.1243L12.9964 10.8627C13.0307 10.8647 13.0651 10.8647 13.0994 10.8627C13.2425 10.8502 13.3818 10.809 13.5093 10.7413L12.5925 9.80469C13.0798 9.32469 13.6101 8.89258 14.1765 8.51406C14.2076 8.39861 14.2452 8.28513 14.2894 8.17421C14.3963 8.00944 14.512 7.85075 14.6359 7.69883C13.7756 8.18217 12.9819 8.78012 12.2757 9.47698L10.672 7.83841C12.8219 5.6905 15.6205 4.34996 18.6116 4.03531C18.5997 3.97866 18.5918 3.93416 18.5918 3.93416C18.572 3.82694 18.5483 3.70759 18.5265 3.58217C15.0104 3.96358 11.7713 5.70798 9.47624 8.45615C7.18119 11.2043 6.00491 14.747 6.18965 18.3546C6.37438 21.9623 7.90606 25.3602 10.4693 27.8487C13.0325 30.3372 16.432 31.7267 19.9679 31.7312L19.9758 31.7231ZM22.9675 21.9827V21.9706V21.9827ZM29.6558 8.20253C31.9954 10.7018 33.3158 14.0175 33.3484 17.4756H31.0695C31.0493 15.7538 30.6429 14.0597 29.8815 12.5235L29.9013 12.483L30.0578 12.568L30.0954 12.4446L29.6994 11.7184L29.2183 11.0387L28.648 10.5633C28.45 10.3165 28.252 10.0778 28.0402 9.84717L29.6558 8.20253ZM26.7552 11.1702L27.2997 11.1944L27.4303 11.3543L27.365 11.5909L28.1154 12.0764L28.2639 12.0582L29.2341 13.1911L29.6301 13.0495C30.2632 14.4365 30.6007 15.9452 30.6201 17.4756H28.351C28.3413 16.8817 28.2703 16.2904 28.1392 15.7116L28.2441 15.568L28.3847 14.8418L28.2778 14.0609L28.0045 13.1627L27.371 12.216L27.5254 12.299L27.6026 12.2201L27.0938 11.8681L27.0601 11.9834L27.5689 12.7258L27.856 13.3327L28.054 13.9396L28.1194 14.3441L28.2243 15.0279L28.0263 15.042C28.0263 15.042 27.8065 14.6233 27.7392 14.4514L27.8402 14.2956L27.6422 14.0124V13.7292L27.5036 13.5512L27.3314 13.5734C27.27 13.4561 27.2046 13.3408 27.1334 13.2275L27.2561 13.2902L27.2878 13.2578L27.2225 13.1122L27.371 13.0272L27.3036 12.9423L27.0839 13.0272L27.165 12.6752L27.0344 12.5984L26.9175 12.8795C26.6705 12.5004 26.3944 12.1419 26.0919 11.8074L26.7552 11.1702ZM26.2998 16.6058L26.7077 16.3792L27.1235 16.3145L27.2145 16.1122L27.4462 15.9706L27.5353 15.7683L27.6066 15.4264C27.6402 15.5458 27.6699 15.6692 27.6976 15.7926L27.4779 16.4621V16.6887L27.7966 16.2538C27.8651 16.6548 27.9028 17.0606 27.9095 17.4675H25.9295L25.884 17.2915L26.1157 17.1034L26.1612 16.9901L26.2622 16.9133L26.5314 16.8849L26.5592 16.7636L26.2998 16.6058ZM23.5754 15.0137L23.7734 14.9652V14.9166L23.5754 14.777L23.6447 14.3401L23.8882 14.0913C24.0404 14.2686 24.1813 14.4558 24.3099 14.6516L24.2248 14.9207L24.003 14.7588L23.8347 14.8054L23.9179 14.9652H24.0011L23.908 15.2019L23.8446 15.1068L23.5754 15.0137ZM24.4446 22.715L23.9535 22.5734L23.807 22.628L23.5298 22.4116L23.2685 22.3165C23.3972 22.2214 23.5219 22.1142 23.6427 22.0171L24.0387 22.3084L24.3476 22.4743L24.5 22.63L24.4446 22.715ZM24.1951 13.7696L25.8008 12.129C26.1762 12.5472 26.508 13.0041 26.7908 13.4925L26.5928 13.5491L26.6027 13.9153L27.1967 14.3037C27.3455 14.6396 27.4712 14.9857 27.5729 15.3394L27.468 15.4972L27.2502 15.6388L27.1967 15.9787L27.0482 16.0636L26.9235 16.2133L26.7987 16.1668H26.577L26.7057 15.9888L26.7987 15.5255L26.9453 15.4325L26.5314 14.9975L26.2087 15.1088L26.1355 15.4183L25.9375 15.6429L25.7256 15.4648L25.6504 15.2747L25.7711 15.1978L25.8385 15.3232L25.9375 15.2848L25.8939 15.0825H25.7533L25.7434 15.1675L25.6504 15.1857L25.1455 14.5808L24.9752 14.4493L25.0405 14.3765L25.191 14.3239L25.0524 14.2673C25.0524 14.2673 24.8762 14.3077 24.8544 14.3077L24.9554 14.4372H24.702C24.5497 14.202 24.3802 13.9788 24.1951 13.7696ZM25.0128 22.4986L24.795 22.276L24.9613 22.0555L25.1712 21.6186L25.09 21.4972L25.2286 21.1735L25.2128 20.8822L25.1296 20.5808L24.9316 20.51L24.8584 20.6799L24.7396 20.6476C24.9223 20.38 25.0813 20.0964 25.2148 19.8L25.4128 19.711L25.5276 19.5532L25.583 19.6179L25.7216 19.448L25.6108 19.3064L25.7117 19.2781L25.8979 19.3549H26.2483L26.4602 19.2416L27.0146 19.0919L26.9096 18.9038L26.874 18.6752L27.171 18.8087L27.2819 18.742L27.2264 18.5073L26.868 18.655L26.472 18.57L26.1671 17.9328H27.9036C27.8289 19.9061 27.0491 21.783 25.7117 23.2086L25.4742 22.9638L25.5771 22.6381L25.391 21.92L25.0128 22.4986ZM25.3197 27.0238L25.5336 26.5545L25.4504 26.3522L25.7652 26.069V25.8991L25.4959 25.7271L25.7177 25.276L26.0503 24.831L25.7177 24.4648H25.4682L25.3138 24.2079C25.4464 24.0946 25.5791 23.9793 25.7098 23.858L27.3155 25.4986C26.7104 26.0849 26.0406 26.5975 25.3197 27.0259V27.0238ZM27.3234 24.8593L27.5016 24.657L27.3333 23.7588L27.2185 23.7123L27.2898 23.5606L26.9096 23.4392L26.8364 23.7588L26.7987 24.1634L26.7195 24.2383L26.0266 23.5302C27.448 22.0195 28.2754 20.027 28.351 17.9328H30.622C30.547 20.6427 29.4802 23.2254 27.6323 25.1708L27.3234 24.8593ZM27.9491 25.4965C29.881 23.4651 30.9954 20.7662 31.0715 17.9348H33.3405C33.2649 21.3814 31.9119 24.6703 29.5548 27.1371L27.9491 25.4965ZM14.2874 23.2491C14.123 23.0751 13.9666 22.895 13.8162 22.7069L13.8855 22.1203L13.6459 21.5579L13.5865 20.6779L13.3172 20.1439L13.3726 19.8121L13.0479 19.1749L12.7648 19.0292L12.8796 18.6914L12.7628 18.4244L12.8796 18.1189H13.1905L13.2994 17.9348H13.83L13.9112 18.0946L13.8122 18.655L13.7488 18.7501L13.9468 19.1931L13.8162 19.2659L13.7251 19.1486L13.6855 19.1931L13.7766 19.4561L13.933 19.7636H14.0062L14.0577 19.4642L13.9825 19.363V19.1769L13.9587 18.7926L14.0577 18.1169L13.9508 17.9348H14.3309C14.4044 19.3116 14.9587 20.6157 15.8931 21.6105L14.2874 23.2491ZM12.7826 18.7157L12.5688 19.0596H12.2005L12.1708 19.0373C12.1083 18.6729 12.07 18.3045 12.056 17.9348H12.7391L12.5747 18.4932L12.7826 18.7157ZM13.5291 17.1236L13.5706 16.6624L13.8399 16.5026L14.321 16.5896L14.3943 16.6786C14.3508 16.9421 14.3263 17.2085 14.321 17.4756H13.7766L13.5291 17.1236ZM15.8397 18.8573L15.9525 18.7986L16.2357 19.0272L16.107 19.1344L16.4416 19.361L16.4337 19.1182L16.6119 18.8168L16.798 19.0191L16.996 19.2983L16.6317 19.3752L16.7881 19.6948L17.0276 19.5653L17.0039 19.4642L17.1821 19.3408L17.287 18.835C17.4168 19.1317 17.5926 19.4049 17.8078 19.6442L16.204 21.2828C15.4175 20.4418 14.9236 19.3599 14.7982 18.2039L15.1269 18.5619H15.4358L15.8397 18.8573ZM14.1884 12.0886L15.7922 13.7292C15.4561 14.1068 15.1699 14.5278 14.9408 14.9814H14.8299L14.6042 15.0522H14.525L14.2854 15.2808L14.5883 15.216L14.8616 15.1452L14.8141 15.2524L14.5745 15.4021H14.4537L14.1013 15.6772L13.7607 15.6489L13.2677 16.5876L13.3647 16.7757L13.0974 17.0791L13.0558 17.4837H12.05C12.0816 15.4763 12.844 13.5528 14.1884 12.0886ZM12.1154 24.4588L12.6242 24.7642L12.7292 24.8371L12.3609 25.2133C12.1893 25.0313 12.023 24.8431 11.8619 24.6489L12.1154 24.4588ZM11.6065 17.9348C11.6065 18.1594 11.6342 18.3839 11.658 18.6044L11.3808 18.6692L11.3234 18.9564L10.7452 19.7089L10.7591 20.7427L10.1651 20.9449H9.8404C9.53278 19.9705 9.36212 18.9563 9.33353 17.9328L11.6065 17.9348ZM9.3652 20.9328L9.23255 20.9065L9.10781 20.7629L8.47026 20.7062L8.66826 20.9793L8.07427 20.8661L8.22871 20.7204L8.08417 20.5748L7.65848 20.7649L7.50602 21.0522L7.56542 21.7137L8.05645 22.9031L8.29207 23.2794L8.42671 23.33L8.05645 22.6118L7.97527 22.2457L8.05843 22.1567L8.00695 21.9544L8.23069 21.9847L8.57322 22.5147L8.65836 22.5491V22.1627L8.79696 22.2457L8.82666 22.448L9.18701 22.5451L9.33749 22.4358L9.38896 22.4723V22.7534L9.54736 22.9557L9.74536 23.0002L10.1651 23.7265L10.4205 23.7993L10.4997 23.4594C10.942 24.2062 11.4669 24.8985 12.0639 25.5228L10.4601 27.1614C8.07644 24.6975 6.70143 21.3981 6.61504 17.9348H8.88606C8.91291 18.9516 9.07408 19.9601 9.3652 20.9328ZM10.3552 8.16208L11.959 9.80065C10.0191 11.8686 8.91949 14.6115 8.8821 17.4756H6.61306C6.64676 13.9979 7.98222 10.6654 10.3453 8.16208H10.3552ZM26.7888 7.31649L26.6522 7.08993L26.3552 6.93821L26.1236 7.11825L26.4206 7.28008L26.7393 7.5289L26.7888 7.31649ZM25.4009 13.8607V14.0387L25.7969 13.9193L25.9177 13.6746L25.6464 13.3104L25.7909 13.0879L26.1572 13.3549L26.2246 13.3003L26.1513 13.2477L26.0681 13.0859L26.2186 12.9969L26.0721 12.7946L25.7276 12.9726L25.6127 13.1931L25.5434 13.3853L25.6959 13.6462L25.6405 13.7676L25.4009 13.8607ZM8.98703 24.2625L9.01673 24.1574L8.81874 23.7042L8.57718 23.6132L8.98703 24.2625ZM18.2691 15.5478C18.2691 15.9362 18.5007 16.2113 18.9225 16.448C18.9225 16.448 18.9225 16.3812 18.9225 16.274L18.6572 16.0029L18.7977 15.742L18.9126 15.7096C18.9126 15.2565 18.8947 14.7487 18.8928 14.6759H18.873C18.4809 14.8984 18.2691 15.1654 18.2691 15.5478Z"
                          fill="black"
                        />
                        <path
                          d="M20.8032 25.594C21.516 25.9622 22.1734 26.472 22.4486 27.4369C22.5693 25.8388 21.6922 25.147 20.823 24.6797C20.823 24.6817 20.8032 25.5961 20.8032 25.594Z"
                          fill="black"
                        />
                        <path
                          d="M25.5415 9.38813C25.5415 7.93769 24.5119 6.32744 21.9875 5.759C21.7329 5.71194 21.4757 5.68153 21.2173 5.66797C21.2173 5.88644 21.2014 6.38813 21.2014 6.38813C21.2014 6.54592 21.1856 7.1265 21.1816 7.25192C21.3447 7.26346 21.5068 7.28644 21.6667 7.3207C23.1339 7.67876 23.6586 8.53446 23.6586 9.38813C23.6586 10.7657 22.5062 11.2856 21.0846 11.6781L20.6154 11.8035C20.1857 11.9127 19.7442 12.0179 19.3066 12.1373C19.1502 12.1798 18.9958 12.2263 18.8413 12.2728C17.2712 12.7624 15.9209 13.5351 15.9209 15.5095C15.9209 17.4839 17.4613 18.2081 18.9641 18.6815C18.9549 18.1164 18.9443 17.5486 18.9324 16.9782C18.2691 16.6606 17.8019 16.2418 17.8019 15.5378C17.8019 14.8338 18.2275 14.4333 18.879 14.1218C19.0235 14.055 19.1779 13.9943 19.3423 13.9377C19.7165 13.8082 20.1343 13.697 20.5797 13.5877L21.049 13.4724C23.1656 12.9667 25.5415 12.289 25.5415 9.38813Z"
                          fill="black"
                        />
                        <path
                          d="M17.9307 23.2372C17.9307 24.0301 18.5049 24.4509 19.0771 24.7887C19.0771 24.6552 19.0533 23.4273 19.0533 23.4071C19.0652 23.1623 19.2968 23.0146 19.4849 22.9236C19.7816 22.7895 20.085 22.6713 20.3937 22.5696C20.564 22.5089 20.7086 22.4502 20.8709 22.4017C22.0193 22.0477 23.3478 21.5925 23.3478 20.1765C23.3478 18.7604 22.2094 18.1535 20.9719 17.7227C20.9719 18.1778 20.9501 18.8434 20.9402 19.3026C21.4669 19.5049 21.8153 19.7699 21.8153 20.1765C21.8153 20.6883 21.2808 20.9856 20.9026 21.1313C20.7442 21.194 20.5066 21.2749 20.4373 21.2972C20.1324 21.3943 19.8037 21.4995 19.4968 21.6208C19.3381 21.6793 19.1828 21.7469 19.0315 21.8231C18.4851 22.1023 17.9287 22.5129 17.9307 23.2372Z"
                          fill="black"
                        />
                        <path
                          d="M18.7084 5.89453C18.2317 6.04769 17.7682 6.24051 17.3224 6.47107C16.8274 6.63897 16.1344 6.67336 15.4078 7.47039C15.1727 7.74647 14.9526 8.0355 14.7484 8.3362C14.5306 8.65583 14.5207 9.16965 14.3524 9.44679C14.1228 9.85138 14.1782 10.0759 14.1782 10.0759V10.0881C14.1356 10.2767 14.044 10.45 13.9129 10.5897C13.8041 10.7287 13.6619 10.8364 13.5002 10.9024C13.3385 10.9683 13.1627 10.9903 12.9902 10.966C13.3189 11.1339 13.7822 10.8993 13.7822 10.8993C13.712 11.1183 13.6539 11.3412 13.608 11.5668C13.9763 10.7152 14.3148 10.4036 14.4198 10.3166C14.5782 10.3531 14.9068 10.3389 15.5167 9.98084C16.2057 9.57626 17.2412 8.91881 17.5342 8.50208C17.8433 8.07469 18.2669 7.74796 18.7539 7.56142C18.7321 6.92015 18.7202 6.36587 18.7084 5.89453ZM15.8018 8.55468L15.4434 8.63357L15.8711 7.93162L16.37 7.9478L15.8018 8.55468Z"
                          fill="black"
                        />
                        <path
                          d="M20.1323 23.1378C20.065 23.162 19.8927 23.2369 19.7838 23.2753C19.6749 23.3138 19.5225 23.3785 19.5225 23.419C19.5225 23.4594 19.6333 29.5707 19.6333 29.7062C19.6333 30.9705 20.263 30.9786 20.263 29.7062C20.263 29.6152 20.3897 23.0508 20.3897 23.0508C20.3897 23.0508 20.2392 23.1014 20.1323 23.1378Z"
                          fill="black"
                        />
                        <path
                          d="M19.4788 21.113C19.6768 21.0442 19.8748 20.9836 20.053 20.9249L20.4351 20.8035C20.4351 20.4171 20.5499 15.0726 20.5697 14.1016C20.158 14.199 19.7515 14.3185 19.3521 14.4596C19.3659 15.1879 19.4689 20.5304 19.4788 21.113Z"
                          fill="black"
                        />
                        <path
                          d="M19.9976 0.648438C18.2275 0.648438 18.9799 3.33084 19.1205 4.20474C19.1205 4.24722 19.2631 10.2735 19.2908 11.6471C19.5601 11.5743 19.8274 11.5075 20.0828 11.4448L20.6174 11.3072C20.6431 9.97817 20.7738 4.22699 20.7777 4.19665C20.8946 3.26004 21.8212 0.648438 19.9976 0.648438Z"
                          fill="black"
                        />
                        <path
                          d="M48.9345 9.19836H48.9048L47.406 17.5611H45.3508L43.4282 7.35547H45.0637L46.4001 15.2226H46.4259L47.8574 7.35547H49.9839L51.4015 15.2226H51.4292L52.8152 7.35547H54.3992L52.4351 17.5611H50.3521L48.9345 9.19836Z"
                          fill="black"
                        />
                        <path
                          d="M57.3061 9.91797C58.7356 9.91797 60.3869 10.7271 60.3869 13.7919C60.3869 16.9517 58.7356 17.682 57.3061 17.682C55.8766 17.682 54.2114 16.9517 54.2114 13.8C54.2114 10.7231 55.8746 9.91797 57.3061 9.91797ZM57.3061 16.3913C58.3951 16.3913 58.6406 15.0461 58.6406 13.7878C58.6406 12.5296 58.3951 11.2005 57.3061 11.2005C56.2171 11.2005 55.9558 12.5316 55.9558 13.7878C55.9558 15.0441 56.2152 16.3954 57.3061 16.3954V16.3913Z"
                          fill="black"
                        />
                        <path
                          d="M61.4343 11.2774C61.4402 10.8626 61.4224 10.4479 61.3809 10.0353H62.9074C62.9213 10.4884 62.9628 10.9557 62.9628 11.4089H62.9886C63.1866 10.8242 63.7251 9.91797 64.7705 9.91797C64.8674 9.92396 64.9634 9.93885 65.0576 9.96247V11.6577C64.9029 11.6098 64.7422 11.5853 64.5805 11.5849C63.8855 11.5849 63.1212 12.038 63.1212 13.4419V17.5646H61.4304L61.4343 11.2774Z"
                          fill="black"
                        />
                        <path
                          d="M66.1309 6.59766H67.8218V17.5639H66.1309V6.59766Z"
                          fill="black"
                        />
                        <path
                          d="M74.8704 6.59766V16.2774C74.8623 16.7069 74.8801 17.1366 74.9238 17.5639H73.3398C73.2999 17.1756 73.2814 16.7852 73.2844 16.3947H73.2428C72.9716 17.038 72.4667 17.6813 71.3757 17.6813C69.6314 17.6813 68.9087 15.897 68.9087 13.8074C68.9087 11.3495 69.8215 9.91728 71.3361 9.91728C71.7221 9.90329 72.1029 10.0109 72.4269 10.2255C72.751 10.44 73.0027 10.7512 73.1478 11.1169H73.1755V6.59766H74.8704ZM71.843 16.3522C72.833 16.3522 73.1795 15.1951 73.1795 13.777C73.1795 12.3144 72.7973 11.2484 71.8707 11.2484C70.9441 11.2484 70.6035 12.2275 70.6035 13.7345C70.6035 15.4743 70.8629 16.3522 71.843 16.3522Z"
                          fill="black"
                        />
                        <path
                          d="M80.438 7.35547H82.1843V11.5085H85.0038V7.35547H86.7501V17.5611H85.0038V13.0581H82.1843V17.5611H80.438V7.35547Z"
                          fill="black"
                        />
                        <path
                          d="M93.2243 17.2005C92.5667 17.5133 91.8508 17.6775 91.1255 17.682C88.8624 17.682 87.8804 15.9422 87.8804 13.9092C87.8804 11.6577 88.9852 9.91797 90.7711 9.91797C92.2838 9.91797 93.5787 10.8687 93.5787 13.9395V14.2895H89.5158C89.5158 15.5761 89.993 16.3529 91.2978 16.3529C92.3333 16.3529 92.8243 16.0151 93.1391 15.7662L93.2243 17.2005ZM91.9432 13.1546C91.9432 11.8236 91.5334 11.1499 90.7711 11.1499C89.8841 11.1499 89.5158 12.1614 89.5158 13.1546H91.9432Z"
                          fill="black"
                        />
                        <path
                          d="M95.0916 10.4704C95.776 10.1008 96.5391 9.90969 97.3131 9.91414C99.4911 9.91414 99.998 11.0551 99.998 12.9485V16.2236C100 16.6684 100.032 17.1125 100.095 17.5527H98.5665C98.4921 17.2212 98.4602 16.8812 98.4714 16.5412H98.4457C98.022 17.1481 97.4894 17.6801 96.4816 17.6801C95.3906 17.6801 94.3828 16.871 94.3828 15.4731C94.3828 13.4259 95.9371 12.9141 98.0774 12.9141H98.418V12.635C98.418 11.8885 98.0774 11.2007 97.1092 11.2007C96.4062 11.2181 95.7293 11.476 95.1867 11.933L95.0916 10.4704ZM98.418 13.8771H98.2675C96.8221 13.8771 95.9648 14.1987 95.9648 15.2931C95.9648 15.9809 96.3865 16.4482 97.0399 16.4482C98.0497 16.4482 98.4259 15.639 98.4259 14.2978L98.418 13.8771Z"
                          fill="black"
                        />
                        <path
                          d="M101.661 6.59766H103.354V17.5639H101.663L101.661 6.59766Z"
                          fill="black"
                        />
                        <path
                          d="M105.464 8.48195L107.155 7.92969V10.0315H108.559V11.3687H107.155V15.2729C107.155 16.0821 107.427 16.3107 107.918 16.3107C108.142 16.3146 108.363 16.2588 108.559 16.1488V17.4374C108.206 17.6096 107.818 17.6948 107.427 17.6863C106.173 17.6863 105.464 17.0794 105.464 15.4934V11.3687H104.344V10.0315H105.46L105.464 8.48195Z"
                          fill="black"
                        />
                        <path
                          d="M109.43 6.59766H111.121V10.9995H111.163C111.462 10.5302 111.858 9.91728 112.907 9.91728C114.491 9.91728 114.978 11.1897 114.978 12.7109V17.566H113.287V13.0467C113.287 11.8917 113.016 11.4082 112.321 11.4082C111.434 11.4082 111.121 12.2173 111.121 13.1782V17.5639H109.43V6.59766Z"
                          fill="black"
                        />
                        <path
                          d="M47.149 20.2695C49.129 20.2695 50.9386 21.8494 50.9386 25.5291C50.9386 29.2088 49.127 30.7766 47.149 30.7766C45.171 30.7766 43.3613 29.1987 43.3613 25.5291C43.3613 21.8596 45.173 20.2695 47.149 20.2695ZM47.149 29.3363C48.2538 29.3363 49.1389 28.3248 49.1389 25.521C49.1389 22.7173 48.2538 21.7038 47.149 21.7038C46.0442 21.7038 45.169 22.7153 45.169 25.521C45.169 28.3268 46.0462 29.3444 47.149 29.3444V29.3363Z"
                          fill="black"
                        />
                        <path
                          d="M52.073 24.3438C52.0779 23.9284 52.0601 23.513 52.0195 23.0997H53.5461C53.5599 23.5548 53.5995 24.0221 53.5995 24.4753H53.6273C53.8253 23.8906 54.3638 22.9844 55.4092 22.9844C55.5052 22.9906 55.6006 23.0048 55.6943 23.0269V24.72C55.5403 24.672 55.3802 24.6475 55.2191 24.6472C54.5222 24.6472 53.7599 25.1004 53.7599 26.5043V30.627H52.073V24.3438Z"
                          fill="black"
                        />
                        <path
                          d="M56.7516 31.8003C57.3774 32.1926 58.0911 32.4147 58.8246 32.4456C60.4086 32.4456 60.6779 31.2602 60.6779 30.0747V29.3586H60.6501C60.3789 29.9432 59.9017 30.631 58.7969 30.631C57.8069 30.631 56.3438 29.9291 56.3438 26.8886C56.3438 24.8111 57.0387 22.9844 58.8781 22.9844C59.9017 22.9844 60.3789 23.6135 60.7333 24.271H60.7848C60.7848 23.8664 60.8264 23.4962 60.8402 23.0997H62.3687C62.341 23.5043 62.3133 23.8906 62.3133 24.2851V29.8421C62.3133 32.1968 61.6461 33.8879 59.0701 33.8879C58.2444 33.8824 57.4266 33.7233 56.6566 33.4186L56.7516 31.8003ZM59.381 29.3C60.4442 29.3 60.866 28.4908 60.866 26.7713C60.866 25.1914 60.3076 24.3438 59.5038 24.3579C58.6167 24.3741 58.2762 25.2501 58.2762 26.7855C58.2762 28.5636 58.8048 29.3 59.381 29.3Z"
                          fill="black"
                        />
                        <path
                          d="M64.1507 23.5426C64.8363 23.1748 65.5998 22.9844 66.3742 22.9883C68.5522 22.9883 69.059 24.1293 69.059 26.0227V29.312C69.0605 29.7574 69.0923 30.2022 69.1541 30.6431H67.6275C67.5522 30.3076 67.5202 29.9635 67.5325 29.6195H67.5048C67.083 30.2264 66.5504 30.7604 65.5426 30.7604C64.4517 30.7604 63.4438 29.9513 63.4438 28.5534C63.4438 26.5062 64.9961 25.9944 67.1365 25.9944H67.477V25.7152C67.477 24.9708 67.1365 24.283 66.1683 24.283C65.4663 24.3008 64.7903 24.5578 64.2477 25.0133L64.1507 23.5426ZM67.4671 26.9492H67.3186C65.8733 26.9492 65.014 27.2709 65.014 28.3653C65.014 29.0511 65.4377 29.5204 66.0911 29.5204C67.0989 29.5204 67.4671 28.7112 67.4671 27.37V26.9492Z"
                          fill="black"
                        />
                        <path
                          d="M70.7517 24.3438C70.7566 23.9284 70.7388 23.513 70.6982 23.0997H72.2822C72.2941 23.48 72.3357 23.8745 72.3357 24.2568H72.3634C72.6089 23.8016 73.0861 22.9844 74.2305 22.9844C75.8244 22.9844 76.3015 24.2568 76.3015 25.776V30.631H74.6126V26.1138C74.6126 24.9588 74.3394 24.4753 73.6444 24.4753C72.7574 24.4753 72.4446 25.2844 72.4446 26.2453V30.631H70.7537L70.7517 24.3438Z"
                          fill="black"
                        />
                        <path
                          d="M77.8242 19.8984H79.5686V21.6867H77.8242V19.8984ZM77.85 23.1007H79.5409V30.6321H77.85V23.1007Z"
                          fill="black"
                        />
                        <path
                          d="M81.1152 29.0672L84.1129 24.4751H81.2103V23.1016H85.8038V24.6531L82.8596 29.2593H85.8988V30.6329H81.1152V29.0672Z"
                          fill="black"
                        />
                        <path
                          d="M87.4984 23.5426C88.1839 23.1745 88.9475 22.9842 89.7219 22.9883C91.8998 22.9883 92.4067 24.1293 92.4067 26.0227V29.312C92.4082 29.7574 92.4399 30.2022 92.5017 30.6431H90.9752C90.8988 30.3078 90.8668 29.9635 90.8802 29.6195H90.8524C90.4287 30.2264 89.8981 30.7604 88.8903 30.7604C87.7993 30.7604 86.7896 29.9513 86.7896 28.5534C86.7896 26.5062 88.3438 25.9944 90.4842 25.9944H90.8247V25.7153C90.8247 24.9708 90.4842 24.283 89.516 24.283C88.814 24.3008 88.138 24.5578 87.5954 25.0133L87.4984 23.5426ZM90.8247 26.9492H90.6822C89.2368 26.9492 88.3795 27.2709 88.3795 28.3653C88.3795 29.0511 88.8012 29.5204 89.4566 29.5204C90.4644 29.5204 90.8425 28.7112 90.8425 27.37L90.8247 26.9492Z"
                          fill="black"
                        />
                        <path
                          d="M94.3491 21.5504L96.04 20.9961V23.102H97.4438V24.433H96.04V28.3373C96.04 29.1465 96.3132 29.3751 96.8043 29.3751C97.0274 29.3795 97.2479 29.3244 97.4438 29.2152V30.5018C97.0912 30.674 96.704 30.7592 96.3132 30.7506C95.0579 30.7506 94.3491 30.1438 94.3491 28.5578V24.431H93.2324V23.102H94.3491V21.5504Z"
                          fill="black"
                        />
                        <path
                          d="M98.6021 19.8984H100.346V21.6867H98.6021V19.8984ZM98.8198 23.1028H100.511V30.6341H98.8198V23.1028Z"
                          fill="black"
                        />
                        <path
                          d="M104.9 22.9844C106.332 22.9844 107.979 23.7935 107.979 26.8583C107.979 30.0181 106.332 30.7484 104.9 30.7484C103.469 30.7484 101.806 30.0181 101.806 26.8583C101.806 23.7875 103.469 22.9844 104.9 22.9844ZM104.9 29.4577C105.989 29.4577 106.235 28.1125 106.235 26.8542C106.235 25.596 105.989 24.2669 104.9 24.2669C103.811 24.2669 103.552 25.6 103.552 26.8583C103.552 28.1165 103.809 29.4618 104.9 29.4618V29.4577Z"
                          fill="black"
                        />
                        <path
                          d="M109.452 24.3438C109.457 23.9283 109.439 23.5129 109.396 23.0997H110.98C110.994 23.48 111.036 23.8745 111.036 24.2568H111.064C111.307 23.8016 111.784 22.9844 112.929 22.9844C114.525 22.9844 115.002 24.2568 115.002 25.776V30.631H113.313V26.1138C113.313 24.9588 113.04 24.4753 112.343 24.4753C111.458 24.4753 111.155 25.2844 111.155 26.2453V30.631H109.452V24.3438Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <div>
                      <Image alt="better" src={Better} />
                    </div>
                    <div>
                      <Image alt="dfsk" src={Dfsk} />
                    </div>
                    <div>
                      <Image alt="yeadea" src={Yadea} />
                    </div>
                    <div>
                      <Image alt="grandpati" src={GrandPati} />
                    </div>
                    <div>
                      <Image alt="wayfree" src={Wayfree} />
                    </div>
                    <div>
                      <Image alt="cossac" src={Cossac} />
                    </div>
                    <div>
                      <Image alt="unicef" src={Unicef} />
                    </div>
                    <div>
                      <Image alt="gravity" src={Gravity} />
                    </div>
                    <div>
                      <Image alt="gimpress" src={Gimpress} />
                    </div>
                    <div>
                      <Image alt="gayatri" src={Gayatri} />
                    </div>
                    <div>
                      <Image alt="raghuvanshi" src={Raghu} />
                    </div>
                    <div>
                      <Image alt="hyatt" src={Hyatt} />
                    </div>
                    <div>
                      <Image alt="bescope" src={BasePoke} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-[var(--footerHeight)]">
              <footer className=" mt-[50px]" id="footer">
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
                      BlueFox Digital <br /> Agency
                    </p>
                    <p className="text-[#000] my-[14px] text-[14px] font-[300]">
                      bluefoxpvtltd@gmail.com
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
                    Paruhang Chowk, Itahari-6, Sunsari District, <br />
                    Province No. 1, Nepal
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
          <p className=" text-center">
            © BlueFox Digital Agency, 2024 All Rights Reserved
          </p>
        </div>
      </body>
    </html>
  );
}
