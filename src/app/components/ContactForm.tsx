import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-black">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form
        action="https://formspree.io/f/xeokyqlz"
        method="POST"
        className="space-y-6"
      >
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
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
