import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Import 13 images
import gallery1 from '../assets/images/gallery1.jpg';
import gallery2 from '../assets/images/gallery2.jpg';
import gallery3 from '../assets/images/gallery3.jpg';
import gallery4 from '../assets/images/gallery4.jpg';
import gallery5 from '../assets/images/gallery5.jpg';
//import gallery6 from '../assets/images/gallery6.jpg';
import gallery7 from '../assets/images/gallery7.jpg';
import gallery8 from '../assets/images/gallery8.jpg';
//import gallery9 from '../assets/images/gallery9.jpg';
import gallery10 from '../assets/images/gallery10.jpg';
//import gallery11 from '../assets/images/gallery11.jpg';
import gallery12 from '../assets/images/gallery12.jpg';
//import gallery13 from '../assets/images/gallery13.jpg';

const images = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery7, gallery8, gallery10,gallery12
];

function Portfolio() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div section id="portfolio" className="portfolio-section" style={{ position: 'relative', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>A Glimpse of Our Showroom</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </SwiperSlide>
        ))}

        {/* Left Arrow */}
        <div
          ref={prevRef}
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: '#fff',
            padding: '10px',
            zIndex: 10,
            cursor: 'pointer',
            borderRadius: '50%',
            boxShadow: '0 2px 5px rgba(4, 4, 4, 0.2)',
          }}
        >
          ◀
        </div>

        {/* Right Arrow */}
        <div
          ref={nextRef}
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: '#fff',
            padding: '10px',
            zIndex: 10,
            cursor: 'pointer',
            borderRadius: '50%',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          }}
        >
          ▶
        </div>
      </Swiper>
    </div>
  );
}

export default Portfolio;
