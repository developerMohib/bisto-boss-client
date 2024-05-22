import { Helmet } from "react-helmet-async";
import Reception from "../../Component/Reception/Reception";
import bgImage from "../../assets/menu/banner3.jpg";
import desImage from "../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../assets/menu/pizza-bg.jpg";
import saladImage from "../../assets/menu/salad-bg.jpg";
import soupImage from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import HeadingTItle from "../../Component/HeadingTitle/HeadingTItle";
import { Parallax } from "react-parallax";
import MenuFeature from "./MenuFeature";
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
        <MenuFeature data={offered} btnText={"View all Offer"}>
          {" "}
        </MenuFeature>
      </div>

      {/* Dessert Section */}
      <Parallax bgImage={desImage} strength={500}>
        <Reception>
          <div className="bg-white text-black p-4 mx-auto w-1/2">
            <h1 className="font-semibold text-2xl text-center "> Soup </h1>
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

      <div>
        <MenuFeature data={dessert} btnText={"ORDER YOUR FAVOURITE FOOD"}>
          {" "}
        </MenuFeature>
      </div>
      {/* Pizza Section */}
      <Parallax bgImage={pizzaImage} strength={500}>
        <Reception>
          <div className="bg-white text-black p-4 mx-auto w-1/2">
            <h1 className="font-semibold text-2xl text-center "> pizza </h1>
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
      <div>
        <MenuFeature data={pizza} btnText={"ORDER YOUR FAVOURITE FOOD"}>
          {" "}
        </MenuFeature>
      </div>

      {/* Soup Section */}

      <Parallax bgImage={soupImage} strength={500}>
        <Reception>
          <div className="bg-white text-black p-4 mx-auto w-1/2">
            <h1 className="font-semibold text-2xl text-center "> Soup </h1>
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
      <div>
        <MenuFeature data={soup} btnText={"ORDER YOUR FAVOURITE FOOD"}>
          {" "}
        </MenuFeature>
      </div>

      {/* salad Section */}

      <Parallax bgImage={saladImage} strength={500}>
        <Reception>
          <div className="bg-white text-black p-4 mx-auto w-1/2">
            <h1 className="font-semibold text-2xl text-center "> Salad </h1>
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
      <div>
        <MenuFeature data={salad} btnText={"ORDER YOUR FAVOURITE FOOD"}>
          {" "}
        </MenuFeature>
      </div>
    </div>
  );
};

export default Menu;
