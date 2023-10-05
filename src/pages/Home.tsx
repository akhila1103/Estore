import NavBar from "../components/NavBar";
import CarouselsItem from "../components/CarouselItem";
import CategoryList from "../components/CategoryList";
import LatestList from "../components/LatestList";
import man1 from "../assets/card-man.png.webp";
import man2 from "../assets/card-man2.png.webp";
import jeans from "../assets/jeans.png";
import shirt from "../assets/shirt.webp";
import jeans2 from "../assets/jeans2.png";
import hoodie from "../assets/hoodie.webp";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import ServicesItem from "../components/ServicesItem";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <section>
        <CarouselsItem />
        <CategoryList />
        <LatestList />
      </section>
      <div style={{ height: "150px" }} className="d-lg-block d-none"></div>
      <div
        className="container mt-4"
        style={{
          backgroundImage: "url(src/assets/bg-img1.webp)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container position-relative">
          <div className="row justify-content-end align-items-center">
            <div
              className="col-lg-2 d-none d-lg-block mr-3"
              style={{
                position: "absolute",
                left: "5%",
                bottom: "0",
              }}
            >
              <img src={man1} alt="" height="100%" />
            </div>
            <div className="col-lg-8 content">
              <h1
                style={{ fontFamily: "Playfair Display" }}
                className="display-4"
              >
                Find the Best Product
                <br />
                from our Shop
              </h1>
              <p className="h5 pt-2">
                We provide products from world's top brands
              </p>
              <button
                className="mt-4 btn rounded-5 px-4 py-3"
                style={{ backgroundColor: "black" }}
              >
                <Link
                  to="/category"
                  style={{ textDecoration: "none", color: "white" }}
                  className="px-4"
                >
                  Shop Now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "150px" }} className="d-lg-block d-none"></div>
      <div className="container">
        <div className="row">
          <div className=" col-xl-5 col-lg-4 col-md-6 col-12 collection d-block">
            <h1
              style={{ fontFamily: "Playfair Display" }}
              className="display-5"
            >
              Best Collections of this Month
            </h1>
            <p className="h5 pt-2" style={{ textAlign: "left" }}>
              From trendy shirts to casual outfits, we have the best collection
            </p>
            <button className="mt-4 btn bg-primary rounded-5 px-4 py-3">
              <Link
                to="/category"
                style={{ textDecoration: "none", color: "white" }}
                className="px-4"
              >
                Shop Now
              </Link>
            </button>
            <img src={jeans} alt="" className="d-sm-block d-none jeans" />
          </div>
          <div className="col-xl-3 col-lg-4 d-none d-lg-block">
            <img src={man2} alt="" />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-12 products">
            <div className="row container d-flex justify-contents-center align-items-center mb-4">
              <div className="col-xl-9 col-md-8 col-sm-6 col-8" style={{color: "black"}}>
                <p className="fs-5 fw-bold text-right">Men's Trendy T-shirts</p>
              </div>
              <div className="col-xl-3 col-2">
                <img src={shirt} alt="" />
              </div>
            </div>
            <div className="row container d-flex justify-contents-center align-items-center mb-4">
              <div className="col-xl-9 col-md-8 col-sm-6 col-8 bg-primary rounded-3 p-2" style={{color: "white"}}>
                <p className="fs-5 text-right">Men's Casual Jeans</p>
              </div>
              <div className="col-xl-3 col-2">
                <img src={jeans2} alt="" />
              </div>
            </div>
            <div className="row container d-flex justify-contents-center align-items-center mb-4">
              <div className="col-xl-9 col-md-8 col-sm-6 col-8 text-dark" style={{color: ""}}>
                <p className="fs-5 fw-bold text-right">Men's Winter Jacket</p>
              </div>
              <div className="col-xl-3 col-2">
                <img src={hoodie} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-block d-none" style={{height: "150px"}}></div>
      <div className="container mt-4" style={{
          backgroundImage: "url(src/assets/bg-img2.webp)",
          backgroundRepeat: "no-repeat",
        }}>
          <div className="row subscribe d-flex align-items-center">
            <div className="col-md-6 col-12">
            <h1
                style={{ fontFamily: "Playfair Display" }}
                className="display-5"
              >
                Get Our<br/>Latest Offers News
              </h1>
              <p className="h5 pt-2" style={{textAlign: "left"}}>
                Subscribe our News letter
              </p>
            </div>
            <div className="col-md-6 col-12 d-flex">
              <input type="email" className="rounded-5 w-100 subscribe-input" placeholder="Your email here"/>
              <button className="subscribe-button">Subscribe</button>
            </div>
          </div>
      </div>
      <div className="d-block" style={{height: "100px"}}></div>
      <div className="container mt-4">
        <div className="row services mt-4">
          <ServicesItem Icon={<LocalShippingOutlinedIcon style={{fontSize: "2rem"}}/>} title="Fast & Free Delivery" content="Free Delivery on all orders"/>
          <ServicesItem Icon={<CurrencyRupeeOutlinedIcon style={{fontSize: "2rem"}}/>} title="Secure Payment" content="Easy & secure mode of payment"/>
          <ServicesItem Icon={<LockResetOutlinedIcon style={{fontSize: "2rem"}}/>} title="Money Back Guarantee" content="100% Refund on cancellation"/>
          <ServicesItem Icon={<ContactPhoneOutlinedIcon style={{fontSize: "2rem"}}/>} title="Online Support" content="24 hours Online support"/>
        </div>
      </div>
      <div className="d-xl-block d-none" style={{height: "100px"}}></div>
      <Footer/>
    </div>
  );
};

export default Home;
