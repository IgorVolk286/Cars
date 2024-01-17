import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'Pages/HomePage/HomePage';
import { CatalogPage } from '../Pages/CatalogPage/CatalogPage';
import { Layout } from './Layout/Layout';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomePage />}></Route>
          <Route path="/catalog" element={<CatalogPage />}></Route>
          {/* <Route path="/favorite" element={<Favorite />}></Route> */}
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
