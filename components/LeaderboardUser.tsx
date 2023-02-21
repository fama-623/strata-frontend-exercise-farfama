import Link from "next/link";
import Image from "next/image";

type LeaderboardUserProps = {
  username: string;
  profileImage: string;
  score: number;
  liked: any;
  heart: React.ReactNode;
};

const LeaderboardUser = ({
  username,
  profileImage,
  score,
  liked,
  heart,
}: LeaderboardUserProps) => {
  return (
    <div>
      <Link href={`/profile/${username}`} key={username}>
        <div className="transition ease-in-out max-w-lg w-96 p-8 mb-4 mt-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:-translate-y-2">
          <h2 className="text-center mb-8 text-2xl font-bold tracking-tight text-slate-600">
            {username}
          </h2>
          <Image
            src={profileImage}
            alt={`${username} profile image`}
            className="rounded-full m-auto"
            width={100}
            height={100}
          />
          <div className="flex mt-6 items-center justify-between">
            <p className="">{`Points: ${score}`}</p>
            <p>
              {liked.hasOwnProperty(`liked_${username}`) &&
              liked[`liked_${username}`] == "true"
                ? heart
                : ""}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LeaderboardUser;
