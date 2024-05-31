import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
const Modal = ({ showModal, handleClose, jobTitle }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [gender, setGender] = useState("");
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: `New message from ${name}`,
        text: `Dear HR Manager,

        You have received a new job application for ${jobTitle} with the following details:
        
        Full Name : ${name}
        
        Email : ${email}
        
        Phone Number : ${phone}
        
        Current Location : ${location}
        
        Qualification : ${qualification}
        
        Experience : ${experience}
        
        Gender : ${gender}
        
        Please find the candidate's resume and cover letter attached for your review.
        
        Thank you for your attention to this application.
        
        Best regards,
        Cordrila Infrastructure Pvt Ltd
        
        Attachments:
        Resume - John Doe.pdf`,
      }),
    });

    if (response.ok) {
      toast.success("Form submitted successfully");
      setName("");
      setEmail("");
      setPhone("");
      setLocation("");
      setQualification("");
      setExperience("");
      setGender("");
    } else {
      toast.error("Error submitting form");
    }
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl m-2 text-start">
        <h2 className="text-2xl font-bold mb-4">Apply for {jobTitle}</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-xs font-normal mb-2">Full Name</label>
            <input
              type="text"
              className="w-full p-2 rounded-lg text-xs bg-[#F4F4F4]"
              placeholder="Enter Your Name"
              name="from_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-xs font-normal mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded-lg text-xs bg-[#F4F4F4]"
              placeholder="Enter Your Email"
              name="from_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-xs font-normal mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full p-2 rounded-lg text-xs bg-[#F4F4F4]"
              placeholder="+91 XXXX-XXX-XXX"
              name="from_phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-xs font-normal mb-2">
              Current Location
            </label>
            <input
              type="text"
              className="w-full p-2 rounded-lg text-xs bg-[#F4F4F4]"
              placeholder="Enter your current location"
              name="from_location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-xs font-normal mb-2">
              Qualification
            </label>
            <input
              type="text"
              className="w-full p-2 rounded-lg text-xs bg-[#F4F4F4]"
              placeholder="Enter your qualification"
              name="from_qualification"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-xs font-normal mb-2">
              Experience
            </label>
            <textarea
              placeholder="Enter your experience"
              className="w-full p-2 rounded-lg text-xs bg-[#F4F4F4]"
              name="from_experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-xs font-normal mb-2">Gender</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="from_gender"
                  value="male"
                  className="mr-2"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="from_gender"
                  value="female"
                  className="mr-2"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                Female
              </label>
            </div>
          </div>
          <input type="hidden" value="Muneer" name="to_name" />
          <input type="hidden" value={jobTitle} name="from_designation" />
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 px-4 py-2 border rounded-full text-red-500"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-500 text-white rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Modal;
