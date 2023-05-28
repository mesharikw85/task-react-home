import "./App.css";

// import img from "./assest/bookestore.jpeg";
import birdstore from "./birdstore";
import birdstore1 from "./assest/birdimg/bird store.png";

function App() {
  // return (
  //   <div className="App">
  //     <h1>bookstore</h1>
  //     <p>here an old bookstore</p>
  //     <img src={img} alt="book-store" />
  //   </div>
  // );
  return (
    <div className="App">
      <h1>bird-store1</h1>
      <p>welcome to lovly bird</p>
      <img src={birdstore1} alt="picstore" />
      <h1>{birdstore[0].name}</h1>
      <h1>{birdstore[0].price}</h1>
      <img src={birdstore[0].pic} alt="bird" />

      <div>
        <h1>{birdstore[1].name}</h1>
        <h1>{birdstore[1].price}</h1>
        <img src={birdstore[1].image} />
      </div>
    </div>
  );
}

export default App;
