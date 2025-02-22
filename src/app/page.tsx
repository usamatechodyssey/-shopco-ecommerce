import Image from "next/image";
import Rendercard from "./componente/Render Cards Dynamically";
import BrowseSection from "./componente/BrowseSection";
import TestimonialsSection from "./componente/Review-section/review";
import Footer from "./componente/Footer";
export default function HeroSection() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center bg-[#F2F0F1]  pl-[16px] pr-[16px] pt-[30px] relative ">
        {/* Left Section: Text Content */}
        <div className="flex-col lg:px-6  lg:py-8  lg:absolute  xm:items-center">
          <div className="xm:flex xm:flex-col ">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight lg:w-[577px]">
              FIND CLOTHES THAT MATCH YOUR STYLE
            </h1>
            <p className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg lg:w-[560px]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and define your sense of
              style.
            </p>
            <button className="mt-6 bg-black text-white px-8 py-3 md:px-12 md:py-4 lg:px-16 lg:w-[210px] rounded-full text-lg hover:bg-gray-800">
              Shop Now
            </button>
          </div>

          {/* Stats Section */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 lg:gap-20">
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold">200+</h2>
              <p className="text-gray-500 text-sm md:text-base">
                International Brands
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold">2,000+</h2>
              <p className="text-gray-500 text-sm md:text-base">
                High-Quality Products
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold">30,000+</h2>
              <p className="text-gray-500 text-sm md:text-base">
                Happy Customers
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="xm:hidden lg:flex">
          <img
            src="/Rectangle 2.png"
            alt="Fashionable Couple"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="lg:hidden">
        <img
          src="/single image.png"
          alt="Fashionable Couple"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Brand Section */}
      <div className="flex flex-wrap items-center justify-center bg-black gap-6 lg:gap-16 p-6">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="w-full  max-w-[80px] md:max-w-[100px] lg:max-w-[140px]"
          >
            <Image
              src={`/brand0${index + 1}.svg`}
              alt={`Brand ${index + 1}`}
              layout="responsive"
              height={40}
              width={140}
              priority
            />
          </div>
        ))}
      </div>
      <Rendercard />
      <BrowseSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
