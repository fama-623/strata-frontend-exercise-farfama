import { useState, useEffect } from "react";

export default function useLeaderBoard() {
  const [data, setData] = useState([]);
  const [liked, setLiked] = useState<any>({});

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/leaderboard`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data.leaderboard);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //fetch leaderboard on run
  useEffect(() => {
    fetchData();
  }, []);

  //fetch new leaderboard every 20 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchData();
    }, 20000);
    return () => clearInterval(intervalId);
  }, [data]);

  useEffect(() => {
    const items = { ...localStorage };
    setLiked(items);
  }, []);

  return {
    data,
    setData,
    fetchData,
    liked,
    setLiked,
  };
}
