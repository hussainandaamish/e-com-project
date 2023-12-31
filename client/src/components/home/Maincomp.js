import React, { useEffect } from "react";
import Banner from "./Banner";
import "./home.css";
import Slide from "./Slide.js";
import { getProducts } from "../redux/actions/action.js";
import { useDispatch, useSelector } from "react-redux";

const Maincomp = () => {
  const { products } = useSelector((state) => state.getProductsdata);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="home_section">
      <div className="banner_part">
        <Banner />
      </div>
      <div className="slide_part">
        <div className="left_slide">
          <Slide title="Deal Of The Day" products={products} />
        </div>
        <div className="right_slide">
          <h4>Festive Latest Launches</h4>
          <img src="weblogo.jpg" />
          <a href="#">See More</a>
        </div>
      </div>
      <Slide title="Today's Deal" products={products} />
      <div className="center_img">
        <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" />
      </div>
      <Slide title="Best Seller" products={products} />
      <Slide title="Upto 80% OFF" products={products} />
    </div>
  );
};

export default Maincomp;
