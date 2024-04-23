import isAdmin from "../lib/actions/isAdmin";
import { LoginWithGoogleButton } from "../lib/ui/Buttons/LoginWithGoogleButton";
import Modal from "../lib/ui/components/Modal";

const Page: React.FunctionComponent = async () => {
  const admin = await isAdmin();
  if (!admin) {
    return <div>Whoops, {"you're"} on the wrong page</div>;
  }
  console.log("rendering");

  return (
    <div>
      <p className="text-center text-2xl py-8 font-bold">
        Welcome to the debug page
      </p>
      <Modal modalHeading="Login to continue" isOpen={true}>
        <div className="w-1/2 mx-auto mt-8">
          <LoginWithGoogleButton />
        </div>
      </Modal>
      <div className="w-2/3 mx-auto py-24"></div>
    </div>
  );
};

export default Page;
