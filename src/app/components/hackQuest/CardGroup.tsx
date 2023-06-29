"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardType1 from "./CardType1";
import CardType2 from "./CardType2";
import CardType3 from "./CardType3";
import CardType4 from "./CardType4";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import styles from "./index.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CardGroup = () => {
  const [btnStatus, setBtnStatus] = useState("left");
  return (
    <>
      <p
        className={`text-[20px] mt-[6px] pt-10 pb-9 tracking-[0.4px] font-bold text-[#f1f1f1] leading-[112.5%] font-NextPoster`}
      >
        {"< / Trending Now >"}
      </p>
      <Swiper
        style={{ paddingTop: 4 }}
        className="relative"
        // install Swiper modules
        navigation={{ prevEl: ".my-prev-button", nextEl: ".my-next-button" }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={52}
        slidesPerView={3}
        pagination={false}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <CardType1 />
        </SwiperSlide>
        <SwiperSlide>
          <CardType2 />
        </SwiperSlide>
        <SwiperSlide>
          <CardType3 />
        </SwiperSlide>
        <SwiperSlide>
          <CardType4 />
        </SwiperSlide>

        <div
          className={`${styles["swiper-left-btn-bgc"]} ${
            btnStatus === "left" ? "opacity-0" : "opacity-100"
          } my-prev-button absolute flex w-[192px] h-[100%]  items-center top-0 left-[-3.875%] flex-row-reverse swiper-btn-bg z-50`}
        >
          <div
            className={styles["prev-btn"]}
            onClick={() => setBtnStatus("left")}
          />
        </div>
        <div
          className={`${styles["swiper-right-btn-bgc"]} ${
            btnStatus === "right" ? "opacity-0" : "opacity-100"
          } my-next-button absolute flex w-[192px] h-[100%] items-center top-0 right-[-3.875%] bg-gradient-to-[270deg] from-cyan-500 to-blue-500 z-50`}
        >
          <div
            className={styles["next-btn"]}
            onClick={() => setBtnStatus("right")}
          />
        </div>
      </Swiper>
    </>
  );
};

export default CardGroup;
