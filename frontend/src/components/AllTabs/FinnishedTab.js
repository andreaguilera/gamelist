import React, { useEffect, useState } from "react";
import api from "../../services/api";

const FinnishedTab = () => {
  const [finnishedGames, setFinnishedGames] = useState([]);

  useEffect(() => {
    const fetchFinnishedGames = async () => {
      try {
        const response = await api.get("/game/Finnished");
        setFinnishedGames(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchFinnishedGames();
  }, []);
  return (
    <div className="FinnishedTab">
      {finnishedGames.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </div>
  );
};
export default FinnishedTab;
