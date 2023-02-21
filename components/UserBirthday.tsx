type UserBirthdayProps = {
  birthday: string;
};

const UserBirthday = ({ birthday }: UserBirthdayProps) => {
  return (
    <>
      <p className="text-slate-600">Birthday: {birthday}</p>
    </>
  );
};

export default UserBirthday;
