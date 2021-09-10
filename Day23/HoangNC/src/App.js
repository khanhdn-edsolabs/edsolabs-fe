import "./App.css";
import ShowCurrent from "./components/Weather";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <ShowCurrent></ShowCurrent>
      <Footer></Footer>
    </div>
  );
}

export default App;
