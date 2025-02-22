import React from "react";
import { products } from "../componente/Card Data/products";
// import Card from "../componente/Card Data/card";
import { productss } from "../componente/Card Data/products";
import Card from "../componente/Card Data/card";

const Home: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="">
        {/* New Arrivals Section */}
        <div className="lg:p-8">
          <div className="flex flex-col items-center">
            <h1 className="lg:text-[48px] xm:text-[32px] font-bold text-center mt-9 mb-8">
              New Arrivals
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-lg">
            {products.map((product) => (
              <Card
                key={product.id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={product.image}
                originalPrice={product.originalPrice}
              />
            ))}
          </div>
        </div>

        {/* New Arrivals Section */}
        <div className="lg:p-8">
          <div className="flex flex-col items-center">
            <h1 className="lg:text-[48px] xm:text-[32px] font-bold text-center mt-9 mb-8">
              TOP SELLING
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-lg">
            {productss.map((product) => (
              <Card
                key={product.id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={product.image}
                originalPrice={product.originalPrice}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
