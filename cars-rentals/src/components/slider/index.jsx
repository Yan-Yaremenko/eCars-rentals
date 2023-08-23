import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, Controller } from 'swiper';
import 'swiper/scss';
import 'swiper/css/bundle';

function Slider({ data, controlledSwiper }) {
  return (
    <>
      <Swiper
        className='swiper'
        modules={[Pagination, Autoplay, Controller, Navigation]}
        controller={{ control: controlledSwiper }}
        spaceBetween={1170}
        speed={2000}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay
      >
        {data?.map((cars) => (
          <SwiperSlide className='swiper__swipe'>
            <img src={cars.url} alt='' />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default Slider;
