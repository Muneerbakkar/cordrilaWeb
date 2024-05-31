const MapComponent = () => {
  return (
    <div className="w-full flex justify-center rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.5668129268224!2d76.3550914747955!3d10.134499489977896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080fe920e7849b%3A0x19a4b1cf2bbe6a8f!2sCordrila%20Infrastructure%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1716718988622!5m2!1sen!2sin"
        className="w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1200px] h-[450px]"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default MapComponent;
