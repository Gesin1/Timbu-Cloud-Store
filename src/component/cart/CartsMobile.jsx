import "../../component/cart/carts.css";
import sneakers05 from "../../img/sneakers05.png";
import sneakers04 from "../../img/sneakers04.png";
import heart from "../../img/heart.svg";
import archive from "../../img/archive.svg";
import discount from "../../img/discount-shape.svg";
import arrow from "../../img/arrow-down.svg";
import { Link } from "react-router-dom";

const CartsMobile = () => {
  return (
    <>
      <div className="col-mobile">
        {/* <div className="mobile-container"> */}
        <div className="mobile-sum">
          <p>Cart summary </p>
          <img src={arrow} alt="aroow-icon" />
        </div>
        <div className="mobile-total ">
          <p>Total</p>
          <p>$150</p>
        </div>
        {/* </div> */}
      </div>
      <header>
        <div className="mb-container1">
          <p className="mobile-item">Item (2)</p>
          <div className="mb-cart-container">
            <div className="mb-cart-card">
              <img src={sneakers05} alt="mb-shoe" className="mb-shoe" />
              <div className="mb-cart-content">
                <div className="mb-cart-title-price">
                  <p className="mb-cart-name">Earthy Brown</p>
                  <p className="mb-cart-name">$40</p>
                </div>
                <div className="mb-other-content">
                  <div className="mb-head quality">
                    <span>Quantity:</span> <span className="mb-sign"> - </span>
                    <span className="mb-numb"> 2</span>
                    <span className="mb-sign"> + </span>
                  </div>
                  <p className="mb-head">
                    <span>Colour:</span> Brown
                  </p>
                  <p className="mb-head">
                    <span>Size:</span> XXL
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-head md-descrip">
                <span>Description:</span> Luxurious burgundy sneakers, adding
                elegance to any outfit.
              </p>
            </div>
            <div className="mb-cart-link">
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
          <div className="mb-cart-container">
            <div className="mb-cart-card">
              <img src={sneakers04} alt="mb-shoe" className="mb-shoe" />
              <div className="mb-cart-content">
                <div className="mb-cart-title-price">
                  <p className="mb-cart-name">Urban Kicks</p>
                  <p className="mb-cart-name">$60</p>
                </div>
                <div className="mb-other-content">
                  <div className="mb-head quality">
                    <span>Quantity:</span> <span className="mb-sign"> - </span>
                    <span className="mb-numb"> 2</span>
                    <span className="mb-sign"> + </span>
                  </div>
                  <p className="mb-head">
                    <span>Colour:</span> Brown
                  </p>
                  <p className="mb-head">
                    <span>Size:</span> XXL
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-head md-descrip">
                <span>Description:</span> Luxurious burgundy sneakers, adding
                elegance to any outfit.
              </p>
            </div>
            <div className="mb-cart-link">
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
          <div className="md-checkout-container">
            <Link to={"/Checkout"} className="mb-checkout">
              Checkout
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default CartsMobile;
