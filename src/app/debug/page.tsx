import isAdmin from "../lib/actions/isAdmin";

const Page: React.FunctionComponent = async () => {
  const admin = await isAdmin();
  if (!admin) {
    return <div>Whoops, you're on the wrong page</div>;
  }

  return (
    <div>
      <p className="text-center text-2xl py-8 font-bold">
        Welcome to the debug page
      </p>
      <div className="w-2/3 mx-auto py-24"></div>
    </div>
  );
};

export default Page;
