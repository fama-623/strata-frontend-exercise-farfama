type UserAgeProps = {
  age: number;
  className: React.ComponentProps<"div">["className"];
};

const UserAge = ({ age, className }: UserAgeProps) => {
  return (
    <>
      <p className={className}>Age: {age}</p>
    </>
  );
};

export default UserAge;
