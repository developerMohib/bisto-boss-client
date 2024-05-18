import { Helmet } from "react-helmet-async";
import CategorySlider from "../../Component/CategorySlider/CategorySlider";
import Feature from "../../Component/Feature/Feature";
import PhoneNum from "../../Component/PhoneNum/PhoneNum";
import PopularMenu from "../../Component/PopularMenu/PopularMenu";
import RecepCard from "../../Component/RecepCard/RecepCard";
import Slider from "../../Component/Slider/Slider";
import Testominal from "../../Component/Testominal/Testominal";

const Home = () => {
  return (
    <div>
      <Helmet>
        {" "}
        <title> Home | Bisto Boss Project </title>{" "}
      </Helmet>
      <Slider> </Slider>
      <CategorySlider> </CategorySlider>
      <RecepCard> </RecepCard>
      <PopularMenu> </PopularMenu>
      <PhoneNum> </PhoneNum>
      <Feature> </Feature>
      <Testominal> </Testominal>
    </div>
  );
};

export default Home;
