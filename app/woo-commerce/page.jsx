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
      <div className=" mt-[120px] flex">
        <div>
          <div>
            <h1 className=" text-[40px] text-primary font-[900] w-max">
              Bring Your Products Online <br /> With E-Commerce <br />
              Website
            </h1>
            <p className=" text-[16px] mb-[35px] font-[300] max-w-[750px] text-[#505050] mt-[30px]">
              We are experts in WooCommerce. We can help you with all your
              needs, whether it is to develop a new ecommerce site, update an
              existing store, or website customizations. We will help you with
              the most popular WordPress plugin.
            </p>
            <ul className=" grid grid-cols-2 text-primary hero__list gap-[10px] text-[15px]">
              <li>Fast and responsive E-Commerce site</li>
              <li>Attractive & eye-catching product layout</li>
              <li>Good user-experience</li>
              <li>Easy to navigate</li>
            </ul>
            <a
              href="#"
              className=" mt-[30px] bg-veryLight/70 inline-block text-ultraDarkPro py-[10px] px-[30px] rounded-md hover:bg-veryLight transition-all text-[15px] "
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className=" max-w-[400px]">
          <Image alt="woocommerce" src={Wayf} />
        </div>
      </div>
      <div className=" mt-[70px]">
        <h4 className=" text-[14px] text-dark mb-[40px]">Why Us</h4>
        <h2 className=" text-[54px] font-[900] text-primary mb-[20px]">
          Our Services
        </h2>
        <p className=" text-gray-500 font-[300] mb-[70px] max-w-[500px]">
          We help you to set up products in a way that best appeals to your
          target market.
        </p>
        <div className=" grid grid-cols-3 gap-[40px] why__us">
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
        <h4 className=" text-primary text-[14px] mb-[30px]">Our Works</h4>
        <h2 className=" text-[54px] font-[900] text-primary mb-[40px]">
          Our Price Ranges
        </h2>
        <p className=" max-w-[650px] text-gray-500">
          Whether you’re just starting out or looking for enterprise solutions,
          we’ve helped customers of all scale excel in business with tailored
          WooCommerce needs as per their requirement.
        </p>
        <a
          href="#"
          className=" mt-[30px] mb-[100px] bg-veryLight/70 inline-block text-ultraDarkPro py-[10px] px-[30px] rounded-md hover:bg-veryLight transition-all text-[15px] "
        >
          Get In Touch
        </a>
        <div className=" grid grid-cols-3 price__sec gap-[50px]">
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
        <h2 className=" text-primary text-[54px] font-[900] mb-[30px]">
          Frequently Asked Questions
        </h2>
        <div className=" p-[10px]">
          <FAC />
        </div>
      </div>
      <div className=" mt-[70px]">
        <h4 className=" text-primary text-[14px] mb-[30px]">
          Our Web Development Process
        </h4>
        <h2 className=" text-[54px] font-[900] text-primary capitalize">
          our design process <br /> in brief.
        </h2>
        <p className=" text-gray-500 font-[300] max-w-[650px] mt-[20px] mb-[35px]">
          The figure below represents a high level overview of the design and
          development process we use in creating a full project.
        </p>
        <div className=" bg-[#DBDFFF] py-[30px]">
          <Image className=" w-[40%] mx-auto" alt="structure" src={REQ} />
        </div>
      </div>
      <div className=" mt-[80px]">
        <h4 className=" text-primary text-[14px] mb-[30px]">Our Works</h4>
        <h2 className=" text-primary text-[54px] font-[900] mb-[30px]">
          We Create Unique Sites To <br /> Match Your Requirements
        </h2>
        <p className=" text-gray-500 font-[300] max-w-[650px] mb-[20px]">
          Here’s a glimpse of some of the WooCommerce websites we’ve created for
          our clients in the past years.
        </p>
        <a
          href="#"
          className=" mt-[30px] mb-[100px] bg-veryLight/70 inline-block text-ultraDarkPro py-[10px] px-[30px] rounded-md hover:bg-veryLight transition-all text-[15px] "
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
          className=" mt-[30px] bg-veryLight/70 inline-block text-ultraDarkPro py-[10px] px-[30px] rounded-md hover:bg-veryLight transition-all text-[15px] "
        >
          View More
        </a>
      </div>
      <div className=" mt-[70px] flex items-center justify-between">
        <div>
          <h1 className=" text-[40px] font-[900] text-primary">
            {"Let's Push Your"} <br />
            Company To New <br />
            Heights Together.
          </h1>
          <p className=" font-[300] text-gray-500 max-w-[450px] mt-[20px] mb-[20px]">
            We’ll deliver a service that exceeds all of your expectations…even
            if they’re ridiculously high.
          </p>
          <ul className=" grid grid-cols-4 max-w-[450px] we__sponsore">
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
          <div className=" grid grid-cols-2 review">
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
        <h2 className=" text-[54px] font-[900] mb-[50px] text-center text-primary">
          Kick Start Your WooCommerce <br />
          Journey With Us
        </h2>
        <form id="#">
          <div className=" max-w-[500px] mx-auto">
            <div className=" flex w-full mb-[20px] mx-auto flex-col">
              <label
                htmlFor="fullName"
                className=" mb-[5px] text-primary font-[600]"
              >
                Full Name
              </label>
              <input
                className=" outline-none text-primary bg-primary/30 px-[15px] py-[10px] rounded-md border border-primary focus:outline-primary transition-all  outline-1 outline-transparent placeholder:text-gray-500"
                placeholder="John Doe"
                type="text"
                name="fullName"
                id="fullName"
              />
            </div>
            <div className=" flex gap-[20px]">
              <div className=" flex flex-col">
                <label
                  className=" mb-[5px] text-primary font-[600]"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className=" outline-none text-primary bg-primary/30 px-[15px] py-[10px] rounded-md border border-primary focus:outline-primary transition-all  outline-1 outline-transparent placeholder:text-gray-500"
                  type="email"
                  name="email"
                  placeholder="youremail@gmail.com"
                  id="email"
                />
              </div>
              <div className=" flex flex-col">
                <label
                  className=" mb-[5px] text-primary font-[600]"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className=" outline-none text-primary bg-primary/30 px-[15px] py-[10px] rounded-md border border-primary focus:outline-primary transition-all  outline-1 outline-transparent placeholder:text-gray-500"
                  placeholder="Your Phone"
                  type="tel"
                  name="phone"
                  id="phone"
                />
              </div>
            </div>
            <p className=" mt-[30px] font-[500] text-primary mb-[20px]">
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
              className=" mt-[20px] py-[10px] px-[30px] bg-primary/30 rounded-md text-primary font-[500] hover:bg-primary/40 transition-all mb-[50px]"
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
