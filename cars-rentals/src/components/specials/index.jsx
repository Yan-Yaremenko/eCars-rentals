import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAsync } from '../../redux/actions/getDataAction';
import Button from '../button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/css/bundle';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import CarCard from '../carCard';

function Specials() {
  const data = useSelector((state) => state.data.data.specialsSlider);
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    dispatch(getDataAsync());
  }, [dispatch]);

  return (
    <>
      <div className='specials'>
        <div className='specials__title'>
          <h2
            data-aos='fade-right'
            data-aos-offset='200'
            data-aos-easing='ease-in-sine'
            data-aos-duration='500'
          >
            <strong>todays specials</strong>
          </h2>
          <Link to='/allcars'>
            <Button buttonText='view all cars' />
          </Link>
        </div>
        <Swiper
          data-aos='fade-right'
          data-aos-offset='200'
          data-aos-easing='ease-in-sine'
          className='swiper'
          modules={[Pagination, Autoplay, Navigation]}
          speed={1700}
          navigation
          slidesPerGroup={3}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay
        >
          <div className='specials__card'>
            {data?.map((cars) => (
              <SwiperSlide>
                <CarCard {...cars} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
}
export default Specials;
