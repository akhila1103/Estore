import "../styles/ErrorPage.css"
import errorPage from "../assets/error-page.svg"
import {Link} from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page p-2">
        <div className="img-content p-lg-4">
            <img src={errorPage} alt=""/>
        </div>
        <div className="d-block msg-content p-lg-4 p-2">
            <p className="header fw-semibold">Oops,<br/><span style={{color: "#f73940"}}>nothing</span> here....</p>
            <p className="text-wrap">Uh oh, we can't seem to find the page you're looking for. Try going back to previous page or Contact us for more information</p>
            <Link to="/" className="home-link">
                <button className="home-button rounded-2">Plz Go Back</button>
            </Link>
        </div>
    </div>
  )
}

export default ErrorPage