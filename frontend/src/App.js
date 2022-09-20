import { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/logo-p.png";
import Tabs from "./components/TabComponent/Tabs";
import api from "./services/api";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const response = await api.get("/game");
        setGames(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    loadGames();
  }, []);
  return (
    <div className="App">
      <img src={logo} className="logo" />
      <Tabs />
    </div>
  );
}

export default App;
