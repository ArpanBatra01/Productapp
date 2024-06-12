import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import ProductSearch from "./product-detail";

function Cart() {
  const [product, setProduct] = useState("");
  const [cart, setCart] = useState("");
  const [foundProduct,setFoundProduct]=useState("null")

  
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    
    if (storedCart) {
      setCart(JSON.parse(storedCart));
      
    }
 

    const findProductInCart = (cart, productId) => {
      return cart.find(product => product.id === productId);
  };

  }, []);

  return (
    <>
      <div>
        <h2>Cart</h2>
        {foundProduct ? (
                <div>
                    <h2>Product Details</h2>
                    <p>Name: {foundProduct.name}</p>
                    <p>Quantity: {foundProduct.quantity}</p>
                    <p>Price: ${foundProduct.price}</p>
                </div>
            ) : (
                <p>Product not found in cart.</p>
            )}
       
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </>
  );
}

export default Cart;
