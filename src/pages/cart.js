import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import ProductSearch from "./product-detail";

function Cart() {
  const [product, setProduct] = useState("");
  const [cart, setCart] = useState("");

  
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <>
      <div>
        <h2>Cart</h2>
       
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </>
  );
}

export default Cart;
