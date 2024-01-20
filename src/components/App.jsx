import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'Pages/HomePage/HomePage';
import { CatalogPage } from '../Pages/CatalogPage/CatalogPage';
import { FavoritesPage } from '../Pages/FavoritesPage/FavoritesPage';
import { Layout } from './Layout/Layout';
import { NotFound } from '../components/NotFound/NotFound';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomePage />}></Route>
          <Route path="/catalog" element={<CatalogPage />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};
