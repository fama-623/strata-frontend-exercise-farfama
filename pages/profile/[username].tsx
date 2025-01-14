import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import useProfile from "../../hooks/useProfile";
import Heart from "../../components/Heart";
import BackButton from "../../components/BackButton";
import { useState } from "react";
import UserBio from "../../components/UserBio";
import UserBirthday from "../../components/UserBirthday";
import UserEmail from "../../components/UserEmail";
import UserName from "../../components/UserName";
import UserTwitter from "../../components/UserTwitter";
import UserAge from "../../components/UserAge";
import BioModal from "../../components/BioModal";

const User: FC = () => {
  const [showModal, setShowModal] = useState(false);

  let { userData, liked, handleLikeClick } = useProfile();

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <div
        className="transition ease-in-out max-w-lg w-96 p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:-translate-y-2 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
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
      </div>
      <div className="flex mt-6 w-max items-center justify-between">
        <button className="text-slate-500" onClick={handleLikeClick}>
          {liked ? "Unlike" : "Like"}
        </button>
        {liked && (
          <span className="ml-8">
            <Heart />{" "}
          </span>
        )}
      </div>
      <Link href="/leaderboard" className="mt-8 max-w-lg w-96">
        <BackButton />
      </Link>
      {showModal ? (
        <BioModal bio={userData.bio} closeModal={setShowModal} />
      ) : null}
    </div>
  );
};

export default User;
