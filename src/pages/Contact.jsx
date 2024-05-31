import ContactUs from "../components/ContactUs";
import Feedback from "../components/Feedback";
import { ToastContainer } from "react-toastify";

const Contact = () => {
  return (
    <>
      <div className="relative flex justify-center items-center">
        <img
          src="/images/Rectangle 19.jpg"
          alt=""
          className="w-full max-h-80 object-cover"
        />
        <div className="absolute text-center px-4">
          <h1 className="text-3xl font-bold">How Can We Help You?</h1>
          <p className="md:text-lg text-xs mt-2">
            We value your input! If you have suggestions for improvements or
            feedback about your experience, were eager to hear it. Your insights
            play a crucial role in helping us enhance our services.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center mb-10">
        <div className="bg-[#712F91] text-white flex flex-col items-center justify-center p-6 gap-4">
          <img src="/images/phone-call.svg" alt="" className="w-12 h-12" />
          <div className="font-bold text-lg text-center">
            <h1>Call Today</h1>
            <p>+91 04842925935</p>
          </div>
        </div>
        <div className="bg-[#ffc107] text-white flex flex-col items-center justify-center p-6 gap-4">
          <img src="/images/map-pin.svg" alt="" className="w-12 h-12" />
          <div className="text-center">
            <h1 className="text-lg font-bold">Let’s Meet</h1>
            <p className="w-full font-light text-sm">
              First Floor, Pallath Square Building, Njalakam Kara Eloor Road,
              Thrikkakara North Village, Kalamassery P.O, Ernakulam - 683104
            </p>
          </div>
        </div>
        <div className="bg-[#03ACB1] text-white flex flex-col items-center justify-center p-6 gap-4">
          <img src="/images/mail.svg" alt="" className="w-12 h-12" />
          <div className="font-bold text-lg text-center">
            <h1>Email Us</h1>
            <p>enquiries@cordrila.com</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row my-14">
        <div className="text-start p-5 bg-[#712F91] text-white flex items-center justify-center w-full md:w-1/2 h-auto md:h-[33rem]">
          <div className="w-full md:w-[55%]">
            <h1 className="font-bold text-2xl mb-12">Ask A Question</h1>
            <p className="text-xs w-full md:w-[80%]">
              Sometimes, A Personal Touch Is Whats Needed. We Provide Multiple
              Avenues To Reach Our Dedicated Support Team – Whether Through
              Email, Live Chat, Or A Dedicated Helpline. Our Experts Are Here To
              Listen And Provide Assistance Tailored To Your Needs.
            </p>
          </div>
          <span className="text-[28rem] font-bold text-[#ffffff19] hidden md:block">
            ?
          </span>
        </div>
        <ContactUs />
      </div>
      <Feedback />
      <div className="flex flex-col md:flex-row bg-[#F4F4F4] items-center justify-center mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-48 my-4 sm:my-8 md:my-10 lg:my-12 xl:my-14 p-5 rounded-lg gap-5">
        <div className="text-sm whitespace-nowrap md:text-base text-center md:text-left">
          Our executive is waiting for your call
        </div>
        <hr className="border-red-500 w-40 lg:w-[50%] mx-10 lg:mx-10 md:hidden block" />
        <div className="w-full sm:w-[0.05rem] h-[0.05rem] sm:h-12 bg-black opacity-50 border border-[rgba(35,31,32,0.1)] rounded-[0.1rem] md:block hidden"></div>
        <div className="text-sm md:text-base whitespace-nowrap text-center md:text-left">
          +91 04842925935
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
