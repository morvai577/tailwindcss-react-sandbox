import warningLogo from "../assets/warning.svg";

type Props = {};

export const Notification = (props: Props) => {
  return (
    <div className="mx-auto mt-12 flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg">
      <img src={warningLogo} className="h-12 w-12" alt="None" />
      <div>
        <div className="text-xl font-medium text-black">Are you sure?</div>
        <div className="text-slate-500">You are about to delete a post</div>
      </div>
    </div>
  );
};
