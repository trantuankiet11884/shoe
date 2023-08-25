import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/"></UserButton>
    </div>
  );
};

export default SetupPage;
