import Navbar from "./Navbar";
import Home from "./Home";

function App() {
    const title = "Welcome to the new blog"
    const likes = 50;
    const person = {name: "John", age: 30};
    const myArray = ["John", "John"];
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Home />
      </div>
    </div>
  );
}

// npx json-server --watch data/db.json --port 8084
export default App;
