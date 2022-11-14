import React, { useState } from "react";
import styles from "./Cart-Item.module.css";

import { connect } from "react-redux";
import {
  adjustQty,
  removeFromCart,
} from "../../../redux/shopping/Shopping-Actions";

const CartItem = ({ item, adjustQty, removeFromCart } ) => {
    const [input, setInput] = useState(item.qty);

    const onChangeHandler = (e) => {
      setInput(e.target.value);
      adjustQty(item.id, e.target.value);
    };

    return (
      <div className={styles.cartItem}>
        <img
          className={styles.cartItem__image}
          src={item.image}
          alt={item.name}
        />
        <div className={styles.cartItem__details}>
          <p className={styles.details__title}>{item.name}</p>
          <p className={styles.details__desc}>{item.description}</p>
          <p className={styles.details__price}>$ {item.price}</p>
        </div>
        <div className={styles.cartItem__actions}>
          <div className={styles.cartItem__qty}>
            <label htmlFor= "qty"> Qty </label>
            <input
              min= "1"
              type= "number"
              id= "qty"
              name= "qty"
              value= {input}
              onChange= {onChangeHandler}
            />
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className={styles.actions__deleteItemBtn}
          >
            X
          </button>
        </div>
      </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
      adjustQty: (id, value) => dispatch(adjustQty(id, value)),
      removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
};

export default connect(null, mapDispatchToProps)(CartItem);