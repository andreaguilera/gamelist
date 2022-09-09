import "./App.css";
import logo from "./assets/logo-p.png";
import Tabs from "./components/TabComponent/Tabs";

function App() {
  return (
    <div className="App">
      <img src={logo} className="logo" />
      <Tabs />
    </div>
  );
}

export default App;
