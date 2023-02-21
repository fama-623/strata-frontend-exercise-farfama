type UserEmailProps = {
    email: string
}

const UserEmail = ({ email }: UserEmailProps) => {
  
  
    return (
      <>
        <p className="text-slate-600">Email: {email}</p>
      </>
    );
  };

  export default UserEmail;