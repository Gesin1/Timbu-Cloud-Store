import product from "../../product.json";
import "../products/products.css";
import shoppingCart from "../../img/shopping-cart.svg";
import loveIcon from "../../img/love-icon.svg";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="container">
      {product.map((products) => (
        <div className="card" key={products.id}>
          <div className="card-image">
            <img src={products.image} alt="sneakers" className="sneakers" />
            <img src={loveIcon} alt="love-icon" className="love-icon" />
            <div>
              <div className="title-price">
                <p className="title">{products.title}</p>
                <p className="price">{products.price}</p>
              </div>
              <p className="discrip">{products.description}</p>
            </div>
          </div>

          <Link to={"/cart"} className="button">
            <span className="cart-text">Add to cart</span>
            <img src={shoppingCart} alt="shopping-cart" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Product;
