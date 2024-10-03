import {Link, useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
  return (
      <div className="not-found">
          <h2>Sorry</h2>
          <p>That page cannot be found</p>
          <Link to='/'>Go Home</Link>
      </div>
  )
}

export default NotFound;