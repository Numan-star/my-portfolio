"use client";

export default function ContactForm() {
  return (
    <form className="bg-gray-900 p-8 rounded-sm shadow-lg border border-teal-950">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input type="text" placeholder="First Name" id="first-name-input" className="p-3 rounded-sm bg-gray-900 border border-teal-950 text-gray focus:border-teal-700 focus:outline-none" />
        <input type="text" placeholder="Last Name" className="p-3 rounded-sm bg-gray-900 border border-teal-950 text-gray focus:border-teal-700 focus:outline-none" />
      </div>
      <div className="mb-4">
        <input type="email" placeholder="Email" className="w-full p-3 rounded-sm bg-gray-900 border border-teal-950 text-gray focus:border-teal-700 focus:outline-none" />
      </div>
      <div className="mb-4">
        <input type="text" placeholder="Subject" className="w-full p-3 rounded-sm bg-gray-900 border border-teal-950 text-gray focus:border-teal-700 focus:outline-none" />
      </div>
      <div className="mb-4">
        <textarea rows="5" placeholder="Write your message.." className="w-full p-3 rounded-sm bg-gray-900 border border-teal-950 text-gray focus:border-teal-700 focus:outline-none"></textarea>
      </div>
      <button type="submit" className="w-full bg-gradient-to-r from-teal-700 to-teal-950 text-gray font-normal py-3 rounded-sm">
        SEND INQUIRY
      </button>
      <p className="text-gray-400 text-center mt-4">We&apos;ll get back to you within 24 hours.</p>
    </form>
  );
}
