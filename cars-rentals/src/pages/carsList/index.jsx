import { Link } from 'react-router-dom';
import Button from '../../components/button';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAsync } from '../../redux/actions/getDataAction';
import CarCard from '../../components/carCard';
function CarsList() {
  const data = useSelector((state) => state.data.data.specialsSlider);
  const dispatch = useDispatch();
  console.log(data);
  useEffect(() => {
    dispatch(getDataAsync());
  }, [dispatch]);

  return (
    <>
      <div className='carsList'>
        <div className='carsList__promo'>
          <h2 className='carsList__promo-title'>our fleet</h2>
          <p className='carsList__promo-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            facere exercitationem, accusantium quaerat amet hic mollitia ratione
            voluptates earum aliquid, ab veniam iusto nostrum perspiciatis eius
            enim, id tempore similique velit dolorum illum? Id culpa inventore
            rem! Mollitia, asperiores voluptates? Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className='carsList__filters'>
        <Link to='/'>
          <Button
            buttonText='back to home'
            className='carsList__filters-button'
          />
        </Link>
        <h6 className='carsList__filters-price'>
          sort by: <span>price</span>
        </h6>
      </div>
      <div className='carsList__wrapper'>
        {data?.map((cars) => (
          <CarCard {...cars} />
        ))}
      </div>
    </>
  );
}
export default CarsList;
