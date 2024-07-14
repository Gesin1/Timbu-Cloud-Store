import { useCart } from "../CartContext";

import "../../component/cart/carts.css";
import heart from "../../img/heart.svg";
import archive from "../../img/archive.svg";
import discount from "../../img/discount-shape.svg";
import { Link } from "react-router-dom";
import CartsMobile from "./CartsMobile";

const Carts = () => {
  const {
    cart,
    removeFromCart,
    calculateTotal,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  return (
    <>
      <div className="mb-display">
        <CartsMobile />
      </div>
      <section className="sec-col">
        <div className="list-box">
          <p className="cart-col">Cart &gt; </p>
          <p>Shipping details &gt; </p>
          <p>Payment &gt; </p>
        </div>
      </section>
      <main>
        <div className="parent-div">
          <div className="first-child-div">
            <div className="coloum">
              {cart.length === 0 ? (
                <p>No items in cart</p>
              ) : (
                cart.map((item) => (
                  <div className="first-grandchild-div" key={item.id}>
                    <div className="image">
                      <img
                        src={`https://api.timbu.cloud/images/${item.photos[0].url}`}
                        alt={item.name}
                        className="shoe"
                      />
                    </div>
                    <div className="content">
                      <div className="cart-title-price">
                        <p className="cart-name">{item.name}</p>
                        <p className="cart-name">{`NGN ${item.current_price[0].NGN[0]}`}</p>
                      </div>
                      <div className="other-content">
                        <p className="head descrip">
                          <span>Description:</span>
                          {item.description}
                        </p>
                        <div className="head quality">
                          <span>Quantity:</span>{" "}
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="sign"
                          >
                            -
                          </button>
                          <span className="numb"> {item.quantity}</span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="sign"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <p className="head">
                        <span>Colour:</span> {item.color}
                      </p>
                      <p className="head">
                        <span>Size:</span> {item.size}
                      </p>
                      <div className="cart-link">
                        <button>
                          <img src={heart} alt="heart-icon" />
                          <p>Add to favourites</p>
                        </button>
                        <button onClick={() => removeFromCart(item.id)}>
                          <img src={archive} alt="archive" />
                          <p>Remove from cart </p>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="more-product">
              <Link to={"/"} className="add-more-product">
                Add more product
              </Link>
            </div>
          </div>
          <div className="secfirst-child-div">
            <div className="summary">
              <h3>Cart Summary</h3>
              {cart.map((item) => (
                <div className="sum-details" key={item.id}>
                  <p>
                    x{item.quantity} {item.name}
                  </p>
                  <p>{`NGN ${item.current_price[0].NGN[0] * item.quantity}`}</p>
                </div>
              ))}

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
              <p className="sum-total-p">{`NGN ${calculateTotal()}`}</p>
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
        </div>
      </main>
    </>
  );
};

export default Carts;
