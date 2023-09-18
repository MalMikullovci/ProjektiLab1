import React from 'react';
import { ShopContext } from '../context/shop-context';
import { useContext, useEffect, useState } from 'react';
import '../styles/CartItemsStyle.css'
import { BsPlusLg, BsTrash3 } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

function CartItem(props) {
  const cart = useContext(ShopContext);

  const id = props.id;
  const quantity = props.quantity;

  const [products, setProducts] = useState([]);

  // Krijimi i nje funksioni per me i marr te dhenat nga API i produktit
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:6001/api/product/get");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const product = products.find((product) => product.id === id);

  // Rendero gjendjen e ngarkimit ose nje mesazh gabimi
  if (!product) {
    return <div>Loading...</div>;
  }

  const Cmimi = parseFloat(product.Cmimi);
  const totalCost = (quantity * Cmimi).toFixed(2);

  return (
    <>

      {/* Cart card per produkte */}
      <div className="cartItem">
        <div className="cartCard">
          <div className="cartCard_img">
            <img src={`data:image/jpeg;base64,${product.Foto.toString('base64')}`} alt="Item" />
          </div>

          <div className="cartCard_header">
            <h3>{product.Emri}</h3>
            <p>{quantity} Total</p>
            <p>${totalCost}</p>
          </div>

          {/* Butonat per me ndryshu, largu, dhe fshi produkte prej cart */}
          <div className='editButtons'>
            <button id='addButton' onClick={() => cart.addOneToCart(id)} title='Add'>
              <BsPlusLg style={{ color: "black", fontSize: "20px", fontWeight: "600" }} />
            </button>
            <button id='removeButton' onClick={() => cart.removeOneFromCart(id)} title='Remove'>
              <AiOutlineMinus style={{ color: "black", fontSize: "20px", fontWeight: "600" }} />
            </button>
            <button id='deleteButton' onClick={() => cart.deleteFromCart(id)} title='Delete'>
            <BsTrash3 style={{ color: "black", fontSize: "20px", fontWeight: "600" }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
