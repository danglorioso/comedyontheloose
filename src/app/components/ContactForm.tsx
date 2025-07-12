"use client";

import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xeokyqlz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 md:py-12 text-black">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

      {isSubmitted ? (
        <div className="bg-green-100 text-green-800 border border-green-400 px-6 py-4 rounded">
            Thank you for contacting us! Your message has been sent successfully.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block font-medium">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                name="firstName"
                required
                className="w-full border border-gray-300 px-3 py-2 rounded text-black bg-white"
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                name="lastName"
                required
                className="w-full border border-gray-300 px-3 py-2 rounded text-black bg-white"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full border border-gray-300 px-3 py-2 rounded text-black bg-white"
            />
          </div>

          {/* Company (optional) */}
          <div>
            <label className="block font-medium">Company (optional)</label>
            <input
              name="company"
              className="w-full border border-gray-300 px-3 py-2 rounded text-black bg-white"
            />
          </div>

          {/* Phone (optional) */}
          <div>
            <label className="block font-medium">Phone # (optional)</label>
            <input
              name="phone"
              type="tel"
              className="w-full border border-gray-300 px-3 py-2 rounded text-black bg-white"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-medium">
              Comment or Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full border border-gray-300 px-3 py-2 rounded text-black bg-white"
            ></textarea>
          </div>

          {/* How did you hear about us */}
          <div>
            <label className="block font-medium mb-2">
              How did you hear about us? (optional)
            </label>
            <div className="space-y-2">
              {[
                "Live TV",
                "Online episodes",
                "Sketches on YouTube",
                "Social Media",
                "Word of mouth",
                "Other",
              ].map((option) => (
                <label key={option} className="block text-black">
                  <input
                    type="radio"
                    name="referralSource"
                    value={option}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-green-600 text-white px-6 py-2 rounded transition ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
