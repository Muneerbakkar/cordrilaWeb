import { useEffect } from "react";

const Apk = () => {
  useEffect(() => {
    // Conditionally set scroll position based on screen width
    const scrollToTop = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        // Adjust this breakpoint as needed
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: 50, // Change this value to the desired scroll height in pixels
          behavior: "smooth",
        });
      }
    };

    scrollToTop(); // Call the function when component mounts
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen mt-[6.5rem]">
      <div className="p-8 rounded-lg flex flex-col md:flex-row items-center md:items-start w-full max-w-6xl">
        <div className="w-full md:w-1/2 md:pr-8 md:mb-0">
          <div className="aspect-video w-full h-full">
            <video
              className="h-full w-full rounded-lg"
              controls
              width="100%"
              title="Tutorial video"
              allowfullscreen
            >
              <source src="your-video-file.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-center text-gray-700 mt-4">
              Watch our tutorial to learn how to use the app!
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl font-bold mb-6">Download Our APK</h1>
          <p className="mb-4 text-gray-700">
            Experience the best features and performance with our latest APK.
            Easy to download and install.
          </p>
          <div className="flex flex-col gap-2 items-center">
            <a
              href="/apk/Cordrila.apk"
              download
              className="bg-[#BF360C] text-white px-6 py-3 rounded-lg hover:bg-red-600 mb-6"
            >
              Download
            </a>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">About Our App</h2>
            <p className="mb-4 text-gray-700">
              Our app offers a seamless and user-friendly experience, providing
              top-notch features and functionality. Stay up-to-date with our
              latest updates and enjoy an array of utilities designed to make
              your life easier.
            </p>
            <h2 className="text-2xl font-semibold mb-4">About Our Company</h2>
            <p className="text-gray-700">
              We are committed to delivering high-quality applications that
              cater to the needs of our users. With a focus on innovation and
              customer satisfaction, our company strives to create products that
              are both efficient and enjoyable to use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apk;
