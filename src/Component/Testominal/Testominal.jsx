import { useEffect, useState } from "react";
import HeadingTitle from "../HeadingTitle/HeadingTItle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testominal = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://bisto-boss-server-phi.vercel.app/review")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  return (
    <div>
      <HeadingTitle
        HeadingTitle={"What Our Client Says"}
        heading={"Testominals"}
      ></HeadingTitle>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {review.map((data) => (
            <SwiperSlide key={data._id}>
              
          <div className="flex flex-col items-center my-20 px-10" >
            
          <Rating style={{ maxWidth: 120 }} value={data.rating} readOnly />
          <FaQuoteLeft className="text-3xl mt-10"></FaQuoteLeft>
              <p className="w-3/4 mx-auto py-10" > {data.details} </p>
              <h1> {data.name} </h1>
          </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testominal;
