import "../../component/cart/carts.css";
import sneakers05 from "../../img/sneakers05.png";
import sneakers04 from "../../img/sneakers04.png";
import heart from "../../img/heart.svg";
import archive from "../../img/archive.svg";
import discount from "../../img/discount-shape.svg";
import { Link } from "react-router-dom";
import CartsMobile from "./CartsMobile";

const Carts = () => {
  return (
    <div className="col">
      <div className="mobile-display">
        <CartsMobile />
      </div>
      <section className="sec-col">
        <div className="list-box">
          <p className="cart-col">Cart &gt; </p>
          <p>Shipping details &gt; </p>
          <p>Payment &gt; </p>
        </div>
      </section>
      <header>
        <div className="container1">
          <div className="cart-container">
            <div className="cart-card">
              <img src={sneakers05} alt="shoe" className="shoe" />
              <div className="cart-content">
                <div className="cart-title-price">
                  <p className="cart-name">Earthy Brown</p>
                  <p className="cart-name">$40</p>
                </div>
                <div className="other-content">
                  <p className="head descrip">
                    <span>Description:</span> Luxurious burgundy sneakers,
                    adding elegance to any outfit.
                  </p>
                  <div className="head quality">
                    <span>Quantity:</span> <span className="sign"> - </span>
                    <span className="numb"> 2</span>
                    <span className="sign"> + </span>
                  </div>
                  <p className="head">
                    <span>Colour:</span> Brown
                  </p>
                  <p className="head">
                    <span>Size:</span> XXL
                  </p>
                </div>
                <div className="cart-link">
                  <button>
                    <img src={heart} alt="heart-icon" />
                    <p>Add to favourites</p>
                  </button>
                  <button>
                    <img src={archive} alt="archive" />
                    <p>Add to favourites</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-container">
            <div className="cart-card">
              <img src={sneakers04} alt="shoe" className="shoe" />
              <div className="cart-content">
                <div className="cart-title-price">
                  <p className="cart-name">Urban Kicks</p>
                  <p className="cart-name">$60</p>
                </div>
                <div className="other-content">
                  <p className="head descrip">
                    <span>Description:</span> Luxurious burgundy sneakers,
                    adding elegance to any outfit.
                  </p>
                  <div className="head quality">
                    <span>Quantity:</span> <span className="sign"> - </span>
                    <span className="numb"> 2</span>
                    <span className="sign"> + </span>
                  </div>
                  <p className="head">
                    <span>Colour:</span> Brown
                  </p>
                  <p className="head">
                    <span>Size:</span> XXL
                  </p>
                </div>
                <div className="cart-link">
                  <button>
                    <img src={heart} alt="heart-icon" />
                    <p>Add to favourites</p>
                  </button>
                  <button>
                    <img src={archive} alt="archive" />
                    <p>Add to favourites</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="summary">
            <h3>Cart Summary</h3>
            <div className="sum-details">
              <p>x2 Classic Retro</p>
              <p>$40</p>
            </div>
            <div className="sum-details">
              <p>x1 Sage green</p>
              <p>$40</p>
            </div>
            <div className="sum-details">
              <p>x2 Classic Retro</p>
              <p>$40</p>
            </div>
            <div className="sum-details">
              <p>x1 Sage green</p>
              <p>$40</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="sum-line sum-details">
            <p>Discount</p>
            <p>$10</p>
          </div>
          <div className="line"></div>
          <div className="sum-total sum-line">
            <p className="sum-total-p">Total </p>
            <p className="sum-total-p">$150</p>
          </div>
          <div className="checkout-container">
            <button className="button-ckeckout">
              <img src={discount} alt="discount-icon" />
              <p>Add discount code here</p>
            </button>
            <Link to={"/Checkout"} className="checkout">
              Checkout
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Carts;
