type UserTwitterProps= {
    twitter: string
    className : React.ComponentProps<'div'>['className']

}

const UserTwitter = ({ twitter, className }: UserTwitterProps) => {
  
  
    return (
      <>
        <p className={className}>Twitter: {twitter}</p>
      </>
    );
  };

  export default UserTwitter;