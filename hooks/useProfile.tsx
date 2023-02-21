import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function useProfile(){

        const router = useRouter();
        const { username } = router.query;
        const [userData, setUserData] = useState<any>([]);
      
        const [liked, setLiked] = useState(false);
        useEffect(() => {
          const likedStatus = localStorage.getItem(`liked_${username}`);
          if (likedStatus) {
            setLiked(JSON.parse(likedStatus));
          }
        }, [username]);
      
        const fetchData = async () => {
          const response = await fetch(`/api/profile/${username}`);
          const data = await response.json();
          setUserData(data);
        };
      
        useEffect(() => {
          fetchData();
        }, []);
      
        const handleLikeClick = () => {
          const newLikedStatus = !liked;
          localStorage.setItem(`liked_${username}`, JSON.stringify(newLikedStatus));
          setLiked(newLikedStatus);
          console.log(newLikedStatus);
        };

        return {
            router,
            username,
            userData,
            fetchData,
            liked,
            setLiked,
            setUserData,
            handleLikeClick

          };
}