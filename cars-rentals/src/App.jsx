import './index.scss';
import '@fontsource/montserrat';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Contacts from './components/contacts';
import CarsList from './pages/carsList';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allcars' element={<CarsList />} />
      </Routes>
      <Contacts />
    </>
  );
}

export default App;
