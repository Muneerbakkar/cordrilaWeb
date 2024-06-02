import { useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://cordrilladb.onrender.com/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: `New message from ${name}`,
        text: `Email : ${email}\nPhone No : ${phone}\nMessage : ${message}`,
      }),
    });

    if (response.ok) {
      toast.success("Form submitted successfully");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      toast.error("Error submitting form");
    }
  };

  return (
    <div className="text-start p-5 w-full md:w-[50%]">
      <h1 className="mb-5 font-bold text-2xl">Contact Us</h1>
      <form ref={form} onSubmit={handleSubmit} className="text-xs font-normal">
        <label htmlFor="name" className="">
          Full Name
        </label>
        <br />
        <input
          id="name"
          type="text"
          value={name}
          placeholder="Enter Your Name"
          className="w-full bg-[#F4F4F4] p-4 my-2"
          onChange={(e) => setName(e.target.value)}
          name="from_name"
        />
        <br />
        <label htmlFor="email" className="">
          Email Id
        </label>
        <br />
        <input
          id="email"
          type="email"
          value={email}
          placeholder="Enter Your Email Id"
          className="w-full bg-[#F4F4F4] p-4 my-2"
          onChange={(e) => setEmail(e.target.value)}
          name="from_email"
        />
        <br />
        <label htmlFor="phone">Phone Number</label>
        <br />
        <input
          id="phone"
          type="tel"
          value={phone}
          placeholder="+91 XXXX-XXX-XXX"
          className="w-full bg-[#F4F4F4] p-4 my-2"
          onChange={(e) => setPhone(e.target.value)}
          name="from_phone"
        />
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <textarea
          id="message"
          value={message}
          placeholder="Enter Your Message"
          className="w-full bg-[#F4F4F4] p-4 my-2"
          onChange={(e) => setMessage(e.target.value)}
          name="message"
        />
        <br />
        <input type="hidden" value="HR Manager" name="to_name" />
        <button
          type="submit"
          className="bg-[#BF360C] px-4 py-2 rounded-full text-white text-xs"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
