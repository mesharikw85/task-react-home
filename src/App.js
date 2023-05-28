import { getByTitle } from "@testing-library/react";
import "./App.css";
// import imge from "./assest/bookstore.jpg";
import img from "./assest/bookestore.jpeg";

function App() {
  return (
    <div className="App">
      <h1>bookstore</h1>
      <p>here an old bookstore</p>
      <img src={img} alt="book-store" />
    </div>
  );
}

export default App;
