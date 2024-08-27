export default function ContactForm() {
    return (
      <form className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="First Name" className="p-3 rounded-lg bg-gray-700 border border-gray-600 text-white" />
          <input type="text" placeholder="Last Name" className="p-3 rounded-lg bg-gray-700 border border-gray-600 text-white" />
        </div>
        <div className="mb-4">
          <input type="email" placeholder="Email" className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white" />
        </div>
        <div className="mb-4">
          <input type="text" placeholder="Subject" className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white" />
        </div>
        <div className="mb-4">
          <textarea rows="5" placeholder="Write your message.." className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"></textarea>
        </div>
        <button type="submit" className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-400 hover:to-blue-400 text-white font-bold py-3 rounded-lg transition-colors">
          SEND INQUIRY
        </button>
        <p className="text-gray-400 text-center mt-4">We'll get back to you within 24 hours.</p>
      </form>
    );
  }
  