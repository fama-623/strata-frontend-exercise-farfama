import { GetServerSideProps } from "next"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import {useState, useEffect} from 'react'
import Heart from "../../components/heart"
import BackButton from "../../components/BackButton"



const User = ({username, age, email, twitter}: ProfileData) => {

  const [liked, setLiked] = useState(false);
  // Read the liked status from local storage when the component mounts
  useEffect(() => {
    const likedStatus = localStorage.getItem(`liked_${username}`);
    if (likedStatus) {
      setLiked(JSON.parse(likedStatus));
    }
  }, [username]);

  const handleLikeClick = () => {
    const newLikedStatus = !liked;
    localStorage.setItem(`liked_${username}`, JSON.stringify(newLikedStatus));
    setLiked(newLikedStatus);
    console.log(newLikedStatus);
  };

  return (
      <div className="flex items-center justify-center h-screen flex-col">
      <div className="max-w-lg w-96 p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <Image
        src={`/users/${username}.png`}
        alt={`/users/${username}'s profile image`}
        className="rounded-full mb-6"
        width={100}
        height={100}
      />
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-slate-600	 dark:text-white">{username}</h1>
        {/* <p className="font-normal text-gray-700 dark:text-gray-400">Bio: {profileData.bio}</p> */}
        <p className="text-slate-600	">Age: {age}</p>
        <p className="text-slate-600	">Email: {email}</p>
        <p className="text-slate-600	">Twitter: {twitter}</p>
        {/* <p>Birthday: {profileData.birthday}</p> */}
        <div className="flex mt-6 items-center justify-between">
          <button className="text-slate-500	" onClick={handleLikeClick}>
          {liked ? 'Unlike' : 'Like'}
          </button>
          {liked && <Heart/>}
        </div>
      </div>
      <Link href="/leaderboard" className="mt-8 max-w-lg w-96">
        <BackButton/>
      </Link>
      </div>
    )
}



export const getServerSideProps: GetServerSideProps = async ({params}: any) => {
  const {username} = params;
  const info = await fetch(`http://localhost:3000/api/profile/${username}`)
    .then(response => response.json() )

  return{
      props: {
            username: username,
            bio: info.bio,
            age: info.age,
            twitter: info.twitter,
            email: info.email,
            birthday: info.birthday
      }
  }
}

export default User