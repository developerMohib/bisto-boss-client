import { Link } from "react-router-dom";
import MenuItem from "../../Component/MenuItem/MenuItem";

const MenuFeature = ({ data , btnText, category}) => {

  return (
    <>
      <div className="md:grid grid-cols-2 gap-5 my-10">
        {data.map((item) => (
          <MenuItem key={item._id} item={item}>
            {" "}
          </MenuItem>
        ))}
      </div>
      <div className="text-center mb-10 ">
        <Link to={`/order/${category}`} >
          {" "}
          <button className="btn border-0 border-b-2 border-slate-500 rounded-lg">
            {btnText}
          </button>{" "}
        </Link>
      </div>
    </>
  );
};

export default MenuFeature;
