function CarCard({ url, name, price, kit }) {
  return (
    <>
      <div className='carCard__wrapper'>
        <img className='carCard__wrapper-image' src={url} alt={name} />
        <h3
          data-aos='fade-up'
          data-aos-offset='100'
          data-aos-easing='ease-out-sine'
          data-aos-duration='700'
          className='carCard__wrapper-model'
        >
          {name}
        </h3>
        <span
          data-aos='fade-up'
          data-aos-offset='100'
          data-aos-duration='700'
          data-aos-easing='ease-in-sine'
          className='carCard__wrapper-kit'
        >
          {kit}
        </span>
        <div
          data-aos='fade-up'
          data-aos-offset='100'
          data-aos-easing='ease-in-sine'
          data-aos-duration='700'
          className='carCard__wrapper-price'
        >
          <p>
            <span>$ {price}</span> / Per Day
          </p>
          <a href='/'>drive now &#8594;</a>
        </div>
      </div>
    </>
  );
}
export default CarCard;
