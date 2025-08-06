import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; // Using the modern @emailjs/browser package
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef(); // Keep useRef for the form element

  // isSent state is used for the toast messages and can be kept
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Retrieve environment variables for EmailJS IDs
    // Make sure these variables are defined in your .env file (e.g., .env.local)
    // Example:
    // VITE_SERVICEID=YOUR_SERVICE_ID
    // VITE_TEMPLATEID=YOUR_TEMPLATE_ID
    // VITE_PUBLICKEY=YOUR_PUBLIC_KEY
    const serviceID = import.meta.env.VITE_SERVICEID;
    const templateID = import.meta.env.VITE_TEMPLATEID;
    const publicKey = import.meta.env.VITE_PUBLICKEY;

    // Check if environment variables are loaded (optional, but good for debugging)
    if (!serviceID || !templateID || !publicKey) {
      toast.error("Email service configuration missing. Please check .env variables.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      console.error("EmailJS environment variables are not loaded correctly.");
      return; // Stop execution if keys are missing
    }

    emailjs
      .sendForm(
        serviceID,   // Use environment variable
        templateID,  // Use environment variable
        form.current, // Reference to the form element
        publicKey    // Use environment variable
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-fuchsia-600 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Let’s code the next conversation.
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-gray-900/10 p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        {/* The form uses ref={form} and onSubmit={sendEmail} */}
        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email" // Make sure name attributes match your EmailJS template
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="user_name" // Make sure name attributes match your EmailJS template
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-800"
          />
          <input
            type="text"
            name="subject" // Make sure name attributes match your EmailJS template
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-800"
          />
          <textarea
            name="message" // Make sure name attributes match your EmailJS template
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-800"
          />
          
          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-fuchsia-600 to-purple-800 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;