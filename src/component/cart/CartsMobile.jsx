import { useCart } from "../CartContext";
import "../../component/cart/carts.css";
import heart from "../../img/heart.svg";
import archive from "../../img/archive.svg";
import arrow from "../../img/arrow-down.svg";
import { Link } from "react-router-dom";

const CartsMobile = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  return (
    <>
      <div className="col-mobile">
        <div className="mb-container">
          <div className="mobile-sum">
            <p>Cart summary </p>
            <img src={arrow} alt="aroow-icon" />
          </div>
          <div className="mobile-total ">
            <p>Total</p>
            <p>$150</p>
          </div>
        </div>
      </div>
      <header>
        <div className="mobile-display">
          {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            cart.map((item) => (
              <div className="mb-cart-container" key={item.id}>
                <div className="mb-cart-card">
                  <img
                    src={`https://api.timbu.cloud/images/${item.photos[0].url}`}
                    alt="mb-shoe"
                    className="mb-shoe"
                  />
                  <div className="mb-cart-content">
                    <div className="mb-cart-title-price">
                      <p className="mb-cart-name">{item.name}</p>
                      <p className="mb-cart-name">{`NGN ${item.current_price[0].NGN[0]}`}</p>
                    </div>
                    <div className="mb-other-content">
                      <div className="mb-head quality">
                        <span>Quantity:</span>{" "}
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="mb-sign"
                        >
                          -
                        </button>
                        <span className="mb-numb"> {item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="mb-sign"
                        >
                          +
                        </button>
                      </div>
                      <p className="mb-head">
                        <span>Colour:</span> {item.color}
                      </p>
                      <p className="mb-head">
                        <span>Size:</span>
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="mb-head md-descrip">
                    <span>Description:</span> {item.description}
                  </p>
                </div>
                <div className="mb-cart-link">
                  <button>
                    <img src={heart} alt="heart-icon" />
                    <p>Add to favourites</p>
                  </button>
                  <button onClick={() => removeFromCart(item.id)}>
                    <img src={archive} alt="archive" />
                    <p>Remove from cart</p>
                  </button>
                </div>
              </div>
            ))
          )}

          <div className="md-checkout-container">
            <Link to={"/"} className="mb-checkout">
              Add more product
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default CartsMobile;
