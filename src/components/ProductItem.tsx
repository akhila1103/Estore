import { formatCurrency } from "../utilities/formatCurrency";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Link } from "react-router-dom";
import "../styles/ProductList.css";
import { useState } from "react";

interface ProductItem {
    id: number;
    imgUrl: string;
    clothName: string;
    price: number;
    actualPrice: number;
    discount: number;
    rating: string;
    category: string;
    gender: string;
    description: string;
    material: string;
    occasion: string;
    size: string[];
    brand: string
    // [key: string]: any;
  }

  interface Props{
    item: ProductItem;
  }

//   type Productitem = ProductItem;

const ProductListItem
 = (props: Props) => {

    const [isHovered, setHover] = useState<boolean>(false);

    const handleMouseOver = () => {
        setHover(true);
    }

    const handleMouseOut = () => {
        setHover(false);
    }

  return (
    <div
      className="product-item col-lg-4 col-sm-6 col-12 my-3 d-block"
      key={props.item.id}
    >
      <Link to={`/category/${props.item.id}`} className="product-link" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <img className="product-img" src={props.item.imgUrl} alt="" />
      </Link>
      {!isHovered && (<div className="d-flex pt-1 px-1 pb-0 ratings-content">
        <p style={{ fontSize: "1rem" }}>{props.item.rating}</p>
        <StarRateIcon
          className="ml-1"
          style={{ fontSize: "1.25rem", color: "#fa6066" }}
        />
      </div>)}
      <div className="container my-3">
        <h6
          style={{
            fontFamily: "Playfair Display",
            fontWeight: "light",
            letterSpacing: "1px",
          }}
          className="text-wrap"
        >
          {props.item.clothName}
        </h6>
        <div className="my-3 d-flex justify-content-evenly align-items-center price-content">
          {props.item.actualPrice !== 0 && (
            <p
              style={{
                color: "#fc7e83",
                textDecoration: "line-through",
              }}
            >
              {formatCurrency(props.item.actualPrice)}
            </p>
          )}
          <p className="ml-2">{formatCurrency(props.item.price)}</p>
          {props.item.discount != 0 && (
            <p
              style={{
                backgroundColor: "#ffffff",
                backgroundImage:
                  "linear-gradient(345deg, #ffffff 0%, #f47b7b 74%)",
                color: "white",
                fontSize: "0.625rem",
                fontStyle: "italic",
                display: "inline",
                fontWeight: "bold",
              }}
              className="p-1 mt-0 text-left"
            >
              {props.item.discount}% OFF
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
export type  { ProductItem };
;
