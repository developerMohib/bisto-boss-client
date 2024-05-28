import { Audio } from "react-loader-spinner";
const AdminHome = () => {
  return (
    <div>
      <div className="flex h-screen justify-center items-center">
        <div>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
        <h1> Hello i am Payment </h1>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
