import {useParams} from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, isPending, error} = useFetch("http://localhost:8084/blogs/"+id);
  return (
      <div className="blog-details">
          <h1>Blog Details </h1>
          {error && <div>{error}</div>}
          {isPending && <div> Loading .... </div>}
          {blog && <p>{blog.title}</p>}

      </div>
  );
}

export default BlogDetails;