import { FC } from "react"
import { GetStaticProps, GetStaticPaths } from "next"
import Link from "next/link"
import Image from "next/image"



const Leaderboard: FC<LeaderboardData> = ({leaderboard}) => {


  return (<>
    <div className="">
      <h1 className="text-4xl font-bold">Leaderboard</h1>
      {leaderboard.map((item : UserDetails, index: number) => (
      <Link href={`/profile/${item.username}`} key={item.username}>
        <div>
          <Image
            src={item.profileImage}
            alt={`${item.username} profile image`}
            className="rounded-full"
            width={50}
            height={50}
          />
        <p>{`${index + 1}. ${item.username}`}</p>
        <p>{item.score}</p>
        </div>
      </Link>
      ))}
      <p>All leaderboard entries should be links to user profile page.</p>
    </div>
  </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api/leaderboard");
  const data = await response.json();
  const leaderboard = data.leaderboard;
  console.log(leaderboard);

  return {
    props: { leaderboard }
  };
}


export default Leaderboard