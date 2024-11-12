"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay } from "swiper/modules";

import PortfolioImg1 from "../../../../public/img/logo2.jpeg";
import PortfolioImg2 from "../../../../public/img/pf2.jpg";
import PortfolioImg3 from "../../../../public/img/pf3.jpg";
import PortfolioImg4 from "../../../../public/img/pf4.jpg";

export default function Sliders() {
  const [portfolioSlider, setportfolioSlider] = useState([
    {
      id: "slider1",
      img: PortfolioImg1,
      title:
        "El  Sistema FAST-FLAP de Osteomed está indicado para la fijación posterior a un traumatismo o para la reconstrucción del esqueleto craneofacial y bucomaxilofacial.",
    },
    {
      id: "slider2",
      img: PortfolioImg1,
      title:
        "El Sistema OSTEO-FLAP está indicado para volver a unir la cubierta  ósea craneana luego de la craneotomia.",
    },
    {
      id: "slider3",
      img: PortfolioImg1,
      title:
        "Las mallas OSTREOFORM están disponibles en versiones preformadas o rígidas. Las mallas preformadas permiten la fácil adaptación a la curvatura anatómica del craneo y se pueden acomodar a las curvas variables solamente con un contorneo mínimo.",
    },
    {
      id: "slider4",
      img: PortfolioImg1,
      title:
        "El sistema de placas OsteoMed destinado a fijaciones maxilofaciales y mandibulares es de los más completos y versátiles.Amplia variedad de bloques: 1.2mm, 1.6mm, 2.0mm estándar y bloqueado, 2.4mm estándar Y bloqueado.",
    },
    {
      id: "slider5",
      img: PortfolioImg1,
      title:
        "OsteoMed Logic es un sistema intraoral de distracción mandibular. Presenta una amplia variedad de barras para trayectorias de separación curvas y rectas que se activan mediante un alambre roscado,  fijando el sistema con tornillos de 1.6mm o 2.0mm.",
    },
    {
      id: "slider6",
      img: PortfolioImg1,
      title:
        "En el sistema OSTEOMED QUICKFIX™ se utiliza la fijación de alambre  para constricción  y estabilización de segmentos de hueso fracturado en la cavidad oral,en la cavidad oral, en conjunción con dispositivos de fijación primaria.",
    },
    {
      id: "slider7",
      img: PortfolioImg1,
      title:
        "INION CPS . Sistema de fijación bioabsorbible compuesto de tornillos, mallas y placas craneomaxilofaciales.",
    },
  ]);

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        loop={true}
        autoplay={{ delay: 4000 }}
        modules={[Autoplay]}
        className="portfolio-slider"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          360: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {portfolioSlider.map((singleSlider) => (
          <SwiperSlide className="single-pf" key={singleSlider.id}>
            <Image src={singleSlider.img} alt="#" width={320} height={252} />
            <p>
              {singleSlider.title}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
