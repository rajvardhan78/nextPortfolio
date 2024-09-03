"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import Button from "./msgBtn";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_1ng0u78",
        "template_ifyqu1n",
        form.current,
        "w926c_8QuJSmbMr49"
      );
      console.log("Message sent.");
      setEmailSubmitted(true);
    } catch (error) {
      console.error("Failed to send message.", error.text);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-3xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-white mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/rajvardhan78" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/rajvardhanshinde/"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form ref={form} className="flex flex-col" onSubmit={sendEmail}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-xl font-medium"
            >
              Your email
            </label>
            <input
              name="user_email"
              type="email"
              id="email"
              required
              className="bg-[rgba(24,25,30,0.7)] backdrop-filter backdrop-blur-md border border-[#ffd199] placeholder-[#ffd199] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-xl mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[rgba(24,25,30,0.7)] backdrop-filter backdrop-blur-md border border-[#99d6f2] placeholder-[#99d6f2] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-xl mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[rgba(24,25,30,0.7)] backdrop-filter backdrop-blur-md border border-[#e0b3ff] placeholder-[#e0b3ff] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          {emailSubmitted ? (
            <div className="bg-green-600 bg-opacity-50 backdrop-filter backdrop-blur-lg text-white text-center py-4 rounded-lg">
              Email sent successfully!
            </div>
          ) : (
            <Button type="submit" />
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
