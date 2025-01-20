import React, {useState, useEffect} from 'react';

const communitySlides = [
  {
    id: 1,
    title: 'Empowering Digital Literacy',
    description:
      "A seminar designed to equip individuals with essential digital skills for today's world.",
    image: './images/community.jpg',
  },
  {
    id: 2,
    title: 'Mindset Mastery Workshop',
    description:
      'An inspiring workshop for Addis Kidan Baptist teenagers, fostering growth and positive thinking.',
    image: './images/community2.jpeg',
  },
  {
    id: 3,
    title: 'Grace Academy YouTube Channel',
    description:
      'Explore our YouTube channel for expertly curated tutorials and resources for our community.',
    image: './images/community3.png',
  },
];

const CommunitySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % communitySlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? communitySlides.length - 1 : prevIndex - 1
    );
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-10">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-indigo-600 mb-6">
        Community Services
      </h2>
      {/* Progress Bar */}
      <div className="absolute top-[-25px] left-0 right-0 h-1 bg-white/10 rounded-full overflow-hidden z-20">
        <div
          className="progress-bar absolute top-0 left-0 h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
          style={{
            width: `${((currentIndex + 1) / communitySlides.length) * 100}%`,
          }}
        ></div>
      </div>

      {/* Carousel Items */}
      <div
        className="carousel-track relative h-[400px] sm:h-[500px] overflow-hidden"
        onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          setTouchEndX(e.changedTouches[0].clientX);
          handleSwipe();
        }}
      >
        {communitySlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item absolute top-0 left-0 w-full h-full transition-transform duration-500 ${
              index === currentIndex
                ? 'opacity-100 z-10'
                : 'opacity-0 z-0 hidden'
            }`}
          >
            <div className="w-full h-full p-4 sm:p-8">
              <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/40 to-purple-500/40 mix-blend-overlay"></div>
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
                    {slide.title}
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="nav-button absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white bg-indigo-500 hover:bg-indigo-700"
        onClick={prevSlide}
        title="Previous slide"
      >
        &#8592;
      </button>
      <button
        className="nav-button absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white bg-indigo-500 hover:bg-indigo-700"
        onClick={nextSlide}
        title="Next slide"
      >
        &#8594;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-20">
        {communitySlides.map((_, index) => (
          <button
            key={index}
            className={`w-8 sm:w-12 h-1 sm:h-1.5 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white/60' : 'bg-white/20'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CommunitySlider;
