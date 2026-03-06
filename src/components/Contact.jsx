import { useState } from "react";

const Contact = () => {

  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">
        Contact Us
      </h1>

      {sent ? (
        <p className="text-green-600 font-semibold">
          ✅ Message Sent Successfully!
        </p>
      ) : (

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded-xl shadow"
        >

          <input
            type="text"
            placeholder="Your Name"
            required
            className="border p-3 w-full rounded"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="border p-3 w-full rounded"
          />

          <textarea
            placeholder="Message"
            rows="4"
            className="border p-3 w-full rounded"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>

        </form>

      )}

    </div>
  );
};

export default Contact;