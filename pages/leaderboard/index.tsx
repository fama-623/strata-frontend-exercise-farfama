import { FC } from "react"
import { useEffect, useState } from "react"
import { GetStaticProps, GetStaticPaths } from "next"
import Heart from "../../components/heart"
import Link from "next/link"
import Image from "next/image"



const Leaderboard: FC<LeaderboardData> = ({leaderboard}) => {

  const [liked, setLiked] = useState<any>({});
  useEffect(() => {
    const items = { ...localStorage };
    setLiked(items)
  }, []);

  console.log(liked);



  return (<>
    <div className="">
      <div className="flex  items-center justify-center flex-col">
      <h1 className="text-4xl font-bold m-12">Leaderboard</h1>
      {leaderboard.map((user : UserDetails, index: number) => (
        <Link className="" href={`/profile/${user.username}`} key={user.username}>
        <div className="max-w-lg w-96 p-8 mb-4 mt-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h2 className="text-center mb-8 text-2xl font-bold tracking-tight text-slate-600">{user.username}</h2>
          <Image
            src={user.profileImage}
            alt={`${user.username} profile image`}
            className="rounded-full m-auto"
            width={100}
            height={100}
            
          />
        <div className="flex mt-6 items-center justify-between">
          <p className="">{`Points: ${user.score}`}</p>
          <p>{ (liked.hasOwnProperty(`liked_${user.username}`) && liked[`liked_${user.username}`]=="true") ? <Heart/> : ""}</p>
        </div>
        </div>
        </Link>
      ))}</div>
    </div>
  </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/leaderboard");
  const data = await response.json();
  const leaderboard = data.leaderboard;
  // console.log(leaderboard);

  return {
    props: { leaderboard }
  };
}


export default Leaderboard