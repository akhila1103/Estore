import carousel1 from "../assets/carousel1.png";
import carousel2 from "../assets/carousel2.png";
import carousel3 from "../assets/carousel3.png";
import "../styles/CarouselItem.css";

const CarouselsItem = () => {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ margin: "0", padding: "0" }}>
          <div className="carousel-item active">
            <img
              src={carousel3}
              className="d-block w-100"
              alt="..."
              style={{ objectFit: "cover" }}
            />
            <div className="carouselText1 w-50 my-1">
              <p
                style={{ fontFamily: "Yellowtail", color: "#2577FD" }}
                className="fs-p1 mb-0"
              >
                60% discount
              </p>
              <div className="mb-0 p-0">
                <h1
                  style={{
                    fontFamily: "Playfair Display",
                    wordWrap: "inherit",
                  }}
                  className="display-h1"
                >
                  Denim
                </h1>
                <h1
                  style={{
                    fontFamily: "Playfair Display",
                    wordWrap: "inherit",
                  }}
                  className="display-h1"
                >
                  Collection
                </h1>
              </div>
              <p
                style={{
                  fontFamily: "PLayfair Display",
                  fontStyle: "italic",
                  fontWeight: "lighter",
                  color: "#343A3D",
                }}
                className="fs-p2 mb-0 text-wrap"
              >
                Best Cloth Collection by 2023
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={carousel2}
              className="d-block w-100"
              alt="..."
              style={{ objectFit: "cover" }}
            />
            <div className="carouselText2 w-50 my-1">
              <p
                style={{ fontFamily: "Yellowtail", color: "#2577FD" }}
                className="fs-p1 mb-0"
              >
                Flat 50% OFF
              </p>
              <div className="mb-0 p-0">
                <h1
                  style={{
                    fontFamily: "Playfair Display",
                    wordWrap: "inherit",
                  }}
                  className="display-h1"
                >
                  Men's
                </h1>
                <h1
                  style={{
                    fontFamily: "Playfair Display",
                    wordWrap: "inherit",
                  }}
                  className="display-h1"
                >
                  Wear
                </h1>
              </div>
              <p
                style={{
                  fontFamily: "PLayfair Display",
                  fontStyle: "italic",
                  fontWeight: "lighter",
                  color: "#343A3D",
                }}
                className="fs-p2 mb-0 text-wrap"
              >
                Best Cloth Collection by 2023
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={carousel1}
              className="d-block w-100"
              alt="..."
              style={{ objectFit: "cover" }}
            />
            <div className="carouselText1 w-50 my-1">
              <p
                style={{ fontFamily: "Yellowtail", color: "#02A7C5" }}
                className="fs-p1 mb-0"
              >
                30-60% OFF
              </p>
              <div className="mb-0 p-0">
                <h1
                  style={{
                    fontFamily: "Playfair Display",
                    wordWrap: "inherit",
                  }}
                  className="display-h1"
                >
                  Formals
                </h1>
                <h1
                  style={{
                    fontFamily: "Playfair Display",
                    wordWrap: "inherit",
                  }}
                  className="display-h1"
                >
                  Collection
                </h1>
              </div>
              <p
                style={{
                  fontFamily: "PLayfair Display",
                  fontStyle: "italic",
                  fontWeight: "lighter",
                  color: "#343A3D",
                }}
                className="fs-p2 mb-0 text-wrap"
              >
                Best of Formal wear
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselsItem;
