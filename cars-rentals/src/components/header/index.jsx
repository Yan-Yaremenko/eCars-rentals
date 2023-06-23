function Header() {
  return (
    <>
      <div className='header'>
        <h1 className='header__title'>
          Electro
          <br />
          Wheels
          <br /> Rent
        </h1>
        <nav className='header__nav'>
          <ul>
            <li>Home</li>
            <li>Garage</li>
            <li>About us</li>
            <li>FAQ</li>
            <li>Contacts</li>
          </ul>
        </nav>
        <button className='header__button'>Call us now</button>
      </div>
    </>
  );
}

export default Header;
