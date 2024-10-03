// const BlogList = ({blogs, title, handleDelete}) => {
import {Link} from "react-router-dom";

const BlogList = ({blogs, title, handleDelete}) => {
    // const { blogs } = props;
    // console.log(props)

  return (
      <div className="blog-list">
      <h1>{title}</h1>
          {blogs.map((blog) => (
              <div className="blog-preview" key={blog.id}>
                  <Link to={"/blogs/"+blog.id}>
                  <h2>{blog.title}</h2>
                  <p>written by {blog.author}</p>
                  {/*<button onClick={() => handleDelete(blog.id)}>Delete Blog</button>*/}
                  </Link>
              </div>
          ))}
      </div>
  );
}

export default BlogList;