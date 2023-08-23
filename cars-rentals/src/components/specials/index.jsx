import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAsync } from '../../redux/actions/getDataAction';
import Button from '../button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/css/bundle';
function Specials() {
  const data = useSelector((state) => state.data.data.specialsSlider);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAsync());
  }, [dispatch]);

  return (
    <>
      <div className='specials'>
        <div className='specials__title'>
          <h2>
            <strong>todays specials</strong>
          </h2>
          <Button className='hero__items-button' buttonText='view all cars' />
        </div>
        <Swiper
          className='swiper'
          modules={[Pagination, Autoplay, Navigation]}
          speed={1000}
          navigation
          slidesPerGroup={3}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay
        >
          <div className='specials__card'>
            {data?.map((cars) => (
              <SwiperSlide>
                <div className='specials__card-wrapper'>
                  <img
                    className='specials__card-image'
                    src={cars.url}
                    alt={cars.name}
                  />
                  <h3 className='specials__card-model'>{cars.name}</h3>
                  <span className='specials__card-kit'>{cars.kit}</span>
                  <div className='specials__card-price'>
                    <p>
                      <span>$ {cars.price}</span> / Per Day
                    </p>
                    <a href='/'>drive now &#8594;</a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
}
export default Specials;
