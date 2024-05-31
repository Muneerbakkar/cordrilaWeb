import { useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: `You got a new feedback from ${name}`,
        text: `Email : ${email}\nPhone No : ${phone}\nFeedBack : ${message}`,
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
    <div className="p-10 flex flex-col items-center justify-center mx-auto mb-12 rounded-lg md:shadow-2xl w-full md:w-3/4 lg:w-1/2">
      <h1 className="font-bold text-2xl">Give Us Your Feedback</h1>
      <p className="py-3 text-sm font-normal">Your feedback is our energy</p>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="text-xs text-start font-normal w-full px-4"
      >
        <label htmlFor="feedback-name" className="">
          Full Name
        </label>
        <br />
        <input
          type="text"
          id="feedback-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
          className="w-full bg-[#F4F4F4] px-4 py-2 my-2 rounded"
          name="from_name"
        />
        <br />
        <label htmlFor="feedback-email" className="">
          Email Id
        </label>
        <br />
        <input
          type="email"
          id="feedback-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email Id"
          className="w-full bg-[#F4F4F4] px-4 py-2 my-2 rounded"
          name="from_email"
        />
        <br />
        <label htmlFor="feedback-phone">Phone Number</label>
        <br />
        <input
          type="number"
          id="feedback-phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+91 XXXX-XXX-XXX"
          className="w-full bg-[#F4F4F4] px-4 py-2 my-2 rounded"
          name="from_phone"
        />
        <br />
        <label htmlFor="feedback-message">Message</label>
        <br />
        <textarea
          id="feedback-message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter Your Message"
          className="w-full bg-[#F4F4F4] px-4 py-2 my-2 rounded"
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

export default Feedback;
