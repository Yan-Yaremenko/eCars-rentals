import Facebook from '../icons/facebook';
import FacebookMessenger from '../icons/facebookMessenger';
import Instagram from '../icons/instagram';
import Whatsapp from '../icons/whatsapp';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
function Contacts() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className='contacts'>
        <div className='contacts__info'>
          <h2
            data-aos='fade-right'
            data-aos-offset='200'
            data-aos-easing='ease-in-sine'
            data-aos-duration='300'
            className='header__nav-title contacts__info-logo'
          >
            Electro
            <br />
            Wheels
            <br /> Rent
          </h2>
          <div
            data-aos='fade-right'
            data-aos-offset='200'
            data-aos-easing='ease-in-sine'
            data-aos-duration='300'
            className='contacts__info-contact'
          >
            <p>Kyiv | Ukraine</p>
            <a href='tel:+380 93-506-9276'>+38 222-333-4444</a>
            <a href='mailto:info@electrowheelsrent.com'>
              info@electrowheelsrent.com
            </a>
            <div className='contacts__info-icons'>
              <Facebook />
              <FacebookMessenger />
              <Instagram />
              <Whatsapp />
            </div>
          </div>
        </div>
        <div
          data-aos='fade-left'
          data-aos-offset='200'
          data-aos-easing='ease-in-sine'
          data-aos-duration='300'
          className='contacts__form'
        >
          <div className='contacts__form-column'>
            <input
              className='contacts__form-input'
              type='text'
              placeholder='Name'
            />
            <input
              className='contacts__form-input'
              type='email'
              placeholder='Email'
            />
            <input
              className='contacts__form-input'
              type='text'
              placeholder='Phone'
            />
          </div>
          <div className='contacts__form-column'>
            <input
              className='contacts__form-input'
              type='text'
              placeholder='Message'
            />
            <button>SEND</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contacts;
