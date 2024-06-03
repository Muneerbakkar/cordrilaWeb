import { Link } from "react-router-dom";
import VerticalBar from "../components/VerticalBar";

const Home = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <img
          src="/images/Banner-Img.jpg"
          alt=""
          className="w-full h-[20rem] md:h-[35rem] mb-8 md:mb-16 object-cover"
        />
        <div className="absolute top-[15%] left-[24%] md:left-[14%]">
          <VerticalBar />
        </div>
        <h1 className="font-bold text-5xl md:text-6xl text-start absolute top-[20%] left-[10%]">
          You Shop <br />
          We
          <span className="animate-colorChange">&nbsp;Deliver.</span>
        </h1>
        <div className="absolute top-[57%] md:top-[47%] left-[40%] md:left-[20%]">
          <VerticalBar />
        </div>
        <div className="absolute top-[70%] left-[5%] flex gap-14 items-center justify-center">
          <img
            src="/images/Rectangle.svg"
            alt=""
            className="h-12 md:h-14 ml-2"
          />
          <p className="text-start md:text-2xl">
            Feel The Best <br /> Delivery Experience With Us!
          </p>
        </div>
      </div>
      <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24">
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-medium">
            Cordrila Is The Best Last Mile Delivery Companies In India
          </h1>
          <p className="mt-4 mb-8 text-sm font-light">
            We Have Stationed 100 Plus Bikers And 30 Plus Small Trucks Across 14
            Plus Districts In India To Cater All B2B And B2C For Last Mile
            Delivery Which Can Be Tracked In Real Time With ETA.
          </p>
          <Link to="/contactus">
            <button className="bg-[#BF360C] text-white text-lg md:text-xl rounded-full px-4 py-2 mb-8">
              Contact us
            </button>
          </Link>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-xl md:text-2xl font-medium">WE’RE CORDRILA</h1>
          <p className="mt-4 mb-8 md:text-lg mx-4 md:mx-8 lg:mx-16 xl:mx-32">
            We provide a wide range of services and products to assist eCommerce
            businesses in running effective operations. Our lives now revolve
            around the ease of obtaining goods and services at our doorsteps,
            which fueled the companys explosive growth. To meet the needs of
            diverse multinational organizations throughout India, we operate and
            manage enormous warehouses and sizable fleets of delivery trucks.
          </p>
          <br />
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-start text-[#862608] list">
          <li className="text-center">
            <div className="mb-4 flex gap-6">
              <img src="/images/Group 4200.svg" alt="" className="h-8 w-auto" />
              <p className="mb-2 text-base text-start">
                <span className="font-bold"> 10+</span>
                <br />
                Offices & Service Centers
              </p>
            </div>
          </li>
          <li className="text-center">
            <div className="mb-4 flex gap-6">
              <img src="/images/Group 4200.svg" alt="" className="h-8 w-auto" />
              <p className="mb-2 text-base text-start">
                <span className="font-bold">10+ </span>
                <br />
                Hubs
              </p>
            </div>
          </li>
          <li className="text-center">
            <div className="mb-4 flex gap-6">
              <img src="/images/Group 4200.svg" alt="" className="h-8 w-auto" />
              <p className="mb-2 text-base text-start">
                <span className="font-bold">50+ </span>
                <br />
                Customer Care Executives
              </p>
            </div>
          </li>
          <li className="text-center">
            <div className="mb-4 flex gap-6">
              <img src="/images/Group 4200.svg" alt="" className="h-8 w-auto" />
              <p className="mb-2 text-base text-start">
                <span className="font-bold">20k Sqft+ </span>
                <br />
                Warehouse Capacity
              </p>
            </div>
          </li>
          <li className="text-center">
            <div className="mb-4 flex gap-6">
              <img src="/images/Group 4200.svg" alt="" className="h-8 w-auto" />
              <p className="mb-2 text-base text-start">
                <span className="font-bold">2+ </span>
                <br />
                Cargo Airports
              </p>
            </div>
          </li>
          <li className="text-center">
            <div className="mb-4 flex gap-6">
              <img src="/images/Group 4200.svg" alt="" className="h-8 w-auto" />
              <p className="mb-2 text-base text-start">
                <span className="font-bold">100+ </span>
                <br />
                Field Executives
              </p>
            </div>
          </li>
        </ul>
        <div className="flex justify-center items-center mb-8">
          <img
            src="/images/run.gif"
            alt="Description of your image"
            className="w-full md:w-[30rem] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
