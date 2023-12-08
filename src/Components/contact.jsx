import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_4o5wq3e";

    const emailData = {
      service_id: serviceId,
      user_id: "bhavyaanand0911@gmail.com",
      template_params: {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    };

    // Send the email
    emailjs.sendForm(serviceId, "template_fkr105r", e.target, emailData).then(
      (response) => {
        console.log("Email sent successfully:", response);
        // You can add code here to show a success message or redirect the user to a thank-you page.
      },
      (error) => {
        console.error("Email sending failed:", error);
      }
    );

    // Clear the form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const lineStyle = {
    width: "80px",
    borderTop: "5px solid #da38da",
    marginBottom: "30px",
  };

  return (
    <div className="min-h-screen bg-slate-700 w-full flex flex-col items-center leading-20 font-['montserrat']">
      <span className="mt-10 text-white text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold mb-5 md:mb-10">
        CONTACT ME
      </span>
      <div style={lineStyle}></div>
      <p className="text-white mb-10 font-medium text-lg md:text-xl lg:text-xl xl:text-xl text-center mt-5 md:mt-10">
        Please feel free to contact me by filling out the form below. I will
        respond to you as soon as I can.
      </p>
      <div className="bg-white md:w-[800px] lg:w-[80%] xl:w-[800px] h-auto md:h-[650px] shadow-xl rounded-lg mb-10">
        <form className="flex flex-col m-4 p-8" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="mb-5 md:mb-16 mt-5 h-14 p-2 text-lg shadow-lg font-medium border border-gray-300 rounded-md bg-gray-100"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="mb-5 md:mb-16 h-14 p-2 text-lg shadow-lg font-medium border border-gray-300 rounded-md bg-gray-100"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            placeholder="Say Hi!"
            className="mb-5 md:mb-16 h-44 p-2 text-lg shadow-lg font-medium border border-gray-300 rounded-md bg-gray-100 resize-none"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="w-[200px] h-[50px] rounded-md text-white text-lg font-semibold self-end transform transition-transform hover:translate-y-[-3px]"
            style={{ backgroundColor: "#da38da" }}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
