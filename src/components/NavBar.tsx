import "../styles/NavBar.css";
import logo from "../assets/logo.png.webp";
import { Link } from "react-router-dom";
import { ShoppingBagOutlined } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useLocation } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import { ListGroupItem } from "react-bootstrap";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleShow = () => {
    setShowNav(true);
  };
  const handleClose = () => {
    setShowNav(false);
  };

  const pathName = useLocation().pathname;

  return (
    <header style={{position: "fixed", zIndex: "1"}} className="navbar shadow p-3">
      {/* <div className="navbar shadow p-3"> */}
        <div className="menu">
          <button className="btn" onClick={handleShow}>
            <MenuIcon />
          </button>
        </div>
        <Offcanvas show={showNav} onHide={handleClose} className="offcanvas">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img src={logo} alt="" className="w-auto" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="px-0">
            <button
              className="btn btn-danger w-50 mx-2"
              style={{ fontFamily: "Montserrat", fontSize: "20px" }}
            >
              Sign in
            </button>
            <ListGroup className="mt-3 mx-0 menulinks" variant="flush">
              <ListGroupItem>
                <Link
                  to="/"
                  style={
                    pathName === "/"
                      ? { color: "#FF030C", fontWeight: "bold" }
                      : {}
                  }
                >
                  Home
                </Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link
                  to="/category"
                  style={
                    pathName === "/category"
                      ? { color: "#FF030C", fontWeight: "bold" }
                      : {}
                  }
                >
                  Category
                </Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link
                  to="/latest"
                  style={
                    pathName === "/latest"
                      ? { color: "#FF030C", fontWeight: "bold" }
                      : {}
                  }
                >
                  Latest
                </Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link
                  to="/blog"
                  style={
                    pathName === "/blog"
                      ? { color: "#FF030C", fontWeight: "bold" }
                      : {}
                  }
                >
                  Blog
                </Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link
                  to="/contact"
                  style={
                    pathName === "/contact"
                      ? { color: "#FF030C", fontWeight: "bold" }
                      : {}
                  }
                >
                  Contact
                </Link>
              </ListGroupItem>
            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>
        <img src={logo} alt="" className="w-auto" />
        <div className="navLinks">
          <Link className={pathName === "/" ? "activeLink" : ""} to="/">
            Home
          </Link>
          <Link
            className={pathName === "/category" ? "activeLink" : ""}
            to="/category"
          >
            Category
          </Link>
          <Link
            className={pathName === "/latest" ? "activeLink" : ""}
            to="/latest"
          >
            Latest
          </Link>
          <Link className={pathName === "/blog" ? "activeLink" : ""} to="/blog">
            Blog
          </Link>
          <Link
            className={pathName === "/contact" ? "activelink" : ""}
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="navbuttons">
          <button
            className="mx-2 btn rounded-circle"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid rgb(236, 236, 236)",
              height: "50px",
              width: "50px",
            }}
          >
            <ShoppingBagOutlined
              style={{ fontSize: "20px", position: "relative" }}
            />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                top: 0,
                bottom: 0,
                transform: "translate(70%, 90%)",
              }}
            >
              3
            </div>
          </button>
          <button
            className="mx-2 btn btn-primary rounded-pill px-3 signin"
            style={{ fontFamily: "Montserrat", fontSize: "20px" }}
          >
            Sign in
          </button>
        </div>
      {/* </div> */}
    </header>
  );
};

export default NavBar;
