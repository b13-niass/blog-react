import {useParams} from "react-router-dom";
import useFetch from "./useFetch";
import {useNavigate} from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {data: blog, isPending, error} = useFetch(`http://localhost:8084/blogs/${id}`);
    const handleDelete = (id) => {
         fetch(`http://localhost:8084/blogs/${id}`, {
                method: "DELETE",
            }).then(() => navigate('/'));
    }
  return (
      <div className="blog-details">
          {/*<h1>Blog Details </h1>*/}
          {isPending && <div> Loading .... </div>}
          {error && <div>{error}</div>}
          {blog && (
              <article>
                  <h2>{blog.title}</h2>
                  <p>Written by {blog.author}</p>
                  <div>{blog.body}</div>
                  <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                  {/*<Link to={`/edit/${blog.id}`}>Edit Blog</Link>*/}
                  <button onClick={() => navigate('/')}>Go Home</button>
              </article>
          )}

      </div>
  );
}

export default BlogDetails;