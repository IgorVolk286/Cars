import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'Pages/HomePage/HomePage';
import { CatalogPage } from '../Pages/CatalogPage/CatalogPage';
import { FavoritesPage } from '../Pages/FavoritesPage/FavoritesPage';
import { Layout } from './Layout/Layout';
// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetcherAllCars } from '../redux/operations';

export const App = () => {
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
  );
};
