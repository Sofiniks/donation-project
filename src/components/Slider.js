import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Pagination]);

export default function Slider() {
  const list = projects.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <ProjectItem key={item.id} {...item} />
      </SwiperSlide>
    );
  });
  return (
    <Swiper pagination={{ clickable: true }} spaceBetween={40}>
      {list}
    </Swiper>
  );
}
