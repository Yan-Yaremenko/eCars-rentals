import { Link } from 'react-router-dom';
import Button from '../button';
import Phone from '../icons/phone';

function Header() {
  return (
    <>
      <div className='header'>
        <nav className='header__nav'>
          <Link className='header__nav-title' to='/'>
            <h1>
              Electro
              <br />
              Wheels
              <br /> Rent
            </h1>
          </Link>
          <ul>
            <Link to='/allcars'>
              <li>Garage</li>
            </Link>
            <li>About us</li>
            <li>FAQ</li>
            <li>Contacts</li>
          </ul>
        </nav>
        <Button
          className='header__button'
          buttonText='Call us now'
          svg={<Phone />}
        />
      </div>
    </>
  );
}

export default Header;
