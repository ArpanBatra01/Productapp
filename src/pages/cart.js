import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import ProductSearch from "./product-detail";

function Cart() {
  const [product, setProduct] = useState("");
  const [cart, setCart] = useState([]);

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
        <ul>
          <li><a href="/Home">Home</a></li>
          <li><a href="/Product-detail">Product-detail</a></li>
        </ul>
        <h2>Cart</h2>
        <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            {item.image}
            
          </li>
        ))}
      </ul>

        
        <button onClick={clearCart}>clearCart</button>
        
      </div>
    </>
  );
}

export default Cart;
