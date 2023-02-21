import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useState, useEffect } from "react";
import Heart from "../../components/Heart";
import BackButton from "../../components/BackButton";
import { useRouter } from "next/router";
import UserBio from "../../components/UserBio";
import UserBirthday from "../../components/UserBirthday";
import UserEmail from "../../components/UserEmail";
import UserName from "../../components/UserName";
import UserTwitter from "../../components/UserTwitter";
import UserAge from "../../components/UserAge";

const User: FC = () => {
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

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <div className="transition ease-in-out max-w-lg w-96 p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:-translate-y-2 cursor-pointer">
        <Image
          src={`/users/${userData.username}.png`}
          alt={`/users/${userData.username}'s profile image`}
          className="rounded-full mb-6"
          width={100}
          height={100}
        />
        <UserName
          className="mb-2 text-2xl font-bold tracking-tight text-slate-600 dark:text-white"
          username={userData.username}
        />
        <UserAge className="text-slate-600" age={userData.age} />
        <UserEmail email={userData.email} />
        <UserTwitter className="text-slate-600" twitter={userData.twitter} />
        <UserBirthday birthday={userData.birthday} />
        <div className="flex mt-6 items-center justify-between">
          <button className="text-slate-500	" onClick={handleLikeClick}>
            {liked ? "Unlike" : "Like"}
          </button>
          {liked && <Heart />}
        </div>
      </div>
      <Link href="/leaderboard" className="mt-8 max-w-lg w-96">
        <BackButton />
      </Link>
    </div>
  );
};

export default User;
