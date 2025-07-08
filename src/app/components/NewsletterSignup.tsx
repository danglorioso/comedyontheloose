"use client";

import React from "react";

export default function NewsletterSignup() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-4"
      style={{
        backgroundImage: "url('/banner/Skyline-Background-Image-50opacity.png')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-screen-md mx-auto text-center text-white mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          STAY UP TO DATE, SIGN UP FOR OUR NEWSLETTER!
        </h2>
        <p className="text-lg md:text-xl">
          Be the first to know about our latest episodes, sketches, upcoming seasons, talent requests, and more! Get access to behind-the-scene footage and special hidden secrets in our episodes
        </p>
        <p className="mt-4 underline text-white">
          <a href="https://us16.campaign-archive.com/home/?u=9faae1d80b90a6db941b833fd&id=193d5c8d12">View our newsletter archive.</a>
        </p>
      </div>

      {/* Mailchimp Form */}
      <div className="bg-white text-black max-w-xl mx-auto p-6 rounded shadow-md">
        <form
          action="https://comedyontheloose.us16.list-manage.com/subscribe/post?u=9faae1d80b90a6db941b833fd&amp;id=193d5c8d12"
          method="post"
          target="_blank"
          noValidate
        >
          <div className="text-sm text-gray-600 mb-4">
            <span className="text-red-500">*</span> indicates required
          </div>

          <div className="mb-4">
            <label htmlFor="mce-EMAIL" className="block mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              className="w-full border border-gray-300 px-3 py-2 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mce-FNAME" className="block mb-1">
              First Name
            </label>
            <input
              type="text"
              name="FNAME"
              id="mce-FNAME"
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mce-LNAME" className="block mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="LNAME"
              id="mce-LNAME"
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
          </div>

          {/* Hidden anti-bot field */}
          <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
            <input
              type="text"
              name="b_9faae1d80b90a6db941b833fd_193d5c8d12"
              tabIndex={-1}
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded transition"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
