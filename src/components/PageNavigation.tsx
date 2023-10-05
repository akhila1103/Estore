import { Link } from 'react-router-dom'

interface Props{
    currentPage: string;
}

const PageNavigation = (props: Props) => {
  return (
    <div className="d-flex">
        <Link to="/">Home</Link>/<Link to="/category">Category</Link>/{props.currentPage}
    </div>
  )
}

export default PageNavigation