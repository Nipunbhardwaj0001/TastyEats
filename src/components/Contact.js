const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-pink-50 text-white px-4">
      <div className="w-full max-w-lg bg-yellow-500 p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <form
          action="https://formspree.io/f/mgvzbkbk"
          method="POST"
          className="flex flex-col space-y-4"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              placeholder="Type your message..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-orange-500 hover:bg-orange-800 transition duration-300 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
