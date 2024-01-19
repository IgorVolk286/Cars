import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'Pages/HomePage/HomePage';
import { CatalogPage } from '../Pages/CatalogPage/CatalogPage';
import { FavoritesPage } from '../Pages/FavoritesPage/FavoritesPage';
import { Layout } from './Layout/Layout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetcherAllCars } from '../redux/operations';
import{Form} from "../components/Form/Form"
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetcherAllCars());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomePage />}></Route>
          <Route path="/catalog" element={<CatalogPage />}></Route>
          <Route path="/favorite" element={<FavoritesPage />}></Route>
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
    
    <Form/>
    
  );
};
