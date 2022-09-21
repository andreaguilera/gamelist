import React, { useEffect, useState } from "react";
import api from "../../services/api";

const BacklogTab = () => {
  const [backlogGames, setBacklogGames] = useState([]);

  useEffect(() => {
    const fetchBacklogGames = async () => {
      try {
        const response = await api.get("/game/Backlog");
        setBacklogGames(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchBacklogGames();
  }, []);
  return (
    <div className="BacklogTabTab">
      {backlogGames.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </div>
  );
};
export default BacklogTab;
