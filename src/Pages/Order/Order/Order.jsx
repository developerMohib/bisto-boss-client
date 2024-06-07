import { Parallax } from "react-parallax";
import Reception from "../../../Component/Reception/Reception";
import orderBg from "../../../assets/shop/banner2.jpg";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../../../Component/FoodCard/FoodCard";
import { useParams } from "react-router-dom";
import { useState } from "react";
import DynamicTitle from "../../../Component/DynamicTitle/DynamicTitle";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [data] = useMenu();
  const dessert = data.filter((item) => item.category === "dessert");
  const soup = data.filter((item) => item.category === "soup");
  const salad = data.filter((item) => item.category === "salad");
  const pizza = data.filter((item) => item.category === "pizza");
  const drinks = data.filter((item) => item.category === "drinks");

  return (
    <div>
        <DynamicTitle titleName={'Order'} > </DynamicTitle>
      <Parallax bgImage={orderBg} strength={500}>
        <Reception>
          <div className="bg-white text-black p-4 mx-auto md:mt-0 mt-14 md:w-1/2">
            <h1 className="font-semibold text-2xl text-center "> Order </h1>
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

      {/*  Tabs here  */}
      <div className="my-10" >
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drink</Tab>
        </TabList>

        {/* Salad */}
        <TabPanel>
          <div className="md:grid grid-cols-3 md:gap-8">
            {salad?.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        {/* Pizza */}
        <TabPanel>
          <div className="md:grid grid-cols-3 md:gap-8">
            {pizza?.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        {/* Soup */}
        <TabPanel>
          <div className="md:grid grid-cols-3 md:gap-8">
            {soup?.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        {/* Dessert */}
        <TabPanel>
          <div className="md:grid grid-cols-3 md:gap-8">
            {dessert?.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
        {/* Drink */}
        <TabPanel>
          <div className="md:grid grid-cols-3 md:gap-8">
            {drinks.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
      </div>
    </div>
  );
};

export default Order;
