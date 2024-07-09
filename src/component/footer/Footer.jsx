import "../footer/footer.css";
import sms from "../../img/sms.svg";
import logo from "../../img/logo.png";
import instagram from "../../img/Instergram-icon.svg";
import twitter from "../../img/twitter-icon.svg";
import facebook from "../../img/facebook-icon.svg";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="contact">
          <p className="text">
            Get latest deals and newsletters directly to your inbox
          </p>
          <div className="email-container">
            <div className="email">
              <img src={sms} alt="email-icon" />
              <p className="name">johndoe@example.com</p>
            </div>
            <p className="sub">Subscribe</p>
          </div>
        </div>
        <div className="foot-continer">
          <div className="timbu">
            <img src={logo} alt="logo" />
            <p>
              Timbu Cloud Shop offers a curated selection of high-quality
              products at unbeatable prices. Find everything you need in one
              place. Shop now!
            </p>
            <div className="social-media">
              <img src={instagram} alt="instagram" />
              <img src={twitter} alt="twitter" />
              <img src={facebook} alt="facebook" />
            </div>
          </div>
          <div className="contact-us">
            <p className="header">Contact us</p>
            <p className="para">Phone: +234 123 456 7890</p>
            <p className="para">Email: timbushop@example.com</p>
          </div>
          <div className="help">
            <p className="header">Help</p>
            <p className="para">FAQs</p>
            <p className="para">Delivery & returns</p>
            <p className="para">Track your order</p>
            <p className="para">Bulk purchases</p>
          </div>
          <div className="More">
            <p className="header">More services</p>
            <p className="para">Gift cards</p>
            <p className="para">Coupons</p>
            <p className="para">Discount</p>
          </div>
        </div>
        <div className="copy">
          <p className="para-copy">
            © 2024 Timbu Cloud Shop. All rights reserved.
          </p>
          <p className="para-copy">Terms of Use</p>
          <p className="para-copy">Privacy</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
