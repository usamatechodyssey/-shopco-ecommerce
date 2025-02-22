import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  price: number;
  rating: number;
  image: string;
  originalPrice?: number | null;
}

const Card: React.FC<CardProps> = ({
  title,
  price,
  rating,
  image,
  originalPrice,
}) => {
  return (
    <div className="flex flex-col p-4 bg-white transition duration-300 ">
      {/* Image Wrapper */}
      <div className="flex h-[298px]  relative overflow-hidden rounded-lg">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      {/* Content */}
      <h3 className="text-lg font-semibold text-gray-800 mt-4">{title}</h3>
      <div className="text-yellow-500 text-sm mb-2">
        {"⭐".repeat(Math.floor(rating))} {rating}/5
      </div>
      <div className="flex items-center gap-2 text-gray-800">
        <span className="text-xl font-bold">${price}</span>
        {originalPrice && (
          <span className="line-through text-gray-500">${originalPrice}</span>
        )}
      </div>
    </div>
  );
};

export default Card;
