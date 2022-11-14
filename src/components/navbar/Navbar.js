import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { connect } from "react-redux";


const Navbar = ({cart}) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.text__link}>
        <h2 className={styles.navbar__logo}>Devmaster Shopping</h2>
      </Link>
      <Link to="/cart" className={styles.text__link}>
        <div className={styles.navbar__cart}>
          <img
            className={styles.cart__image}
            src="https://img.icons8.com/ios-filled/512/shopping-mall.png"
            alt="shopping cart"
          />
          <div className={styles.cart__counter}>{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);