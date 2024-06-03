import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#231F20] text-[#f4f4f4e6] p-8">
      <div className="flex flex-wrap">
        <div className="flex flex-col lg:flex-row items-start text-start">
          <div className="w-full sm:w-auto">
            <img
              src="/images/final logo.png"
              alt=""
              className="h-[2.5rem] w-auto m-2"
            />
            <p className="text-xs max-w-xs m-2">
              First Floor, Pallath Square Building, Njalakam Kara Eloor Road,
              Thrikkakara North Village, Kalamassery P.O, Ernakulam - 683104
            </p>
          </div>
          <div className="w-full sm:w-auto m-2">
            <h1 className="mb-4 sm:mb-10 whitespace-nowrap">Quick Links</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/solutions">Solutions</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
            </ul>
          </div>
          <hr className="w-48 border-zinc-600 mx-2 lg:mx-16 my-6" />
          <div className="w-full sm:w-auto m-2 whitespace-nowrap mr-28">
            <p className="mb-4 md:mb-10 ">Lets Connect</p>
            <ul>
              <li>
                <Link to="/contactus">Email Us</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="my-5 mx-[7px]">
            <div className="flex justify-center rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.5668129268224!2d76.3550914747955!3d10.134499489977896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080fe920e7849b%3A0x19a4b1cf2bbe6a8f!2sCordrila%20Infrastructure%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1716718988622!5m2!1sen!2sin"
                className="w-[300px] h-[200px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <hr className="w-full border-zinc-600 mx-2 my-6" />
        <div className="w-full flex justify-center opacity-30">
          <ul className="flex gap-8">
            <li>
              <Link to="https://www.facebook.com/cordrila">
                <img src="/images/Group 4140.svg" alt="facebook" />
              </Link>
            </li>
            <li>
              <Link to="">
                <img src="/images/Group 4137.svg" alt="" />
              </Link>
            </li>
            <li>
              <Link to="">
                <img src="/images/Group 4138.svg" alt="" />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/cordrila/">
                <img src="/images/Group 4139.svg" alt="instagram" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
