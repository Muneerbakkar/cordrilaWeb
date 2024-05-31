import MapComponent from "../components/MapComponent";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col lg:flex-row mx-5 lg:mx-10 px-5 lg:px-48 py-3 gap-10 mb-52">
        <div className="text-start">
          <h1 className="font-bold text-2xl mt-10">
            What is <span className="text-3xl text-red-600">Cordrila?</span>
          </h1>
          <p className="w-full lg:w-[30rem] text-lg mt-4">
            We offer a host of services and solutions that help eCommerce firms
            conduct their operations successfully. The convenience of receiving
            products and services at doorstep is now an integral part of our
            lives, which led to the rapid growth of the company. We operates and
            manages massive warehouses and vast fleets of delivery vehicles to
            cater the needs of various multinational corporations across India.
            We strive to offer hyper-connectedness within an efficient ecosystem
            of package storage, delivery, and pick-up. Our team of achievers
            make every effort in making this vision a reality.
          </p>
        </div>
        <div className="mt-5 lg:mt-0">
          <img
            src="/images/Group 4148.png"
            alt=""
            className="w-full h-auto lg:h-[30rem]"
          />
        </div>
      </div>
      <TestimonialsCarousel />
      <div className="my-20">
        <MapComponent />
      </div>
    </div>
  );
};

export default About;
