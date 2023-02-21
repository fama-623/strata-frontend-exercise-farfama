import { useState, useEffect } from "react";

export default function useLeaderBoard() {
  const [data, setData] = useState([]);
  const [liked, setLiked] = useState<any>({});

  const fetchData = async () => {
    const response = await fetch(`/api/leaderboard`);
    const data = await response.json();
    setData(data.leaderboard);
    console.log(data);
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
