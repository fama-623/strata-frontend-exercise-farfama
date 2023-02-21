type UserBioProps = {
  bio: string;
};

const UserBio = ({ bio }: UserBioProps) => {
  return (
    <>
      <p className="text-slate-600">Bio: {bio}</p>
    </>
  );
};

export default UserBio;
