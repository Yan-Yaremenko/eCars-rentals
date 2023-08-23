import Slider from '../slider';
import Facebook from '../icons/facebook';
import FacebookMessenger from '../icons/facebookMessenger';
import Instagram from '../icons/instagram';
import Whatsapp from '../icons/whatsapp';
import Mail from '../icons/mail';
import Button from '../button';

import { getDataAsync } from '../../redux/actions/getDataAction';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Controller, Navigation } from 'swiper';

import 'swiper/scss';
import 'swiper/css/bundle';
function Hero() {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  const data = useSelector((state) => state.data.data.heroSlider);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAsync());
  }, [dispatch]);

  return (
    <>
      <div className='hero'>
        <div className='hero__items'>
          <div className='hero__items-icons'>
            <Facebook />
            <FacebookMessenger />
            <Instagram />
            <Whatsapp />
            <Mail />
          </div>
          <div className='hero__items-info'>
            <Swiper
              className='swiper__vertical'
              modules={[Navigation, Pagination, Autoplay, Controller]}
              onSwiper={setControlledSwiper}
              speed={2000}
              spaceBetween={50}
              slidesPerView={1}
              direction={'vertical'}
            >
              {data?.map((cars) => (
                <>
                  <SwiperSlide className='swiper__vertical-items'>
                    <p className='swiper__vertical-slogan'>{cars.slogan}</p>
                    <p className='swiper__vertical-name'>{cars.name}</p>
                    <p className='swiper__vertical-price'>
                      <span>${cars.price}</span> / Per Day
                    </p>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
            <Button className='hero__items-button' buttonText='Drive now' />
          </div>
        </div>
        <Slider controlledSwiper={controlledSwiper} data={data} />
      </div>
    </>
  );
}
export default Hero;
