import Button from '../button';
import Phone from '../icons/phone';

function Header() {
  return (
    <>
      <div className='header'>
        <nav className='header__nav'>
          <h1 className='header__nav-title'>
            Electro
            <br />
            Wheels
            <br /> Rent
          </h1>
          <ul>
            <li>Home</li>
            <li>Garage</li>
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
