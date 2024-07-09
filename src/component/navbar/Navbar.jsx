import "../navbar/nav.css";
import logo from "../../img/logo.png";
import searchIcon from "../../img/search-icon.svg";
import profile from "../../img/profile-icon.svg";
import carts from "../../img/cart-order.svg";
import menu from "../../img/menu.svg";
import serach from "../../img/search-normal.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav-container">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="logo" />
        </Link>

        <div className="serach-box">
          <div className="text-box">
            <p className="para">serach for clothes, bags,shoes,accessories</p>
          </div>
          <div className="serach-box-icon">
            <img src={searchIcon} alt="search-icon" />
            <p>Search</p>
          </div>
        </div>
        <div className="menu-box">
          <img src={serach} alt="serack-icon" />
          <img src={carts} alt="carts" />
          <img src={menu} alt="menu-bar" />
        </div>
        <div className="details-box">
          <div className="profile">
            <img src={profile} alt="profile-icon" className="profile-icon" />
            <div className="profile-details">
              <p className="paragra">Hello</p>
              <p className="paragra1">Oshoke</p>
            </div>
          </div>
          <div className="cart-box">
            <img src={carts} alt="cart-icon" className="cart-icon" />
            <p>cart</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
