import React, { useEffect, useState } from "react";

import { useCart } from "../CartContext";
import "../products/products.css";
import shoppingCart from "../../img/shopping-cart.svg";
import loveIcon from "../../img/love-icon.svg";
import { Link } from "react-router-dom";

const Product = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [indexPage, setIndexPage] = useState(10);

  const apiKey = process.env.REACT_APP_API_KEY;
  const appID = process.env.REACT_APP_APP_ID;
  const orgID = process.env.REACT_APP_ORG_ID;
  const url_base = `/api/products?organization_id=${orgID}&Appid=${appID}&Apikey=${apiKey}`;

  const fetchProducts = async () => {
    try {
      const res = await fetch(url_base);
      const data = await res.json();
      const { items } = data;
      console.log(data);
      setProducts(items || []);
    } catch (error) {
      console.error("Fetch problem", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const loadMoreProducts = () => {
    setIndexPage((preIndexPage) => indexPage + 10);
  };

  return (
    <>
      <div className="container">
        {products.slice(0, indexPage).map((product) => (
          <div className="card" key={product.id}>
            <div className="card-image">
              <img
                src={
                  product.photos && product.photos.length > 0
                    ? `https://api.timbu.cloud/images/${product.photos[0].url}`
                    : "Fail to load"
                }
                alt={product.name}
                className="sneakers"
              />
              <img src={loveIcon} alt="love-icon" className="love-icon" />
              <div>
                <div className="title-price">
                  <p className="title">{product.name}</p>
                  <p className="price">
                    {product.current_price && product.current_price.length > 0
                      ? `NGN ${product.current_price[0].NGN[0]}`
                      : "Price not available"}
                  </p>
                </div>
                <p className="discrip">{product.description}</p>
              </div>
            </div>
            <Link
              to={"/cart"}
              className="button"
              onClick={() => addToCart(product)}
            >
              <span className="cart-text">Add to cart</span>
              <img src={shoppingCart} alt="shopping-cart" />
            </Link>
          </div>
        ))}
      </div>
      <div className="next-page-button">
        {indexPage < products.length ? (
          <button onClick={loadMoreProducts}>Load More</button>
        ) : (
          <button>No More Product</button>
        )}
      </div>
    </>
  );
};

export default Product;
