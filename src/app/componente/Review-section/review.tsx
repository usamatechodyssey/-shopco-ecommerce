import TestimonialCard from "./testimonials";

const TestimonialsSection = () => {
  // Array of testimonial objects
  const testimonials = [
    {
      name: "Sarah M.",
      review:
        "I'm blown away by the quality and style of the clothes I received from Shopza. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      stars: 5,
    },
    {
      name: "Alex K.",
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shopza. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      stars: 4,
    },
    {
      name: "James L.",
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopza. The selection of clothes is not only diverse but also on-point with the latest trends.",
      stars: 5,
    },
  ];

  return (
    <section className="bg-gray-50 py-8">
      <h2 className="lg:text-[48px] font-bold text-center mb-6 xm:text-[32px] px-4 lg:px-16 xm:text-left">
        OUR HAPPY CUSTOMERS
      </h2>
      <div className=" grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-16">
        {/* Loop through testimonials array and create a card for each */}
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index} // Unique key for each card
            name={testimonial.name} // Pass name to the card
            review={testimonial.review} // Pass review to the card
            stars={testimonial.stars} // Pass star count to the card
          />
        ))}
      </div>
    </section>
  );
};
export default TestimonialsSection;
