import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";
import HeadingTItle from "../HeadingTitle/HeadingTItle";
const CategorySlider = () => {
  return (
    <section>
      <HeadingTItle 
      subHeading={'From 11 am to 3 pm'}
      heading={'Order Online'} 
      ></HeadingTItle>
      <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper my-10 "
    >
      <SwiperSlide>
        <div className="relative" >
        <img className="w-full" src={slider1} alt="" />
        <p className="text-3xl absolute left-1/2 right-auto" >Salad</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img className="w-full" src={slider2} alt="" />{" "}
        <p className="text-3xl text-center " >Pizzas</p>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img className="w-full" src={slider3} alt="" />{" "}
        <p className="text-3xl text-center " >Soup</p>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img className="w-full" src={slider4} alt="" />{" "}
        <p className="text-3xl text-center " >Dessert</p>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img className="w-full" src={slider5} alt="" />{" "}
        <p className="text-3xl text-center " >Salad</p>
      </SwiperSlide>
    </Swiper>
    </section>
  );
};

export default CategorySlider;
