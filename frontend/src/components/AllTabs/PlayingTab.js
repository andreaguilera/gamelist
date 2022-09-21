import React, { useState, useEffect } from "react";
import api from "../../services/api";

const PlayingTab = () => {
  const [playingGames, setPlayingGames] = useState([]);

  useEffect(() => {
    const fetchPlayingGames = async () => {
      try {
        const response = await api.get("/game/Playing");
        setPlayingGames(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchPlayingGames();
  }, []);
  return (
    <div className="PlayingTab">
      {playingGames.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </div>
  );
};
export default PlayingTab;
