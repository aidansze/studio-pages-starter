import React from 'react';

export interface CarouselAllstateProps {
  slides: {
    image?: string;
    title?: string;
    description?: string;
  }[];
}

export const initialProps: CarouselAllstateProps = {
  slides: [
    {
      image: "https://example.com/slide1.jpg",
      title: "Slide 1",
      description: "This is the first slide",
    },
    {
      image: "https://example.com/slide2.jpg",
      title: "Slide 2",
      description: "This is the second slide",
    },
    {
      image: "https://example.com/slide3.jpg",
      title: "Slide 3",
      description: "This is the third slide",
    },
  ],
};

const CarouselAllstate = ({ slides }: CarouselAllstateProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex: number) => {
      if (prevIndex === 0) {
        return slides.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const handleNext = () => {
    setActiveIndex((prevIndex: number) => {
      if (prevIndex === slides.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  return (
    <div className="flex justify-center items-center bg-gray-900 py-12">
      <div className="max-w-lg w-full mx-auto">
        <div className="relative">
          <div className="carousel">
            <div
              className={`carousel-item ${
                activeIndex === 0 ? 'active' : ''
              }`}
            >
              <img
                src={slides[0].image}
                alt={slides[0].title}
                className="w-full h-auto"
              />
              <div className="carousel-content">
                <h3 className="text-white text-3xl font-extrabold mb-2">
                  {slides[0].title}
                </h3>
                <p className="text-white text-xl font-semibold">
                  {slides[0].description}
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-navigation">
            <button
              className="carousel-navigation-prev"
              onClick={handlePrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 py-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="carousel-navigation-next"
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 py-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselAllstate;
