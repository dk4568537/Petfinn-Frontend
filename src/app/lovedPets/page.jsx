import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { FaArrowRightLong } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    image: "/images/laura-robinson.png",
    quote:
      "Finn has evolved with the times. So many products are outdated these days and Finn has a great, fresh approach to the pet supplement world.",
    name: "DR. LAURA ROBINSON, DVM",
  },
  {
    id: 2,
    image: "/images/kerri-nelson.png",
    quote:
      "Finn prioritizes the best quality ingredients and makes it easy for pet owners to find supplements that will benefit their companion animals.",
    name: "DR. KERRI NELSON, DVM",
  },
  {
    id: 3,
    image: "/images/farren-billand.png",
    quote:
      "Our pets' best interest was truly in mind during the creation of these supplements.”",
    name: "DR. FARREN BILLAND, DVM",
  },
];

const Page = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[0]);

  const handleImageClick = (testimonial) => {
    setCurrentTestimonial(testimonial);
  };

  const handleNextClick = () => {
    const currentIndex = testimonials.findIndex(
      (item) => item.id === currentTestimonial.id
    );
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setCurrentTestimonial(testimonials[nextIndex]);
  };

  return (
    <div className="flex justify-center items-center py-10 bg-[#161345] text-white px-3">
      <div className="container">
        <div className="py-10">
          <h1 className=" text-3xl lg:text-9xl text-center font-serif font-semibold">
            Loved by Pets, Endorsed by Vets
          </h1>
        </div>
        <div className="justify-center items-center lg:pl-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Slide>
            <div className="items-center flex justify-center">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
              />
            </div>
            <div className="col-span-2 gap-8 flex justify-center items-start flex-col">
              <h3 className="font-serif w-full md:w-[470px] lg:w-[650px] text-sm md:text-2xl lg:text-4xl">
                {currentTestimonial.quote}
              </h3>
              <p>{currentTestimonial.name}</p>
            </div>
          </Slide>
        </div>
        <div className="flex justify-center items-center gap-4 mt-8">
          <Slide>
            {testimonials.map((testimonial) => (
              <img
                key={testimonial.id}
                className="w-16 h-16 hover:scale-105 grayscale hover:grayscale-0 cursor-pointer"
                src={testimonial.image}
                alt={testimonial.name}
                onClick={() => handleImageClick(testimonial)}
              />
            ))}
          </Slide>
          <FaArrowRightLong
            className="hover:scale-125 text-xl hover:text-orange-500 cursor-pointer"
            onClick={handleNextClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
