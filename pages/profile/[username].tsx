import { GetServerSideProps } from "next"
import Image from "next/image"
import { FC } from "react"



const User = (profileData: ProfileData) => {


  return (

      <div className="w-full h-80 flex flex-col items-center justify-center space-y-12">
      <h1>{profileData.username}'s Profile</h1>
      <Image
        src={`/users/${profileData.username}.png`}
        alt={`/users/${profileData.username}'s profile image`}
        className="rounded-full"
        width={50}
        height={50}
      />
        <p>Bio: {profileData.bio}</p>
        <p>Age: {profileData.age}</p>
        <p>Email: {profileData.email}</p>
        <p>Twitter: {profileData.twitter}</p>
        <p>Birthday: {profileData.birthday}</p>
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