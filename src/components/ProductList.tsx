import productlist from "../database/products.json";
import "../styles/ProductList.css";
import { ChangeEvent, useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import ProductListItem from "./ProductItem";
import { ProductItem } from "./ProductItem";
import { formatCurrency } from "../utilities/formatCurrency";
// import StarRateIcon from "@mui/icons-material/StarRate";
// import { Link } from "react-router-dom";
import "../styles/ProductList.css";
import notFound from "../assets/notFound.png";
import Rating from '@mui/material/Rating';

interface CheckboxState {
  [key: string]: boolean;
}

const len = productlist.length;

const filtersCheckbox = {
  "Dresses": false,
  "Ethnic Wear": false,
  "Formals": false,
  "Jeans": false,
  "Joggers": false,
  "Shirts": false,
  "T-Shirts": false,
  "Tops": false,
  "Trousers": false,
};

const ProductList = () => {
  const [checkBoxes, setCheckBoxes] = useState<CheckboxState>(filtersCheckbox);

  const [selectedFilters, setSelectedFilters] = useState<string[][]>([]);
  const [itemsList, setItemsList] = useState<ProductItem[]>(productlist);

  const [priceVal, setPriceVal] = useState<number[]>([0, 3000]);

  const [discountVal, setDiscountVal] = useState<number>(0);

  const [ratingVal, setRatingVal] = useState<number | null>(5);

  const categoryFilters = [
    "Dresses",
    "Ethnic Wear",
    "Formals",
    "Jeans",
    "Joggers",
    "Shirts",
    "T-Shirts",
    "Tops",
    "Trousers",
  ];

  const discountFilters = [20, 30, 40, 50, 60, 70, 80];

  const handlePriceChange = (e: Event, newValue: number | number[]) => {
    setPriceVal(newValue as number[]);
  };

  const handleDiscountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDiscountVal(parseInt(value));
  };

  // useEffect(() => {
  //   filterPriceItems();
  // }, priceVal)

  // const filterPriceItems = () => {
  //   const newProducts: ProductItem[] = itemsList.filter((item) => {
  //     if(item["price"]>=priceVal[0]&&item["price"]<=priceVal[1]){
  //       return item;
  //     }
  //   })
  //   setItemsList(newProducts);
  // if(selectedFilters.length>0&&newProducts.length>0){
  //   setItemsList((prevVal: ProductItem[]) => {
  //     return [...prevVal,...(newProducts as ProductItem[])];
  //   })
  // }
  // else{
  //   setItemsList(newProducts);
  // }
  // }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name, checked } = e.target;

    setCheckBoxes({
      ...checkBoxes,
      [value]: checked,
    });

    if (checked) {
      setSelectedFilters((prevValue: string[][]) => {
        let newArr = [name, value];
        return [...prevValue, newArr];
      });
    } else {
      setSelectedFilters((prevValue: string[][]) => {
        let newArr = prevValue.filter((item) => item[1] != value);
        return newArr;
      });
    }
  };

  useEffect(() => {
    console.log(discountVal);
    filterItems();
  }, [...selectedFilters, ...priceVal, discountVal, ratingVal]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((item: string[]) => {
        let ind: keyof ProductItem = item[0] as keyof ProductItem;
        let tempArr = productlist.filter((product) => {
          return (
            product[ind] === item[1] &&
            product["price"] >= priceVal[0] &&
            product["price"] <= priceVal[1] &&
            product["discount"] >= discountVal &&
            parseFloat(product["rating"]) <= ratingVal!
          );
        });
        return tempArr;
      });
      setItemsList(tempItems.flat());
    } else {
      let tempArr = productlist.filter((product) => {
        return (
          product["price"] >= priceVal[0] &&
          product["price"] <= priceVal[1] &&
          product["discount"] >= discountVal &&
          parseFloat(product["rating"]) <= ratingVal!
        );
      });
      setItemsList(tempArr);
    }
  };

  const handleClick = () => {
    setSelectedFilters([]);
    const resetCheckboxes = Object.fromEntries(
      Object.keys(checkBoxes).map((key) => [key, false])
    );
    setCheckBoxes(resetCheckboxes);
    setPriceVal([0, 3000]);
    setDiscountVal(0);
    setRatingVal(5);
    // setItemsList([]);
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: "url(src/assets/heading_bg.png)",
          backgroundRepeat: "no-repeat",
          height: "280px",
          backgroundSize: "cover",
          backgroundPosition: "50% 0%",
        }}
      >
        <h1
          className="display-4 text-center"
          style={{
            fontFamily: "Playfair Display",
            fontWeight: "bolder",
            padding: "100px 50px",
            color: "black",
          }}
        >
          Product List
        </h1>
      </div>
      <div className="mt-4 list-content">
        <div className="row flex-wrap">
          <div className="col-lg-3 col-md-4 col-12 mt-4 px-lg-0 px-4">
            <div className="px-0 filter-section">
              <div className="d-flex justify-content-between align-items-center px-lg-4 px-md-2 px-4">
                <p className="filter-heading">Filters</p>
                {itemsList.length != len && (
                  <button className="p-0" onClick={handleClick}>
                    <p className="" style={{ color: "#ff030c" }}>
                      CLEAR ALL
                    </p>
                  </button>
                )}
              </div>
              <hr className="mt-0" />
              <div className="d-block px-4">
                <p className="text-left filter-heading">Category</p>
                {categoryFilters.map((item, index) => {
                  return (
                    <div>
                      <input
                        key={index}
                        type="checkbox"
                        name="category"
                        value={item}
                        checked={checkBoxes[item]}
                        onChange={handleChange}
                      />
                      <label className="ml-2">{item}</label>
                    </div>
                  );
                })}
              </div>
              <hr className="mt-2" />
              <div className="d-block px-4">
                <p className="text-left filter-heading">Price</p>
                <Slider
                  value={priceVal}
                  onChange={handlePriceChange}
                  valueLabelDisplay="auto"
                  step={10}
                  min={0}
                  max={3000}
                  disableSwap
                  style={{ color: "#FF030C" }}
                />
                <p className="mt-1 text-center price-range">
                  {formatCurrency(priceVal[0])} - {formatCurrency(priceVal[1])}
                </p>
              </div>
              <hr className="mt-2" />
              <div className="d-block px-4">
                <p className="text-left fw-semibold filter-heading">
                  Discount Range
                </p>
                {discountFilters.map((item, index) => {
                  return (
                    <div>
                      <input
                        key={index}
                        type="radio"
                        name="discount"
                        value={item}
                        onChange={handleDiscountChange}
                        checked={discountVal == item}
                      />
                      <label className="ml-2">{item}% and above</label>
                    </div>
                  );
                })}
              </div>
              <hr className="mt-2" />
              <div className="d-block px-4">
                <p className="text-left fw-semibold filter-heading">Ratings</p>
                <Rating
                  name="simple-controlled"
                  value={ratingVal}
                  onChange={(event,newValue) => {setRatingVal(newValue);}}
                  style={{color: "#ff030c"}}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-12 text-center">
            {itemsList.length === 0 ? (
              <div className="text-center d-block no-results" style={{}}>
                <img src={notFound} alt="" />
                <p className="m-2 mt-0">Oops! No results found</p>
              </div>
            ) : (
              <div className="mt-2 d-flex flex-wrap">
                {itemsList.map((item) => {
                  return (
                    <ProductListItem item={item} />
                    // <div
                    //   className="product-item col-lg-4 col-sm-6 col-12 my-3 d-block"
                    //   key={item.id}
                    // >
                    //   <Link to="/">
                    //     <img className="product-img" src={item.imgUrl} alt="" />
                    //   </Link>
                    //   <div className="d-flex p-1 ratings-content">
                    //     <p style={{ fontSize: "1rem" }}>{item.rating}</p>
                    //     <StarRateIcon
                    //       className="ml-1"
                    //       style={{ fontSize: "1.25rem", color: "#fa6066" }}
                    //     />
                    //   </div>
                    //   <div className="container my-3">
                    //     <h6
                    //       style={{
                    //         fontFamily: "Playfair Display",
                    //         fontWeight: "light",
                    //         letterSpacing: "1px",
                    //       }}
                    //       className="text-wrap"
                    //     >
                    //       {item.clothName}
                    //     </h6>
                    //     <div className="my-3 d-flex justify-content-evenly align-items-center price-content">
                    //       {item.actualPrice !== 0 && (
                    //         <p
                    //           style={{
                    //             color: "#fc7e83",
                    //             textDecoration: "line-through",
                    //           }}
                    //         >
                    //           {formatCurrency(item.actualPrice)}
                    //         </p>
                    //       )}
                    //       <p className="ml-2">{formatCurrency(item.price)}</p>
                    //       {item.discount != "" && (
                    //         <p
                    //           style={{
                    //             backgroundColor: "#ffffff",
                    //             backgroundImage:
                    //               "linear-gradient(345deg, #ffffff 0%, #f47b7b 74%)",
                    //             color: "white",
                    //             fontSize: "0.625rem",
                    //             fontStyle: "italic",
                    //             display: "inline",
                    //             fontWeight: "bold",
                    //           }}
                    //           className="p-1 mt-0 text-left"
                    //         >
                    //           {item.discount}% OFF
                    //         </p>
                    //       )}
                    //     </div>
                    //   </div>
                    // </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
