import "../body/body.css";
import sortIcon from "../../img/sort-icon.svg";
import Product from "../products/Product";
import sort from "../../img/sort-color.svg";
import option from "../../img/option-icon.svg";

const Body = () => {
  return (
    <>
      <section>
        <div className="filter-container">
          <div className="mobile-container">
            <div className="mobile">
              <img src={sort} alt="filter-icon" />
              <p>Filter</p>
            </div>
            <img src={option} alt="Option-icon" />
          </div>
          <div className="list-box">
            <p>Clothing &gt; </p>
            <p>Shoes &gt; </p>
            <p>Sneakers &gt; </p>
          </div>
          <div className="filter-box">
            <img src={sortIcon} alt="sort-icon" />
            <p>
              filter by: <span>Low to high</span>
            </p>
          </div>
        </div>
        <Product />
      </section>
    </>
  );
};

export default Body;
