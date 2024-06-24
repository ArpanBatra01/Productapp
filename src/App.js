import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/user-login";



import ProductDetail from "./pages/product-detail";
import FavouriteProductPage from "./pages/favourite-product-page";
import Home from "./pages/home";


import Cart from "./pages/Cart";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />

          <Route path="login" element={<Login />} />
     

          <Route path="product-detail" element={<ProductDetail />} />
          <Route path="product-detail/:id" element={<ProductDetail />} />
          <Route
            path="favourite-product-page"
            element={<FavouriteProductPage />}
          />
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Login />} />

          
          
          <Route path="cart" element={<Cart />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
