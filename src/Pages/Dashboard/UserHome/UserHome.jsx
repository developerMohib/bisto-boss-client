import DynamicTitle from "../../../Component/DynamicTitle/DynamicTitle";
import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
  const {user} = useAuth()
  return (
    <div>
      <DynamicTitle titleName={"Dashbord"}> </DynamicTitle>
      <div>
        <h1>Hello, Wellcome beck <span className="uppercase font-semibold text-xl text-slate-800"> {user?.displayName} </span> </h1>
      </div>
    </div>
  );
};

export default UserHome;
