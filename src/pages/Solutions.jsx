const Solutions = () => {
  return (
    <>
      <div className="relative flex items-center justify-center">
        <img
          src="/images/Rectangle 18.jpg"
          alt=""
          className="w-full h-[25rem] object-cover"
        />
        <div className="absolute text-center px-4 sm:px-0">
          <h1 className="font-bold text-[2rem] sm:text-[3rem]">
            You Shop, We{" "}
            <span className="text-[3rem] sm:text-[4rem] text-red-700">
              Deliver
            </span>
            .
          </h1>
          <p className="text-base sm:text-lg font-light mb-4">
            We believe supporting personal development creates a positive
            culture and environment for everyone.
          </p>
          <button className="text-xs sm:text-sm font-medium bg-red-700 text-white px-4 py-2 rounded-full">
            CONTACT US
          </button>
        </div>
      </div>
      <div className="m-4 sm:m-12">
        <h1 className="mb-3 text-xl sm:text-2xl font-normal">Our Services</h1>
        <p className="text-xs sm:text-sm">
          Sourcing new products are our forte. Our expert product development
          team will guide you through the entire development process from
          concept boards.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:ml-24 my-10 lg:my-20">
        <img
          src="/images/Rectangle 782.jpg"
          alt=""
          className="w-full lg:w-[30%] h-auto"
        />
        <div className="text-start mx-4 lg:mx-20 mt-4 lg:mt-0">
          <h1 className="text-xl sm:text-2xl font-medium">
            WARE HOUSING & 3PL
          </h1>
          <p className="text-sm sm:text-base lg:w-[30rem]">
            Warehousing solutions & 3PL offered by CORDRILA are tailor-made and
            cater to unique needs of its distinct customer base. With the
            biggest goods carriage network in India, CORDRILA is vital for a
            large number of Corporate Houses. We have a fleet of small and
            mid-sized vehicles, sports utility vehicles, Electric Vehicles (EVs)
            and buses for catering various customer needs. Our flexible and
            scalable operational models enables us to integrate resources and
            provide a one-stop solution to the transport needs of enterprises.
            We operate through a network of branches and franchisees to cater
            our valuable customers and we are now in the process of expanding
            our services to reach even the remotest locations of the Country.
          </p>
        </div>
      </div>
      <hr className="border-red-500 mx-4 lg:mx-56 my-6" />
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:mr-24 my-10 lg:my-20">
        <div className="text-start mx-4 lg:mx-20 mt-4 lg:mt-0">
          <h1 className="text-xl sm:text-2xl font-medium">MANPOWER</h1>
          <p className="text-sm sm:text-base lg:w-[30rem]">
            We offer HR solutions to meet the needs of our clients. We search
            and recruit quality workforce on the behalf of companies situated
            locally and internationally. We serve both large and small
            organizations across all industry sectors.
          </p>
        </div>
        <img
          src="/images/Rectangle 781.jpg"
          alt=""
          className="w-full lg:w-[30%] h-auto"
        />
      </div>
      <hr className="border-red-500 mx-4 lg:mx-56 my-6" />
      <div className="flex flex-col lg:flex-row justify-center items-center px-2 py-4 gap-4 bg-[#F4F4F4] mx-4 lg:mx-20 my-10 lg:my-20 rounded-lg ">
        <p className="mx-4 lg:mx-20 text-center lg:text-left">
          To Know more about our services
        </p>
        <hr className="border-red-500 w-40 lg:w-[50%] mx-10 lg:mx-10" />
        <button className="text-xs sm:text-sm font-medium bg-red-700 text-white px-4 py-2 rounded-full">
          CONTACT US
        </button>
      </div>
    </>
  );
};

export default Solutions;
