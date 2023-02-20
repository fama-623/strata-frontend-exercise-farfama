import { GetServerSideProps } from "next"
import Image from "next/image"
import { FC } from "react"
import {useState, useEffect} from 'react'



const User = ({username,age, email, twitter}: ProfileData) => {

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
      <div className="flex  items-center justify-center h-screen cursor-pointer">
      <div className="max-w-lg w-96 p-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <Image
        src={`/users/${username}.png`}
        alt={`/users/${username}'s profile image`}
        className="rounded-full"
        width={50}
        height={50}
      />
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{username}</h1>
        {/* <p className="font-normal text-gray-700 dark:text-gray-400">Bio: {profileData.bio}</p> */}
        <p>Age: {age}</p>
        <p>Email: {email}</p>
        <p>Twitter: {twitter}</p>
        {/* <p>Birthday: {profileData.birthday}</p> */}
        <button onClick={handleLikeClick}>
        {liked ? 'Unlike' : 'Like'}
      </button>
      </div>
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