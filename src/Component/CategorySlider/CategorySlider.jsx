import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";
const CategorySlider = () => {
  return (
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
        {" "}
        <img className="w-full" src={slider1} alt="" />{" "}
        <p className="text-3xl text-center -mt-16" >Salad</p>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img className="w-full" src={slider2} alt="" />{" "}
        <p className="text-3xl text-center -mt-16" >Salad</p>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img className="w-full" src={slider3} alt="" />{" "}
        <p className="text-3xl text-center -mt-16" >Salad</p>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img className="w-full" src={slider4} alt="" />{" "}
        <p className="text-3xl text-center -mt-16" >Salad</p>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img className="w-full" src={slider5} alt="" />{" "}
        <p className="text-3xl text-center -mt-16" >Salad</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default CategorySlider;
