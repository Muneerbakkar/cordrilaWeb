import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Modal from "../components/Modal";

const jobListings = [
  {
    title: "Delivery Executive",
    description:
      "Responsible for delivering packages, documents, and various other items to their destinations.",
    schedule: "Mon - Sat",
    location: "Kerala",
  },
  {
    title: "Dispatcher",
    description:
      "Scheduling and dispatching drivers, work crews, vehicles or equipment to appropriate locations according to predetermined schedules, customer requests or immediate needs.",
    schedule: "Mon - Sat",
    location: "Kerala",
  },
  {
    title: "Operations Coordinator",
    description:
      "Responsible for ensuring that all departments are running smoothly. Capable to plan purchases, negotiate contracts and coordinate budgeting to make sure business continues as usual with minimal downtime or interruption from one department's workflow.",
    schedule: "Mon - Sat",
    location: "Kerala",
  },
  {
    title: "Warehouse Executive",
    description:
      "Responsible for ensuring accuracy of inventory and maintaining a safe working environment. Executive will collaborate with other departments to ensure timely and accurate order fulfillment and efficient stock rotation.",
    schedule: "Mon - Sat",
    location: "Kerala",
  },
  {
    title: "HR Specialist",
    description:
      "Preparing compensation and benefits packages, setting up company policies and maintaining updated employee records.",
    schedule: "Mon - Sat",
    location: "Kerala",
  },
  {
    title: "Driver",
    description:
      "Drives clients around in an efficient, safe and timely manner.",
    schedule: "Mon - Sat",
    location: "Kerala",
  },
];

const Careers = () => {
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState("");
  const openPositionsRef = useRef(null);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleApplyClick = (jobTitle) => {
    setSelectedJobTitle(jobTitle);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleViewOpenPositions = () => {
    openPositionsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const visibleJobs = showAll ? jobListings : jobListings.slice(0, 4);

  return (
    <div className="flex flex-col justify-center">
      <div className="relative flex items-center justify-center">
        <img
          src="/images/carrier.jpg"
          alt=""
          className="w-full h-[25rem] object-cover opacity-50 mb-10"
        />
        <div className="absolute text-center px-4 sm:px-6 md:px-10">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
            Explore The Career Opportunities We Provide
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-light mb-4">
            We believe supporting personal development creates a positive
            culture and environment for everyone
          </p>
          <button
            onClick={handleViewOpenPositions}
            className="text-xs sm:text-sm md:text-base font-medium bg-red-700 text-white px-4 py-2 rounded-full"
          >
            View open positions
          </button>
        </div>
      </div>
      <div
        ref={openPositionsRef}
        className="text-start mx-4 sm:mx-10 md:mx-20 lg:mx-40 mb-10"
      >
        <h1 className="my-8 text-xl sm:text-2xl md:text-3xl font-bold">
          Open Positions
        </h1>
        {visibleJobs.map((job, index) => (
          <div
            key={index}
            className="bg-gray-100 p-5 my-5 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center"
          >
            <div className="flex flex-col gap-2 w-full sm:w-[50%]">
              <h1 className="text-lg font-medium">{job.title}</h1>
              <p className="text-sm font-normal">{job.description}</p>
              <div className="flex gap-10 ml-0 sm:ml-14 my-2">
                <div className="flex items-center gap-4">
                  <img
                    src="/images/clock.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <span className="text-sm">{job.schedule}</span>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="/images/map.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <span className="text-sm">{job.location}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full sm:w-auto mt-4 sm:mt-0">
              <button
                className="border border-red-500 px-4 py-2 rounded-full text-xs text-red-500 md:mr-20"
                onClick={() => handleApplyClick(job.title)}
              >
                APPLY NOW
              </button>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <button
          onClick={handleShowMore}
          className="text-xs sm:text-sm md:text-base border border-gray-500 rounded-lg p-2 flex items-center
                     justify-center mx-auto w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 my-10"
        >
          MORE OPPORTUNITIES <ChevronDown strokeWidth={1} className="ml-2" />
        </button>
      )}
      <div className="bg-gray-100 mx-4 sm:mx-20 md:mx-80 my-5 rounded-lg">
        <p className="text-sm p-5 text-center text-gray-500">
          For technical support, our team is ready to assist you. Please get in
          touch.
        </p>
      </div>
      <Modal
        showModal={showModal}
        handleClose={handleCloseModal}
        jobTitle={selectedJobTitle}
      />
    </div>
  );
};

export default Careers;
