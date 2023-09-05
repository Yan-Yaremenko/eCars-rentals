import { Link } from 'react-router-dom';
import HandKey from '../icons/handKey';
import PickMap from '../icons/pickMap';
import RoadIcon from '../icons/roadIcon';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
function AboutUs() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className='aboutUs'>
        <div
          data-aos='fade-right'
          data-aos-offset='200'
          data-aos-easing='ease-in-sine'
          data-aos-duration='300'
          className='aboutUs__followUs'
        >
          <img
            className='aboutUs__followUs-image'
            src='./images/aboutUs2.png'
            alt='aboutUs'
          />
          <div className='aboutUs__followUs-text'>
            <h2
              data-aos='fade-right'
              data-aos-offset='200'
              data-aos-easing='ease-in-sine'
              data-aos-duration='400'
            >
              Electro <br />
              Wheels Rent
            </h2>
            <Link className='aboutUs__followUs-link'>follow us &#8594;</Link>
          </div>
        </div>
        <div className='aboutUs__advantages'>
          <div
            data-aos='fade-right'
            data-aos-offset='200'
            data-aos-easing='ease-in-sine'
            data-aos-duration='400'
            className='aboutUs__advantages-text'
          >
            <h3>electric car rental in Kyiv</h3>
            <p className='aboutUs__advantages-slogan'>
              Are you searching for electric car rentals in Kyiv?
            </p>
            <p className='aboutUs__advantages-slogan'>
              Whether you're in need of a luxury car or an exotic vehicle, look
              no further than Electro Wheels Rent.
            </p>
            <p className='aboutUs__advantages-slogan'>
              We are a premier Exotic and Luxury Car Rental agency in Kyiv,
              offering a wide range of electric car rental options.
            </p>
            <p className='aboutUs__advantages-slogan'>
              Whether it's for business or leisure, we've got you covered.
            </p>
            <div className='aboutUs__advantages-icons'>
              <div className='aboutUs__advantages-icon'>
                <RoadIcon />
                <p className='aboutUs__advantages-signature'>
                  Mileage <br />
                  unlimited
                </p>
              </div>
              <div className='aboutUs__advantages-icon'>
                <PickMap />
                <p className='aboutUs__advantages-signature'>
                  Pick up
                  <br /> servise
                </p>
              </div>
              <div className='aboutUs__advantages-icon'>
                <HandKey />
                <p className='aboutUs__advantages-signature'>
                  delivery
                  <br /> to door
                </p>
              </div>
            </div>
          </div>

          <img
            data-aos='fade-left'
            data-aos-offset='200'
            data-aos-easing='ease-in-sine'
            data-aos-duration='400'
            src='./images/aboutUs1.png'
            alt=''
          />
        </div>
      </div>
    </>
  );
}
export default AboutUs;
