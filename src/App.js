import Navbar from "./Navbar";
import Home from "./Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";

function App() {
    // const title = "Welcome to the new blog"
    // const likes = 50;
    // const person = {name: "John", age: 30};
    // const myArray = ["John", "John"];
  return (
      <Router>
          <div className="App">
              <Navbar/>
              <div className="content">
                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="/create" element={<Create/>} />
                       <Route path="/blogs/:id" element={<BlogDetails/>} />
                  </Routes>
              </div>
          </div>
      </Router>
  );
}

// npx json-server --watch data/db.json --port 8084
export default App;
