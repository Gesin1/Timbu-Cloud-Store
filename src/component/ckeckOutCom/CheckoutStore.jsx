import "../ckeckOutCom/checkout.css";

const CheckoutStore = () => {
  return (
    <>
      <div className="main">
        <div className="check-cart-col1">
          <p>Cart &gt; </p>
          <p className="check-ship">Shipping details &gt; </p>
          <p>Payment &gt; </p>
        </div>
      </div>
      <div className="check-container">
        <div className="customer-info-col">
          <p>customer Information</p>
          <form>
            <div className="checkout-detalis">
              <div className="input-box">
                <label htmlFor="" className="text">
                  First name
                </label>
                <input type="text" className="input-text" placeholder="john" />
              </div>
              <div className="input-box">
                <label htmlFor="" className="text">
                  Last name
                </label>
                <input type="text" className="input-text" placeholder="john" />
              </div>
              <div className="input-box">
                <label htmlFor="" className="text">
                  Phone number
                </label>
                <input
                  type="number"
                  id="number"
                  className="input-text"
                  placeholder="+234 987 654 3210"
                />
              </div>
              <div className="input-box">
                <label htmlFor="" className="text">
                  Email address
                </label>
                <input
                  type="email"
                  className="input-text"
                  placeholder="johndoe@example.com"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="customer-info-col">
          <p>Shipping Address:</p>
          <form>
            <div className="checkout-detalis">
              <div className="input-box">
                <label htmlFor="" className="text">
                  Street address
                </label>
                <input
                  type="text"
                  className="input-text"
                  placeholder="456 Elm Street, Apartment 789"
                />
              </div>
              <div className="input-box">
                <label htmlFor="" className="text">
                  Town
                </label>
                <input type="text" className="input-text" placeholder="Lagos" />
              </div>
              <div className="input-box">
                <label htmlFor="" className="text">
                  Country
                </label>
                <input
                  type="number"
                  id="number"
                  className="input-text"
                  placeholder="Nigeria"
                />
              </div>
              <div className="input-box">
                <label htmlFor="" className="text">
                  State
                </label>
                <input
                  type="email"
                  className="input-text"
                  placeholder="Lagos"
                />
              </div>
              <div className="input-box">
                <label htmlFor="" className="text">
                  Postal code
                </label>
                <input
                  type="12345"
                  className="input-text"
                  placeholder="Lagos"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="check2">
          <div className="summary">
            <h3>Order Summary</h3>
            <div className="sum-details">
              <p>Items total cost</p>
              <p>$150</p>
            </div>
            <div className="sum-details">
              <p>Delivery fees</p>
              <p>$40</p>
            </div>
            <div className="sum-details">
              <p>Value added tax(VAT)</p>
              <p>$20</p>
            </div>
            <div className="sum-details">
              <p>Discount</p>
              <p>$10</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="sum-total sum-line">
            <p>Total </p>
            <p>$250</p>
          </div>
          <div className="checkout-container">
            <button className="butt-ckeckout">Proceed to payment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutStore;
