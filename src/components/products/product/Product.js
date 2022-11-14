import React from "react";
import styles from "./Product.module.css";

import { connect } from "react-redux";
import { addToCart } from "../../../redux/shopping/Shopping-Actions";

const Product = ({ product, addToCart }) => {
    return (
      <div className={styles.product}>
        <img
          className={styles.product__image}
          src={product.image}
          alt={product.name}
        />
        <div className={styles.product__details}>
          <p className={styles.details__title}>{product.name}</p>
          <p className={styles.details__desc}>{product.description}</p>
          <p className={styles.details__price}>$ {product.price}</p>
        </div>
        <div className={styles.product__buttons}>
          <button
            onClick={() => addToCart(product.id)}
            className={`${styles.buttons__btn} ${styles.buttons__add}`}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
}
 
//hàm này có thể return 1 object hoặc là 1 function
const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
    };
  };

export default connect(null, mapDispatchToProps)(Product);