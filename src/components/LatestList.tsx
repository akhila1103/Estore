import category from "../database/data.json";
import { useState } from "react";
import "../styles/LatestList.css";
import { formatCurrency } from "../utilities/formatCurrency";

const LatestList = () => {
  const [isActive, setActive] = useState(0);

  const categoryData = category;

  const filterNew = () => {
    return categoryData.filter((item) => item.isNew === true);
  };

  const filterFeatured = () => {
    return categoryData.filter((item) => item.isNew === false);
  };

  const [currentArr, setCurrentArr] = useState(categoryData);

  return (
    <div className="container mt-4">
      <div className="row my-sm-4 py-sm-2 pb-sm-3 mb-sm-0 my-0 pb-2">
        <div className="col-xl-4 col-lg-5 col-sm-6 col-12">
          <p
            className="display-5 text-sm-left fw-bolder"
            style={{ fontFamily: "Playfair Display", fontWeight: "bolder" }}
          >
            Latest Products
          </p>
        </div>
        <div className="col-xl-8 col-lg-7 col-sm-6 col-12 d-flex justify-content-sm-end justify-content-center align-items-center latest-nav">
          <button
            className={isActive === 0 ? "activeBtn" : "inactive"}
            onClick={() => {
              setActive(0);
              setCurrentArr(categoryData);
            }}
          >
            All
          </button>
          <button
            className={isActive === 1 ? "activeBtn" : "inactive"}
            onClick={() => {
              setActive(1);
              setCurrentArr(filterNew);
            }}
          >
            New
          </button>
          <button
            className={isActive === 2 ? "activeBtn" : "inactive"}
            onClick={() => {
              setActive(2);
              setCurrentArr(filterFeatured);
            }}
          >
            Featured
          </button>
        </div>
      </div>
      <hr className="mt-0 w-90" />
      <div className="mt-4 pt-4">
        <div className="row my-sm-4 m-0">
          {currentArr.map((item) => {
            return (
              <div
                key={item.id}
                className="col-xl-4 col-md-6 col-12 my-sm-4 mb-3"
              >
                {item.isNew === true && (
                  <p
                    className="rounded-5 px-sm-3 py-sm-2 px-2 py-1"
                    style={{
                      position: "absolute",
                      top: "15px",
                      left: "25px",
                      backgroundColor: "#FF003C",
                      color: "white",
                      fontFamily: "Montserrat",
                    }}
                  >
                    New
                  </p>
                )}
                <img
                  className="w-100 mb-0"
                  height="auto"
                  src={item.imageUrl}
                  alt=""
                />
                <p
                  style={{
                    backgroundColor: "#ffffff",
                    backgroundImage:
                      "linear-gradient(335deg, #ffffff 0%, #f47b7b 74%)",
                    color: "white",
                    fontSize: "1rem",
                    fontStyle: "italic",
                    display: "block",
                    fontWeight: "bold",
                  }}
                  className="p-sm-2 p-1 mt-0 text-left"
                >
                  {item.discount}% OFF
                </p>
                <div className="container text-center mt-3">
                  <h5
                    style={{
                      fontFamily: "Playfair Display",
                      fontWeight: "light",
                      letterSpacing: "1px",
                    }}
                  >
                    {item.productName}
                  </h5>
                  <div className="mt-3 d-flex justify-content-center">
                    <p
                      style={{
                        color: "#f84d52",
                        textDecoration: "line-through",
                      }}
                    >
                      {formatCurrency(item.actualPrice)}
                    </p>
                    <p className="ml-2 h5">{formatCurrency(item.price)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LatestList;
