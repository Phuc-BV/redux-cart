import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";

import { connect } from "react-redux";

import CartItem from "./cart_item/Cart-Item";

const Cart = ( {cart} ) => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
      let items = 0;
      let price = 0;

      cart.forEach((item) => {
        items += item.qty;
        price += item.qty * item.price;
      });

      setTotalItems(items);
      setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    return (
      <div className={styles.cart}>
        <div>
          {cart <= 0  && <h3> Giỏ hàng trống !!! </h3>}
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div  className={styles.summary} >
          <h4>Cart Summary</h4>
          <div>
            <span>Số lượng sản phẩm: ({totalItems} sản phẩm)</span>
            <br></br>
            <span>Thành tiền: {totalPrice} $</span>
          </div>
          <button>
            THANH TOÁN
          </button>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    };
  };
  
export default connect(mapStateToProps)(Cart);