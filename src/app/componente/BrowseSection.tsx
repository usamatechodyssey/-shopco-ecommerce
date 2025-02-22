import React from "react";
import Image from "next/image";

const BrowseByStyle = () => {
  return (
    <div className="flex justify-center ">
      <div
        className="lg:w-[980px] xl:w-[1239px] xmm:w-[350px] xm:w-[300px] xm:pl-[16px] xm:pr-[16px] rounded-[40px]
     bg-gray-100  flex flex-col  items-center  py-12 lg:pl-[40px] lg:pr-[40px]"
      >
        <div className="flex flex-col  items-center ">
          {/* Heading */}
          <h2 className="text-center xm:w-[246px] lg:w-[687px] font-bold text-gray-900 mb-10 text-[32px] lg:text-[48px]">
            BROWSE BY DRESS STYLE
          </h2>

          {/* Grid Layout */}
          <div className="flex lg:flex-row justify-center items-center gap-5 xm:flex-col">
            {/* Casual Section */}
            <div className="relative xl:w-[407px] lg:w-[300px] lg:h-[290px] rounded-lg overflow-hidden shadow-md xm:w-[280px] xmm:w-[310px] xm:h-[190px] ">
              <Image
                src="/casual.png"
                alt="Casual"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute top-2 left-2 bg-white bg-opacity-80 px-4 py-2 rounded">
                <h3 className="text-sm font-semibold text-gray-900">Casual</h3>
              </div>
            </div>

            {/* Formal Section */}
            <div className="relative xl:w-[684px] lg:w-[600px] lg:h-[290px] rounded-lg overflow-hidden shadow-md xm:w-[280px] xmm:w-[310px] xm:h-[190px]">
              <Image
                src="/formal.png"
                alt="Formal"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute top-2 left-2 bg-white bg-opacity-80 px-4 py-2 rounded">
                <h3 className="text-sm font-semibold text-gray-900">Formal</h3>
              </div>
            </div>
          </div>

          <div className="flex lg:flex-row mt-4 justify-center items-center gap-5 xm:flex-col">
            {/* Casual Section */}
            {/* Formal Section */}
            <div className="relative xl:w-[684px] lg:w-[600px] lg:h-[290px] rounded-lg overflow-hidden shadow-md xm:w-[280px] xmm:w-[310px] xm:h-[190px]">
              <Image
                src="/party.png"
                alt="Formal"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute top-2 left-2 bg-white bg-opacity-80 px-4 py-2 rounded">
                <h3 className="text-sm font-semibold text-gray-900">Party</h3>
              </div>
            </div>

            <div className="relative xl:w-[407px] lg:w-[300px] lg:h-[290px] rounded-lg overflow-hidden shadow-md xm:w-[280px] xmm:w-[310px] xm:h-[190px] ">
              <Image
                src="/gym.png"
                alt="Casual"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute top-2 left-2 bg-white bg-opacity-80 px-4 py-2 rounded">
                <h3 className="text-sm font-semibold text-gray-900">Gym</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByStyle;
