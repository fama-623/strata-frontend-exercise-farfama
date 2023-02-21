type UserAge = {
    age: number
    className : React.ComponentProps<'div'>['className']
}

const UserAge= ({ age, className }: UserAge) => {
  
  
    return (
        <>
        <p className={className}>Age: {age}</p>
      </>
    );
  };

  export default UserAge;