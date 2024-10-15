"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
const FAC = () => {
  const [accordion, setAccordion] = useState({
    a: true,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
  });
  const toggleProperty = (key) => {
    setAccordion((prevState) =>
      Object.keys(prevState).reduce((newState, currentKey) => {
        newState[currentKey] =
          currentKey === key ? !prevState[currentKey] : false;
        return newState;
      }, {})
    );
  };
  return (
    <div>
      <div className="faqs">
        <div>
          <h5
            className={accordion.a ? "active" : ""}
            onClick={() => toggleProperty("a")}
          >
            What exactly is a WooCommerce Retainer Plan?
          </h5>
          <AnimatePresence>
            {accordion.a && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                style={{
                  overflow: "hidden",
                }}
                className=" text-ultraDark text-[15px] flex flex-col gap-[20px]"
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
              >
                <p className=" pt-[15px] px-[10px]">
                  The WooCommerce Development Retainer plan gives you monthly
                  dedicated development hours for website maintenance,
                  improvements, new feature implementation, marketing strategy
                  implementation, and whatever else you need for your
                  WooCommerce website. The plan functions as an extension of
                  your internal team and can be tailored to meet your specific
                  requirements. It could be 5 hours, 10 hours, 20 hours, or
                  whatever number of hours you require per month.
                </p>
                <p className=" pt-[15px] px-[10px]">
                  {
                    " With no long-term commitments, this WooCommerce Retainer plan allows you to work on a month-to-month basis. The WooCommerce Retainer Plan is a perfect choice if you need a dependable website development partner that can check after your website's performance, security, and technicalities on a regular basis and give you with emergency support whenever you need it."
                  }
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div>
          <h5
            className={accordion.b ? "active" : ""}
            onClick={() => toggleProperty("b")}
          >
            What does the WooCommerce Retainer Plan include?
          </h5>
          <AnimatePresence>
            {accordion.b && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                style={{
                  overflow: "hidden",
                }}
                className=" text-ultraDark text-[15px] "
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
              >
                <div className="flex flex-col gap-[20px] px-[10px] py-[15px]">
                  <p>
                    This is a completely customizable package that you may
                    tailor to your specific requirements. You will be assigned a
                    dedicated team, which will include a Project Manager, a
                    Quality Assurance Engineer, a Front-end Developer, and a
                    Back-end Developer, so you may use the monthly hours for any
                    WooCommerce website-related activities.
                  </p>
                  <p>
                    Some clients utilize the time to develop a new feature,
                    construct landing pages, improve technical SEO, increase
                    website performance, create a plugin, upload new products,
                    create new categories and other tasks. We also recommend
                    setting out a few hours for routine maintenance tasks such
                    as WooCommerce plugin updates, security monitoring, and
                    database optimization. Your priorities, on the other hand,
                    are entirely up to you. Simply contact the team, and they
                    will assist you with whatever you require.
                  </p>
                  <p>
                    You can also contact us if you have any technical questions,
                    such as developing a newsletter template or dealing with any
                    other website-related issues.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div>
          <h5
            className={accordion.c ? "active" : ""}
            onClick={() => toggleProperty("c")}
          >
            What is the distinction between a Retainer and a Maintenance Plan?
          </h5>
          <AnimatePresence>
            {accordion.c && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                style={{
                  overflow: "hidden",
                }}
                className=" text-ultraDark text-[15px] "
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
              >
                <div className=" flex flex-col gap-[20px] px-[10px] py-[15px]">
                  <p>
                    The WooCommerce Development Retainer plan is a versatile
                    option for regularly improving and updating your website
                    while also aligning it with marketing activities. A
                    Maintenance plan, on the other hand, is more akin to a
                    routine software update that keeps your WooCommerce
                    technology up to date, secure, and trouble-free.
                  </p>
                  <p>
                    The WooCommerce Retainer Plan is required if you want to
                    regularly update your website with new content, add new
                    pages, run advertisements with landing pages, or add new
                    features.
                  </p>
                  <p>
                    {
                      "The WooCommerce Maintenance Plan, on the other hand, is the appropriate solution if you only want someone to keep an eye on your website and make sure it's functioning smoothly and without issues."
                    }
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div>
          <h5
            className={accordion.d ? "active" : ""}
            onClick={() => toggleProperty("d")}
          >
            What does the WooCommerce Maintenance Plan include?
          </h5>
          <AnimatePresence>
            {accordion.d && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                style={{
                  overflow: "hidden",
                }}
                className=" text-ultraDark text-[15px] "
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
              >
                <div className=" flex flex-col gap-[20px] px-[10px] py-[15px]">
                  <p>
                    The WooCommerce Maintenance Plan helps you to ensure that
                    your website is up to date and working smoothly 24 hours a
                    day, seven days a week. It also includes frequent security
                    monitoring to keep you safe from hacking and unauthorized
                    access.
                  </p>
                  <p>
                    The WooCommerce Maintenance Plan provides the following
                    features:
                  </p>
                  <ul className="faq__list">
                    <li>
                      WooCommerce core, themes, and plugins are updated once a
                      month.
                    </li>
                    <li>
                      Support via phone and email is given first priority.
                    </li>
                    <li>
                      Security audits and performance monitoring are carried out
                      on a regular basis.
                    </li>
                    <li>{"Monitoring the website's functionality"}</li>
                    <li>
                      {
                        "Off-site backups on a regular basis (stored for 30 days)"
                      }
                    </li>
                    <li>Filtering and cleaning of spam</li>
                    <li>Optimizing the database</li>
                    <li>
                      Detecting and correcting 404 errors and broken hyperlinks
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div>
          <h5
            className={accordion.e ? "active" : ""}
            onClick={() => toggleProperty("e")}
          >
            What are the contract and payment terms?
          </h5>
          <AnimatePresence>
            {accordion.e && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                style={{
                  overflow: "hidden",
                }}
                className=" text-ultraDark text-[15px] "
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
              >
                <p className=" px-[10px] py-[15px]">
                  {
                    "A 100 percent upfront payment is required for your Monthly Retainer and Maintenance plans. We charge 50% advance and 50% after the website is built but before it goes live for one-time bespoke development work. A long-term commitment is not required for the monthly programs. However, we require a 15-day cancellation notice in order to allocate our team's resources and complete the task we have booked."
                  }
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div>
          <h5
            className={accordion.f ? "active" : ""}
            onClick={() => toggleProperty("f")}
          >
            Do you provide service 24 hours a day, 7 days a week?
          </h5>
          <AnimatePresence>
            {accordion.f && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                style={{
                  overflow: "hidden",
                }}
                className=" text-ultraDark text-[15px] "
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
              >
                <p className=" py-[15px] px-[10px]">
                  {
                    "We'll assign you a Project Manager after you sign up, and you'll have access to them via email, phone & whatsapp so you can interact with them during office hours and schedule a Google Meet call when necessary."
                  }
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div>
          <h5
            className={accordion.g ? "active" : ""}
            onClick={() => toggleProperty("g")}
          >
            Are you able to provide digital marketing services?
          </h5>
          <AnimatePresence>
            {accordion.g && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                style={{
                  overflow: "hidden",
                }}
                className=" text-ultraDark text-[15px] "
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
              >
                <div className=" py-[15px] px-[10px]">
                  <p>
                    {
                      "Yes. As a 360 degree creative agency, we also offer digital marketing services services like PPC, SEO, Media Buying and Content Creation for our clients.."
                    }
                  </p>
                  <p>
                    {
                      "The key to efficient internet marketing is to make judgments that make sense for your company, organization, and clients. We work with you to develop a custom strategy that will boost traffic and conversions."
                    }
                  </p>
                  <p>
                    <a href="#">Get In Touch</a> For Marketing Your Brand With
                    Us
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FAC;
