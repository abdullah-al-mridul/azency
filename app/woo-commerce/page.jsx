import Image from "next/image";
import React from "react";
import Wayf from "@/public/wayf.png";
import FAC from "../components/FAC";
import REQ from "@/public/requirement.png";
import GravityNepal from "@/public/gravity-nepal.png";
import NepalWayFree from "@/public/nepal-wayfree.png";
import NUT from "@/public/nut.png";
import Gimpress from "@/public/gimpress.webp";
import Gravity from "@/public/gravity.webp";
import Wayfree from "@/public/wayfree.webp";
import Nutrion from "@/public/nutrion.png";
import "@/app/styles/woocommerce.css";
const page = () => {
  return (
    <div>
      <div className=" mt-[120px] max-laptop-sm:mt-[80px] flex">
        <div className=" max-laptop-sm:w-full">
          <div>
            <h1 className=" text-[40px] max-mobile:text-[25px] transition-all max-desktop:text-[35px] text-primary font-[900] w-max max-laptop-sm:text-center max-laptop-sm:mx-auto max-mobile:w-full">
              Bring Your Products Online <br className=" max-mobile:hidden" />{" "}
              With E-Commerce <br className=" max-mobile:hidden" />
              Website
            </h1>
            <p className=" text-[16px] max-mobile:text-[12px] max-laptop-sm:text-center max-laptop-sm:mx-auto mb-[35px] font-[300] max-w-[750px] text-[#505050] mt-[30px] max-desktop:text-[14px] transition-all">
              We are experts in WooCommerce. We can help you with all your
              needs, whether it is to develop a new ecommerce site, update an
              existing store, or website customizations. We will help you with
              the most popular WordPress plugin.
            </p>
            <ul className=" grid grid-cols-2 max-tablet:grid-cols-1 max-tablet:place-items-center max-tablet:w-max max-tablet:mx-auto max-laptop-sm:max-w-[700px] max-laptop-sm:mx-auto max-desktop:text-[14px] text-primary hero__list gap-[10px] text-[15px]">
              <li>Fast and responsive E-Commerce site</li>
              <li>Attractive & eye-catching product layout</li>
              <li>Good user-experience</li>
              <li>Easy to navigate</li>
            </ul>
            <a
              href="#"
              className=" mt-[30px] max-laptop-sm:mx-auto max-laptop-sm:block max-laptop-sm:w-max max-desktop:text-[14px] bg-veryLight/70 inline-block text-ultraDarkPro py-[10px] px-[30px] max-mobile:py-[8px] max-mobile:px-[20px] max-mobile:text-[12px] rounded-md hover:bg-veryLight transition-all text-[15px] "
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className=" max-w-[400px] max-laptop-sm:hidden">
          <Image alt="woocommerce" src={Wayf} />
        </div>
      </div>
      <div className=" mt-[70px]">
        <h4 className=" text-[14px] text-dark mb-[40px] max-laptop-sm:mx-auto max-laptop-sm:w-max max-laptop-sm:mb-[30px] max-mobile:text-[12px] max-mobile:mb-[10px]">
          Why Us
        </h4>
        <h2 className=" text-[54px] font-[900] text-primary max-desktop:text-[45px] transition-all mb-[20px] max-laptop-sm:w-max max-laptop-sm:mx-auto max-mobile:text-[30px] max-mobile:mb-[10px]">
          Our Services
        </h2>
        <p className=" text-gray-500 font-[300] mb-[70px] max-w-[500px] max-desktop:text-[14px] max-laptop-sm:text-center max-laptop-sm:mx-auto max-mobile:text-[12px]">
          We help you to set up products in a way that best appeals to your
          target market.
        </p>
        <div className=" grid grid-cols-3 max-tablet:grid-cols-2 gap-[40px] why__us max-mobile:grid-cols-1">
          <div>
            <h6>Custom WooCommerce Development</h6>
            <p>
              We create customized WooCommerce websites using the latest
              technologies and trends.
            </p>
          </div>
          <div>
            <h6>WooCommerce Theme Configuration</h6>
            <p>
              We can help you to install and configure a WooCommerce theme for a
              reasonable fee. Simply select a theme that you like and allow us
              to develop your site accordingly.
            </p>
          </div>
          <div>
            <h6>Ecommerce Site Improvements</h6>
            <p>
              We will help to configure new updates to your website so that you
              don’t lose out on customers over site errors.
            </p>
          </div>
          <div>
            <h6>User-Friendly Interface And Experience</h6>
            <p>
              Since user experience plays a big role in making conversions, we
              will optimize your interface to give your audience the best online
              experiences. We create sites that are simple, fast responding, and
              easy to navigate.
            </p>
          </div>
          <div>
            <h6>Responsive Design & Development</h6>
            <p>
              Mobile-responsive design is crucial for a successful website. They
              are not just necessary for SEO, but they are also important for
              the increasingly larger number of mobile users.
            </p>
          </div>
          <div>
            <h6>Quick Respond To Site Issues</h6>
            <p>
              Performance issues on your e-commerce platform can affect your
              overall revenue. We take care of on-site errors to make sure that
              your website is running smoothly without problems.
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-[60px]">
        <h4 className=" text-primary text-[14px] mb-[30px] max-laptop-sm:w-max max-laptop-sm:mx-auto max-mobile:text-[12px] max-mobile:mb-[10px]">
          Our Works
        </h4>
        <h2
          className=" text-[54px] font-[900] text-primary mb-[40px] max-desktop:text-[45px] max-desktop:mb-[30px] max-laptop-sm:w-max
         max-laptop-sm:mx-auto max-mobile:text-[30px] max-mobile:mb-[15px]"
        >
          Our Price Ranges
        </h2>
        <p className=" max-w-[650px] text-gray-500 max-desktop:text-[15px] max-laptop-sm:text-center max-laptop-sm:mx-auto max-mobile:text-[12px]">
          Whether you’re just starting out or looking for enterprise solutions,
          we’ve helped customers of all scale excel in business with tailored
          WooCommerce needs as per their requirement.
        </p>
        <a
          href="#"
          className=" mt-[30px] mb-[100px] bg-veryLight/70 inline-block max-desktop:text-[14px] text-ultraDarkPro py-[10px] px-[30px] rounded-md hover:bg-veryLight transition-all text-[15px] max-laptop-sm:block max-laptop-sm:mx-auto max-laptop-sm:w-max max-mobile:text-[12px] max-mobile:py-[8px] max-mobile:px-[20px]"
        >
          Get In Touch
        </a>
        <div className=" grid grid-cols-3 max-tablet:grid-cols-2 price__sec gap-[50px] max-mobile:grid-cols-1">
          <div>
            <h6>WooCommerce Maintenance</h6>
            <p>
              Maintain your site to be top-notch, fast-responding, and smooth.
              Never lose out on customers because of faulty issues.
            </p>
            <ul>
              <li>Regular maintenance</li>
              <li>Error identification</li>
              <li>Regular updates on site plugins</li>
              <li>Site Speed Optimization</li>
            </ul>
            <p>Starting From $199</p>
            <a href="#">Get In Touch</a>
          </div>
          <div>
            <h6>WooCommerce Retainer</h6>
            <p>
              Get a specific number of hours every month & use it for
              maintenance or development of a new feature.
            </p>
            <ul>
              <li>Focus on your product & leave the development to us.</li>
              <li>Dedicated Project Manager</li>
              <li>Hassle Free Experience</li>
              <li>No long term commiment</li>
            </ul>
            <p>Starting From $249</p>
            <a href="#">Get In Touch</a>
          </div>
          <div>
            <h6>WooCommerce Site Development</h6>
            <p>
              Bring your idea to reality with a custom WooCommerce website
              designed & developed to suit your needs.
            </p>
            <ul>
              <li>Custom design keeping UX in mind</li>
              <li>Products, Categories, payments & shipping setup</li>
              <li>Attractive and eye-catching E-Commerce Site</li>
              <li>Fast, responsive & SEO optimized website</li>
            </ul>
            <p>Starting From $2199</p>
            <a href="#">Get In Touch</a>
          </div>
        </div>
      </div>
      <div className=" mt-[80px]">
        <h2 className=" text-primary text-[54px] font-[900] mb-[30px] max-desktop:text-[45px] transition-all max-desktop:mb-[20px] max-mobile:text-[30px] max-mobile:text-center">
          Frequently Asked Questions
        </h2>
        <div className=" p-[10px]">
          <FAC />
        </div>
      </div>
      <div className=" mt-[70px]">
        <h4 className=" text-primary text-[14px] mb-[30px] max-laptop-sm:w-max max-laptop-sm:mx-auto max-mobile:text-[12px] max-mobile:mb-[10px]">
          Our Web Development Process
        </h4>
        <h2 className=" text-[54px] font-[900] transition-all max-desktop:text-[45px] text-primary capitalize max-laptop-sm:text-center max-laptop-sm:w-max max-laptop-sm:mx-auto max-mobile:w-full max-mobile:text-[30px]">
          our design process <br className=" max-mobile:hidden" /> in brief.
        </h2>
        <p className=" text-gray-500 font-[300] max-w-[650px] mt-[20px] mb-[35px] max-desktop:text-[15px] max-laptop-sm:text-center max-laptop-sm:mx-auto max-mobile:text-[12px]">
          The figure below represents a high level overview of the design and
          development process we use in creating a full project.
        </p>
        <div className=" bg-[#DBDFFF] py-[30px]">
          <Image className=" w-[40%] mx-auto" alt="structure" src={REQ} />
        </div>
      </div>
      <div className=" mt-[80px]">
        <h4 className=" text-primary text-[14px] mb-[30px] max-laptop-sm:w-max max-laptop-sm:mx-auto max-mobile:text-[12px] max-mobile:mb-[10px]">
          Our Works
        </h4>
        <h2 className=" text-primary text-[54px] font-[900] mb-[30px] max-desktop:text-[45px] transition-all max-laptop-sm:w-max max-laptop-sm:text-center max-laptop-sm:mx-auto max-mobile:w-full max-mobile:text-[30px] max-mobile:mb-[20px]">
          We Create Unique Sites To <br className=" max-mobile:hidden" /> Match
          Your Requirements
        </h2>
        <p className=" text-gray-500 font-[300] max-w-[650px] mb-[20px] max-desktop:text-[15px] max-desktop:mb-[10px] max-laptop-sm:text-center max-laptop-sm:mx-auto max-mobile:text-[12px]">
          Here’s a glimpse of some of the WooCommerce websites we’ve created for
          our clients in the past years.
        </p>
        <a
          href="#"
          className=" mt-[30px] mb-[100px] bg-veryLight/70 inline-block text-ultraDarkPro py-[10px] px-[30px] rounded-md hover:bg-veryLight transition-all text-[15px]  max-laptop-sm:block max-laptop-sm:mx-auto max-laptop-sm:w-max max-mobile:text-[12px] max-mobile:py-[8px] max-mobile:px-[20px]"
        >
          Get In Touch
        </a>
        <div className="we__create">
          <div>
            <Image alt="gravity nepal" src={GravityNepal} />
            <div>
              <h6>Gravity Nepal</h6>
              <p>E-commerce, Informative</p>
            </div>
          </div>
          <div>
            <Image alt="wayfree nepal" src={NepalWayFree} />
            <div>
              <h6>WayFree</h6>
              <p>E-commerce</p>
            </div>
          </div>
          <div>
            <Image alt="gravity nepal" src={NUT} />
            <div>
              <h6>Nutrition Nepal</h6>
              <p>E-commerce</p>
            </div>
          </div>
        </div>
        <a
          href="#"
          className=" mt-[30px] bg-veryLight/70 inline-block text-ultraDarkPro py-[10px] px-[30px] rounded-md hover:bg-veryLight transition-all text-[15px] max-desktop:text-[14px] max-mobile:text-[12px] max-mobile:py-[8px] max-mobile:px-[20px]"
        >
          View More
        </a>
      </div>
      <div className=" mt-[70px] flex items-center max-tablet:flex-col max-tablet:justify-center max-tablet:gap-[60px] justify-between">
        <div>
          <h1 className=" text-[40px] font-[900] max-tablet:w-max max-tablet:text-center max-tablet:mx-auto text-primary max-desktop:text-[35px] transition-all max-mobile:text-[30px] max-mobile:w-full max-mobile:mb-[10px]">
            {"Let's Push Your"} <br className=" max-mobile:hidden" />
            Company To New <br className=" max-mobile:hidden" />
            Heights Together.
          </h1>
          <p className=" font-[300] text-gray-500 max-tablet:text-center max-w-[450px] mt-[20px] mb-[20px] max-desktop:text-[15px] max-mobile:text-[12px] max-mobile:mt-[15px]">
            We’ll deliver a service that exceeds all of your expectations…even
            if they’re ridiculously high.
          </p>
          <ul className=" grid grid-cols-4 max-w-[450px] we__sponsore max-mobile:grid-cols-2 max-mobile:gap-y-[20px]">
            <li>
              <Image src={Nutrion} alt="Nutrion" />
            </li>
            <li>
              <Image src={Gravity} alt="gravity nepal" />
            </li>
            <li>
              <Image src={Wayfree} alt="wayfree" />
            </li>
            <li>
              <Image src={Gimpress} alt="gimpress" />
            </li>
          </ul>
        </div>
        <div>
          <div className=" grid grid-cols-2 review max-mobile:grid-cols-1">
            <div>
              <h6>Danie</h6>
              <h5>Director & Founder Kalihali</h5>
              <p>
                Job was speedily done, much appreciated. Good work thanks. I
                will use this company again.
              </p>
            </div>
            <div>
              <h6>Alexis Guszick</h6>
              <h5>Director Fischerund</h5>
              <p>
                Azency was incredibly organized, extremely helpful and
                knowledgeable. This was my first Shopify store creation
                experience and I hired Azency to help me navigate a very
                challenging template. If you are looking for Shopify experts
                with patience and creativity, Azency is who you want to contact
              </p>
            </div>
            <div>
              <h6>Siena Lee Tajiri</h6>
              <h5>Founder & CEO Love and Above Cat Club</h5>
              <p>
                Excellent response time, and very careful, conscientious
                communication as well; which was much appreciated and
                reassuring! Bottom line: they are a great value, and their value
                will only increase. Thank you Azency!
              </p>
            </div>
            <div>
              <h6>Chrissie Lavender</h6>
              <h5>CEO Revivify</h5>
              <p>
                Working Azency was a good experience. The process was straight
                forward and they turned around the requested work fairly
                quickly. I plan to keep working with them.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-[70px]">
        <h2 className=" text-[54px] font-[900] mb-[50px] text-center text-primary max-desktop:text-[45px] transition-all max-mobile:text-[30px] max-mobile:w-full">
          Kick Start Your WooCommerce <br className=" max-mobile:hidden" />
          Journey With Us
        </h2>
        <form id="#">
          <div className=" max-w-[500px] mx-auto">
            <div className=" flex w-full mb-[20px] mx-auto flex-col">
              <label
                htmlFor="fullName"
                className=" mb-[5px] text-primary font-[600] max-mobile:text-[13px]"
              >
                Full Name
              </label>
              <input
                className=" outline-none text-primary bg-primary/30 px-[15px] py-[10px] rounded-md border border-primary focus:outline-primary transition-all  outline-1 outline-transparent placeholder:text-gray-500 max-mobile:text-[14px]"
                placeholder="John Doe"
                type="text"
                name="fullName"
                id="fullName"
              />
            </div>
            <div className=" flex gap-[20px] max-mobile:flex-col">
              <div className=" flex flex-col">
                <label
                  className=" mb-[5px] text-primary font-[600] max-mobile:text-[13px]"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className=" outline-none text-primary bg-primary/30 px-[15px] py-[10px] rounded-md border border-primary focus:outline-primary transition-all  outline-1 outline-transparent placeholder:text-gray-500 max-mobile:text-[14px]"
                  type="email"
                  name="email"
                  placeholder="youremail@gmail.com"
                  id="email"
                />
              </div>
              <div className=" flex flex-col">
                <label
                  className=" mb-[5px] text-primary font-[600] max-mobile:text-[13px]"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className=" outline-none text-primary bg-primary/30 px-[15px] py-[10px] rounded-md border border-primary focus:outline-primary transition-all  outline-1 outline-transparent placeholder:text-gray-500 max-mobile:text-[14px]"
                  placeholder="Your Phone"
                  type="tel"
                  name="phone"
                  id="phone"
                />
              </div>
            </div>
            <p className=" mt-[30px] font-[500] text-primary mb-[20px] max-mobile:text-[13px]">
              Type Of Website
            </p>
            <div className=" px-[10px] py-[5px] form__select">
              <div>
                <input
                  type="radio"
                  name="websiteType"
                  id="ecommerce"
                  value="ecommerce"
                />
                <label htmlFor="ecommerce">E-Commerce</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="websiteType"
                  id="informational-wordPress"
                  value="informational-wordPress"
                />
                <label htmlFor="informational-wordPress">
                  Informational WordPress
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="websiteType"
                  id="shopify-ecommerce"
                  value="shopify-ecommerce"
                />
                <label htmlFor="shopify-ecommerce">Shopify Ecommerce</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="websiteType"
                  id="Custom-Website-On-MERN-Stack"
                  value="Custom-Website-On-MERN-Stacke"
                />
                <label htmlFor="Custom-Website-On-MERN-Stack">
                  Custom Website On MERN Stack
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="websiteType"
                  id="WordPress-Website-Maintenance"
                  value="WordPress-Website-Maintenance"
                />
                <label htmlFor="WordPress-Website-Maintenance">
                  WordPress Website Maintenance
                </label>
              </div>
            </div>
            <button
              className=" mt-[20px] py-[10px] px-[30px] bg-primary/30 rounded-md text-primary font-[500] hover:bg-primary/40 transition-all mb-[50px] max-mobile:text-[12px] max-mobile:py-[8px] max-mobile:px-[20px]"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
