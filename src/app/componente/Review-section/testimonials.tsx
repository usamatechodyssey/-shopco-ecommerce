import React from "react";

interface TestimonialCardProps {
  name: string;
  review: string;
  stars: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  review,
  stars,
}) => {
  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white flex flex-col">
      <div className="flex items-center gap-2">
        <div className="font-semibold text-lg text-gray-700">{name}</div>
        <span className="text-green-500 text-sm rounded-full bg-green-500">
          ✔
        </span>
      </div>
      <div className="flex items-center mt-2">
        {[...Array(stars)].map((_, index) => (
          <span key={index} className="text-yellow-400 text-xl">
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-600 mt-3  text-[16px] ">{review}</p>
    </div>
  );
};

export default TestimonialCard;
