import Link from "next/link";

type UserTwitterProps = {
  twitter: string;
  className: React.ComponentProps<"div">["className"];
};

const UserTwitter = ({ twitter, className }: UserTwitterProps) => {
  return (
    <>
      <Link href="https://twitter.com/0x_strata" target="_blank">
        <p className={className}>
          Twitter: <span className="underline">{twitter}</span>
        </p>
      </Link>
    </>
  );
};

export default UserTwitter;
