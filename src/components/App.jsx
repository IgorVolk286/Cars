import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'Pages/HomePage';
import { Layout } from './Layout/Layout';
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomePage />}></Route>
          {/* <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route> */}
        </Route>
      </Routes>
    </div>
  );
};
