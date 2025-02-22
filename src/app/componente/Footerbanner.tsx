export const Banner = () => {
  return (
    <div className="relative">
      <div className="bg-gray-200 text-white rounded-lg py-6 px-8 flex flex-col md:flex-row justify-between items-center mx-auto relative xm:-top-20 lg:-top-20 xm:ml-4 xm:mr-4">
        <h3 className="text-2xl md:text-[40px] font-bold text-center md:text-left md:w-[551px]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h3>
        <form className="flex flex-col md:flex-row items-center mt-4 md:mt-0 w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="rounded-full px-4 py-2 text-gray-700 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="bg-amber-300 text-black font-bold px-6 py-2 mt-4 md:mt-0 md:ml-4 rounded-full hover:bg-amber-400 transition-colors"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </div>
  );
};
