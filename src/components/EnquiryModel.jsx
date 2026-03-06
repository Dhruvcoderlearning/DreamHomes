import { useState } from "react";

const EnquiryModal = ({ property, close }) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simulate API request
    console.log("Enquiry Submitted:", {
      property: property.title,
      ...formData,
    });

    setSuccess(true);

    setTimeout(() => {
      close();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white p-6 rounded-xl w-[400px] shadow-xl">

        <h2 className="text-xl font-bold mb-4">
          Enquiry for {property.title}
        </h2>

        {success ? (
          <div className="text-green-600 font-semibold text-center">
            ✅ Enquiry Sent Successfully!
          </div>
        ) : (

          <form onSubmit={handleSubmit} className="space-y-3">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="3"
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Send Enquiry
            </button>

            <button
              type="button"
              onClick={close}
              className="w-full text-gray-500"
            >
              Cancel
            </button>

          </form>

        )}

      </div>

    </div>
  );
};

export default EnquiryModal;