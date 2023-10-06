import Link from '@mui/material/Link';
// import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import "../styles/PageNavigation.css";

interface Props{
    currentPage: string;
}

const PageNavigation = (props: Props) => {
  return (
    // <div className="d-flex">
    //     <Link to="/">Home</Link>/<Link to="/category">All Categories</Link>/{props.currentPage}
    // </div>
    <div role="presentation" className="bg-light p-4">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/category"
        >
          All Categories
        </Link>
        <p className="current-page">{props.currentPage}</p>
      </Breadcrumbs>
    </div>
  )
}

export default PageNavigation