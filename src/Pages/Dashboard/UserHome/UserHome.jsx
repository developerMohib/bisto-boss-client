import DynamicTitle from "../../../Component/DynamicTitle/DynamicTitle";

const UserHome = () => {
  return (
    <div>
      <DynamicTitle titleName={"Dashbord"}> </DynamicTitle>
      <div className="flex h-screen justify-center items-center">
        <h1> hi ami User Home / Dashboard </h1>
      </div>
    </div>
  );
};

export default UserHome;
