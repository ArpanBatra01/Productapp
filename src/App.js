import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './pages/user-login';
import Register from './pages/user-registration';
import FavouriteProductCount from './pages/favourite-product-count';

import UserProfile from './pages/user-profile';
import ProductDetail from './pages/product-detail';
import FavouriteProductPage from './pages/favourite-product-page';
import AddCart from './pages/add-cart';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="favourite-product-count" element={<FavouriteProductCount />} />
          
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="product-detail" element={<ProductDetail/>}/>
          <Route path="favourite-product-page" element={<FavouriteProductPage/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="add-cart" element={<AddCart/>}/>
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
