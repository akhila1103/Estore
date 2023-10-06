import { useParams } from "react-router-dom";
import productList from "../database/products.json";
import ErrorPage from "./ErrorPage";
import "../styles/ProductDetail.css";
import PageNavigation from "./PageNavigation";
import StarRateIcon from "@mui/icons-material/StarRate";
// import { Navbar } from "react-bootstrap";
import NavBar from "./NavBar";
import { formatCurrency } from "../utilities/formatCurrency";
import { ShoppingBagOutlined } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  // if (!id) {
  //   return <div>No product ID provided</div>;
  // }

  const productId = productList.find((item) => item.id === parseInt(id!));

  if (!productId) {
    return (
      <>
        <NavBar />
        <ErrorPage />
      </>
    );
  }

  const imgPath = window.location.origin + "/";

  const [productSize,setProductSize] = useState<string>("");
  const [isSold, setIsSold] = useState(false);
  const [isFavorite, setFavorite] = useState(false);
  const [oldSize, setOldSize] = useState<string>(productSize);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newValue: string = e.currentTarget.value;
    console.log(e.currentTarget.value);
    setProductSize(newValue);
    // setProductSize((prevVal: string) => {
    //   if(prevVal!==newValue){
    //     setIsSold(false);
    //     // setOldSize(prevVal);
    //   }
    //   return newValue;
    // })
  };

  const handleWishlist = () => {
    setFavorite(true);
  };

  useEffect(() => {
    if(productSize)
    setIsSold(false);
  }, [productSize])

  return (
    <>
      <NavBar />
      <PageNavigation currentPage={productId.clothName} />
      <div className="container-md mt-4 pt-4 main-div">
        <div className="product-details">
          <div className="col-xl-4 col-lg-5 col-sm-6 col-12">
            <img className="prod-img" src={imgPath + productId.imgUrl} alt="" />
            <div></div>
          </div>
          <div className="col-lg-7 col-sm-6 col-12 d-block text-left">
            <h1 className="fw-bold" style={{ fontFamily: "Playfair Display" }}>
              {productId.brand}
            </h1>
            <p className="fs-5 text-left" style={{ color: "grey" }}>
              {productId.clothName}
            </p>
            <span className="d-inline-flex px-1 border border-1 w-auto">
              <p className="mb-0" style={{ fontSize: "1rem" }}>
                {productId.rating}
              </p>
              <StarRateIcon
                className="ml-1"
                style={{ fontSize: "1.25rem", color: "#fa6066" }}
              />
            </span>
            <hr />
            <div className="d-flex justify-content-start align-items-center flex-wrap">
              <p className="fs-5 mr-2 fw-semibold">
                {formatCurrency(productId.price)}
              </p>
              {productId.actualPrice !== 0 && (
                <span
                  className="d-inline-flex fw-light"
                  style={{ color: "grey" }}
                >
                  MRP
                  <p
                    className="mx-2"
                    style={{
                      textDecoration: "line-through",
                    }}
                  >
                    {formatCurrency(productId.actualPrice)}
                  </p>
                </span>
              )}
              {productId.discount != 0 && (
                <p
                  style={{
                    color: "#fa6066",
                    fontWeight: "bold",
                  }}
                  className="mt-0 text-left ml-lg-2"
                >
                  ({productId.discount}% OFF)
                </p>
              )}
            </div>
            <p
              style={{
                color: "#24ACA5",
                fontSize: "0.9rem",
                fontWeight: "600",
                textAlign: "left",
              }}
            >
              inclusive of all taxes
            </p>
            <div>
              <p className="fs-6 fw-bold text-left">SELECT SIZE</p>
              <div className="d-flex justify-content-start align-items-center">
                {productId.size.map((item) => {
                  return (
                    <button
                      className={`mr-md-2 px-md-3 py-md-2 px-2 mr-2 rounded-1 size-btn ${productSize===item && "active"}`}
                      value={item}
                      onClick={handleClick}
                    >
                      <p style={{ marginBottom: "0", fontSize: "0.9rem" }}>
                        {item}
                      </p>
                    </button>
                  );
                })}
              </div>
              <div className="mt-4 d-flex flex-md-nowrap flex-wrap">
                <button className="col-lg-6 col-md-7 col-12  cart-btn" onClick={() => {setIsSold(true);}}>
                  <div className="d-flex justify-content-center align-items-center py-lg-3 py-2 px-lg-4">
                    <ShoppingBagOutlined style={{ fontSize: "1.25rem" }} />
                    <p className="ml-2 mb-0">{isSold ? "GO TO BAG" : "ADD TO BAG"}</p>
                  </div>
                </button>
                <button className={`ml-md-2 col-md-6 col-12 wishlist-btn mt-md-0 mt-2 ${isFavorite && "wishlist-active"}`} onClick={handleWishlist}>
                  <div className="d-flex justify-content-center align-items-center py-lg-3 py-2 px-lg-4">
                    {/* <FavoriteIcon style={{fontSize: "1.25rem", color: "#f1262d"}}/> */}
                    {isFavorite ? ( <FavoriteIcon style={{fontSize: "1.25rem", color: "#f1262d"}}/>) : (<FavoriteBorderIcon
                      style={{ fontSize: "1.25rem", fontWeight: "600" }}
                    />) }
                    <p className="ml-2 mb-0">{isFavorite ? "WISHLISTED" : "WISHLIST" }</p>
                  </div>
                </button>
              </div>
              <hr />
              <div className="d-block">
                <h5 className="fw-semibold">Product Details</h5>
                <p
                  className="text-left fw-lighter"
                  style={{ color: "rgb(71, 64, 64)", fontSize: "0.95rem" }}
                >
                  {productId.description}
                </p>
                <div className="lg-container">
                  <div className="d-flex justify-content-start">
                    <div
                      className="col text-lg-center text-left"
                      style={{ color: "#ff030c", fontWeight: "600" }}
                    >
                      Material
                    </div>
                    <div className="col text-left">{productId.material}</div>
                  </div>
                  <div className="d-flex justify-content-start mt-3">
                    <div
                      className="col text-lg-center"
                      style={{ color: "#ff030c", fontWeight: "600" }}
                    >
                      Occasion
                    </div>
                    <div className="col text-left">{productId.occasion}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-block d-none" style={{height: "100px"}}></div>
      <Footer/>
    </>
  );
};

export default ProductDetail;
