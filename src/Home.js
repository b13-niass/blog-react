import {useState, useEffect} from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    // let name = "Home";
  //   const [name, setName] = useState("Dieng");
  //   const [age, setAge] = useState(20);
  //   const handleClick = (e) => {
  //       console.log(e)
  //       setName(prevState => (prevState === "Dieng" ? "Niass" : "Dieng"));
  //       setAge(prevState => prevState + 1);
  //   }
  // return (
  //     <div className="home">
  //       <h2>Homepage</h2>
  //         <p>Hello, {name}! you are {age} year old</p>
  //         <button onClick={handleClick}>Change Name</button>
  //     </div>
  // );

    // const handleDelete = (id) => {
    //     console.log(`Deleting blog with id: ${id}`);
    //     setBlogs(blogs.filter(blog => blog.id!== id));
    // }

    const [name, setName] = useState("mario")

    const {data: blogs, isPending, error} = useFetch("http://localhost:8084/blogs");
    return (
      <div className="home">
          {error && <div>{error}</div>}
          {isPending && <div> Loading .... </div>}
          { blogs && <BlogList blogs={blogs} title="All Blogs !" />}
          {/*{ blogs && <BlogList blogs={blogs} title="All Blogs !" handleDelete={handleDelete}/>}*/}

          {/*<BlogList blogs={blogs.filter(blog => blog.author==="mario")} title="Marios Blogs !" handleDelete={handleDelete}/>*/}
          {/*  <button onClick={() => setName(prevState => (prevState === "Dieng" ? "Niass" : "Dieng"))}>Change name</button>*/}
          {/*  <p>{name}</p>*/}
      </div>
    );
}

export default Home;
