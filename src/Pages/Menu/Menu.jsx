import { Helmet } from "react-helmet-async";
import Reception from "../../Component/Reception/Reception";
import bgImage from "../../assets/menu/banner3.jpg";
import desImage from "../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../Hooks/useMenu";
import HeadingTItle from "../../Component/HeadingTitle/HeadingTItle";
import MenuItem from "../../Component/MenuItem/MenuItem";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        {" "}
        <title> Menu | Bisto Boss Project </title>{" "}
      </Helmet>

      <Parallax bgImage={bgImage} strength={500}>
        <Reception>
          <div className="bg-white text-black p-4 mx-auto w-1/2">
            <h1 className="font-semibold text-2xl text-center "> Our Menu </h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam ducimus atque odit sint saepe quo neque repellendus
              distinctio, autem porro, delectus suscipit? Deleniti placeat esse
              architecto fuga amet. Dignissimos, distinctio?
            </p>
          </div>
        </Reception>
      </Parallax>

      {/* Offer Section */}

      <div className="mt-10">
        <HeadingTItle subHeading={"Dont miss"} heading={"Todays Offered"}>
          {" "}
        </HeadingTItle>
      </div>
      <div>
        <div className="md:grid grid-cols-2 gap-5 my-10">
          {offered.map((item) => (
            <MenuItem key={item._id} item={item}>
              {" "}
            </MenuItem>
          ))}
        </div>
        <div className="text-center mb-10 ">
          <Link>
            {" "}
            <button className="btn border-0 border-b-2 border-slate-500 rounded-lg">
              {" "}
              View all Offer{" "}
            </button>{" "}
          </Link>
        </div>
      </div>

      {/* Dessert Section */}

      <Reception bgImage={desImage}>
        <div className="bg-white text-black p-4 mx-auto w-1/2">
          <h1 className="font-semibold text-2xl text-center "> Soup </h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            ducimus atque odit sint saepe quo neque repellendus distinctio,
            autem porro, delectus suscipit? Deleniti placeat esse architecto
            fuga amet. Dignissimos, distinctio?
          </p>
        </div>
      </Reception>
      <div>
        <div className="md:grid grid-cols-2 gap-5 my-10">
          {dessert.map((item) => (
            <MenuItem key={item._id} item={item}>
              {" "}
            </MenuItem>
          ))}
        </div>
        <div className="text-center mb-10 ">
          <Link>
            {" "}
            <button className="btn border-0 border-b-2 border-slate-500 rounded-lg">
              {" "}
              ORDER YOUR FAVOURITE FOOD{" "}
            </button>{" "}
          </Link>
        </div>
      </div>
      
      {/* Pizza Section */}

      <Reception bgImage={desImage}>
        <div className="bg-white text-black p-4 mx-auto w-1/2">
          <h1 className="font-semibold text-2xl text-center "> Pizza </h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            ducimus atque odit sint saepe quo neque repellendus distinctio,
            autem porro, delectus suscipit? Deleniti placeat esse architecto
            fuga amet. Dignissimos, distinctio?
          </p>
        </div>
      </Reception>
      <div>
        <div className="md:grid grid-cols-2 gap-5 my-10">
          {pizza.map((item) => (
            <MenuItem key={item._id} item={item}>
              {" "}
            </MenuItem>
          ))}
        </div>
        <div className="text-center mb-10 ">
          <Link>
            {" "}
            <button className="btn border-0 border-b-2 border-slate-500 rounded-lg">
              {" "}
              ORDER YOUR FAVOURITE FOOD{" "}
            </button>{" "}
          </Link>
        </div>
      </div>
      
      {/* Soup Section */}

      <Reception bgImage={desImage}>
        <div className="bg-white text-black p-4 mx-auto w-1/2">
          <h1 className="font-semibold text-2xl text-center "> Soup </h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            ducimus atque odit sint saepe quo neque repellendus distinctio,
            autem porro, delectus suscipit? Deleniti placeat esse architecto
            fuga amet. Dignissimos, distinctio?
          </p>
        </div>
      </Reception>
      <div>
        <div className="md:grid grid-cols-2 gap-5 my-10">
          {soup.map((item) => (
            <MenuItem key={item._id} item={item}>
              {" "}
            </MenuItem>
          ))}
        </div>
        <div className="text-center mb-10 ">
          <Link>
            {" "}
            <button className="btn border-0 border-b-2 border-slate-500 rounded-lg">
              {" "}
              ORDER YOUR FAVOURITE FOOD{" "}
            </button>{" "}
          </Link>
        </div>
      </div>


      {/* salad Section */}

      <Reception bgImage={desImage}>
        <div className="bg-white text-black p-4 mx-auto w-1/2">
          <h1 className="font-semibold text-2xl text-center "> Salad </h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            ducimus atque odit sint saepe quo neque repellendus distinctio,
            autem porro, delectus suscipit? Deleniti placeat esse architecto
            fuga amet. Dignissimos, distinctio?
          </p>
        </div>
      </Reception>
      <div>
        <div className="md:grid grid-cols-2 gap-5 my-10">
          {salad.map((item) => (
            <MenuItem key={item._id} item={item}>
              {" "}
            </MenuItem>
          ))}
        </div>
        <div className="text-center mb-10 ">
          <Link>
            {" "}
            <button className="btn border-0 border-b-2 border-slate-500 rounded-lg">
              {" "}
              ORDER YOUR FAVOURITE FOOD{" "}
            </button>{" "}
          </Link>
        </div>
      </div>



    </div>
  );
};

export default Menu;
