import footer1 from "../assets/footer1.png";
import footer2 from "../assets/footer2.png";
import footer3 from "../assets/footer3.png";
import footer4 from "../assets/footer4.png";
import footer5 from "../assets/footer5.png";
import footer6 from "../assets/top5.png";
import logo from "../assets/logo.png.webp";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const 
 Footer = () => {
  return (
    <div className="mt-4">
        <div className="d-xl-block d-none">
            <div className="mx-1 row">
                <div className="col-2">
                    <img src={footer1} alt="" style={{objectFit:"cover",objectPosition: "25% 25%",width:"300px", height: "347px"}}/>
                </div>
                <div className="col-2">
                    <img src={footer2} alt=""/>
                </div>
                <div className="col-2">
                    <img src={footer3} alt=""/>
                </div>
                <div className="col-2">
                    <img src={footer4} alt=""/>
                </div>
                <div className="col-2">
                    <img src={footer5} alt="" style={{objectFit:"cover",objectPosition: "30% 30%",width:"320px", height: "347px"}}/>
                </div>
                <div className="col-2">
                    <img src={footer6} alt="" style={{objectFit:"cover", objectPosition:"25% 25%", width: "200px", height: "347px"}}/>
                </div>
            </div>
        </div>
        <div className="d-block" style={{height: "100px"}}></div>
        <div className="mt-xl-4 footer-content">
            <div className="row">
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="container text-left">
                        <img src={logo} alt="" className="w-auto" />
                        <p className="header-content text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                    <div className="container d-flex flex-column footer-links">
                        <p className="headers text-left">Quick Links</p>
                        <Link to="/" style={{marginTop: "10px"}}>About</Link>
                        <Link to="/">Offers & Discounts</Link>
                        <Link to="/">Get Coupon</Link>
                        <Link to="/">Contact Us</Link>
                    </div>
                    
                </div>
                <div className="col-lg-3 col-sm-6 col-12 mt-lg-0 mt-3">
                    <div className="container d-flex flex-column footer-links">
                        <p className="headers text-left">New Products</p>
                        <Link to="/" style={{marginTop: "10px"}}>Woman Cloth</Link>
                        <Link to="/">Fashion Accessories</Link>
                        <Link to="/">Men Accessories</Link>
                        <Link to="/">Rubber made toys</Link>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12 mt-lg-0 mt-3">
                    <div className="container d-flex flex-column footer-links">
                        <p className="headers text-left">Support</p>
                        <Link to="/" style={{marginTop: "10px"}}>Frequently Asked questions</Link>
                        <Link to="/">Terms & Conditions</Link>
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Report a payment issue</Link>
                    </div>
                </div>
            </div>
            <div className="d-sm-flex justify-content-sm-between mt-4 pt-4">
                <p style={{fontSize: "1rem", color: "grey"}}>Copyright ©2023 All rights reserved</p>
                <div className="d-flex social-links">
                    <Link to="/">
                        <TwitterIcon style={{fontSize: "20px"}}/>
                    </Link>
                    <Link to="/">
                    <FacebookIcon className="sicons" style={{fontSize: "20px"}}/>
                    </Link>
                    <Link to="/">
                    <InstagramIcon className="sicons" style={{fontSize: "20px"}}/>
                    </Link>
                    <Link to="/">
                    <YouTubeIcon className="sicons" style={{fontSize: "20px"}}/>
                    </Link>
                </div>
            </div>
        </div>
  </div>
  )
}

export default Footer;

