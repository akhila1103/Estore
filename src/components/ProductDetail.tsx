import { useParams } from "react-router-dom"
import productList from "../database/products.json"
import ErrorPage from "./ErrorPage";
import "../styles/ProductDetail.css"
import PageNavigation from "./PageNavigation";
import { ProductItem } from "./ProductItem";

const ProductDetail = () => {

  const { id } = useParams<{id:string}>();

  // if (!id) {
  //   return <div>No product ID provided</div>;
  // }

  const productId = productList.find((item) => item.id === parseInt(id!));

  if(!productId){
    return (<ErrorPage/>);
  }

  const imgPath = window.location.origin + "/" + productId.imgUrl;
  console.log(imgPath);

  return (
    <div className="container" style={{paddingTop: "100px"}}>
      <PageNavigation currentPage={productId.clothName}/>
        <div className="row product-details">
            <div className="col-md-5 col-sm-6 col-12">
                <img className="prod-img" src={imgPath} alt=""/>
                <p>{productId.clothName}</p>
            </div>
            <div className="col-md-7 col-sm-6 col-12 d-block">

            </div>
        </div>
    </div>
  );
}

export default ProductDetail;