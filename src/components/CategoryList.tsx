import cat1 from "../assets/category1.webp"
import cat2 from "../assets/category2.webp";
import cat3 from "../assets/category3.webp";
import "../styles/CategoryList.css"
import { Link } from "react-router-dom";

const CategoryList = () => {
  return (
    <div className="container-fluid">
        <div className="mt-4">
        <p className="display-5 text-center p-4" style={{ fontFamily: "Playfair Display", fontWeight: "bolder"}}>Shop by Category</p>
        </div>
        <div className="row m-sm-4 p-sm-2">
            <div className="col-xl-4 col-lg-6">
                <Link to="/category" style={{color: "black"}}>
                <img className="w-100 h-auto mb-xl-4 mb-sm-3" src={cat1} alt=""/>
                <div className="text-overlay">
                    <h2 style={{fontFamily:"PLayfair Display", fontWeight:"500"}}>Women'S</h2>
                    <button className="btn rounded-5 btn-warning">Best New Deals</button>
                    <p className="fs-3 fw-bold" style={{fontFamily: "Yellowtail", color: "#0071FE", marginTop: "-12px", textShadow: "0px -3px 0px #ffffff"}}>New Collection</p>
                </div>
                </Link>
            </div>
            <div className="col-xl-4 col-lg-6">
                <Link to="/category" style={{color: "black"}}>
                <img className="w-100 h-auto mb-xl-4 mb-sm-3"  src={cat2} alt=""/>
                <div className="text-overlay">
                    <p className="fs-3 fw-bold text-center" style={{fontFamily: "Yellowtail", color: "#0071FE", marginBottom: "-8px", textShadow: "0px -3px 0px #ffffff"}}>Discount!</p>
                    <h2 style={{fontFamily:"PLayfair Display", fontWeight:"500"}}>Winter Wear</h2>
                    <h6 className="text-center" style={{color: ""}}>New Collection</h6>
                </div>
                </Link>
            </div>
            <div className="col-xl-4 col-lg-6">
                <Link to="/category" style={{color: "black"}}>
                <img className="w-100 h-auto mb-xl-4 mb-sm-3"  src={cat3} alt=""/>
                <div className="text-overlay">
                <h2 style={{fontFamily:"PLayfair Display", fontWeight:"500"}}>Men's Cloth</h2>
                    <button className="btn rounded-5 btn-warning">Best New Deals</button>
                    <p className="fs-3 fw-bold" style={{fontFamily: "Yellowtail", color: "#0071FE", marginTop: "-12px", textShadow: "0px -3px 0px #ffffff"}}>New Collection</p>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CategoryList