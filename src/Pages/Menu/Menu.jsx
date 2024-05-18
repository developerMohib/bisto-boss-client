import { Helmet } from "react-helmet-async";
import Reception from "../../Component/Reception/Reception";
import bgImage from "../../assets/home/banner.jpg";
import useMenu from "../../Hooks/useMenu";
import HeadingTItle from "../../Component/HeadingTitle/HeadingTItle";
import MenuItem from "../../Component/MenuItem/MenuItem";
import { Parallax } from "react-parallax";
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

      <HeadingTItle subHeading={"Dont miss"} heading={"Todays Offered"}>
        {" "}
      </HeadingTItle>
      <div>
        <div className="md:grid grid-cols-2 gap-5 my-10">
          {offered.map((item) => (
            <MenuItem key={item._id} item={item}>
              {" "}
            </MenuItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
