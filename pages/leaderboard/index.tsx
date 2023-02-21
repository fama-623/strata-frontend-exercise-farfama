import { FC } from "react";
import Heart from "../../components/Heart";
import LeaderboardUser from "../../components/LeaderboardUser";
import useLeaderBoard from "../../hooks/useLeaderboard";

const Leaderboard: FC = () => {
  let { data, liked } = useLeaderBoard();

  return (
    <>
      <div>
        <div className="flex  items-center justify-center flex-col color-gradient">
          <h1 className="text-4xl font-bold m-12">Leaderboard</h1>
          {data.map((user: UserDetails, index: number) => (
            <LeaderboardUser
                username={user.username}
                profileImage={user.profileImage}
                score={user.score}
                liked={liked}
                heart={<Heart/>}
              />
          ))}
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
