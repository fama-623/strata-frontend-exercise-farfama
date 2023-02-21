type UserNameProps = {
    username: string
    className : React.ComponentProps<'div'>['className']
}

const UserName = ({ username, className }: UserNameProps) => {
  
  
    return (
      <>
        <h1 className={className}>{username}</h1>
      </>
    );
  };

  export default UserName;