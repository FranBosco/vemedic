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
      title: "Malla Compuesta de contacto visceral 15x20 - DIPROMED",
    },
    {
      id: "slider2",
      img: PortfolioImg1,
      title: "Malla Compuesta de contacto visceral 20x30 - DIPROMED",
    },
    {
      id: "slider3",
      img: PortfolioImg1,
      title: "Malla Compuesta de contacto visceral 26x34 - DIPROMED",
    },
    {
      id: "slider4",
      img: PortfolioImg1,
      title:
        "Malla Compuesta para Hernia Umbilical c/guia de anclaje 4,5 cm - DIPROMED",
    },
    {
      id: "slider5",
      img: PortfolioImg1,
      title:
        "Malla Compuesta para Hernia Umbilical c/guia de anclaje 6,4 cm - DIPROMED",
    },
    {
      id: "slider6",
      img: PortfolioImg1,
      title:
        "MALLA de Contacto C/VISCERAS - 14 X 15 CM - Polietileno - TAGUMESH",
    },
    {
      id: "slider7",
      img: PortfolioImg1,
      title:
        "MALLA de Contacto C/VISCERAS - 22.07x15.04x10.03cm - Polietileno - TAGUMESH",
    },
    {
      id: "slider8",
      img: PortfolioImg1,
      title:
        "MALLA de Contacto C/VISCERAS - 20 X 30 CM - Polietileno - TAGUMESH",
    },
    {
      id: "slider9",
      img: PortfolioImg1,
      title:
        "MALLA de Contacto C/VISCERAS - 30 X 30 X 20 CM - Polietileno - TAGUMESH",
    },
    {
      id: "slider10",
      img: PortfolioImg1,
      title: "MALLA POLIPROPILENO 7 X 15 - TAGUMESH",
    },
    {
      id: "slider11",
      img: PortfolioImg1,
      title: "MALLA POLIPROPILENO 15 X 15 - TAGUMESH",
    },
    {
      id: "slider12",
      img: PortfolioImg1,
      title: "MALLA POLIPROPILENO 30 X 30 - TAGUMESH",
    },
    {
      id: "slider13",
      img: PortfolioImg1,
      title: "MALLA POLIPROPILENO Polymesh 15 X 15 - BETATECH",
    },
    {
      id: "slider14",
      img: PortfolioImg1,
      title: "MALLA POLIPROPILENO Polymesh 30 X 30 - BETATECH",
    },
    {
      id: "slider15",
      img: PortfolioImg1,
      title: "MALLA de Contacto C/VISCERAS - 15 X 15 CM - Polietileno",
    },
    {
      id: "slider16",
      img: PortfolioImg1,
      title: "MALLA de Contacto C/VISCERAS - 30 X 30 CM - Polietileno",
    },
    {
      id: "slider17",
      img: PortfolioImg1,
      title: "MALLA POLIPROPILENO 7 X 15 - SURMESH",
    },
    {
      id: "slider18",
      img: PortfolioImg1,
      title: "MALLA POLIPROPILENO 10 X 15 - SURMESH",
    },
    {
      id: "slider19",
      img: PortfolioImg1,
      title: "MALLA POLIPROPILENO 15 X 15 - SURMESH",
    },
    {
      id: "slider20",
      img: PortfolioImg1,
      title: "MALLA POLIPROPILENO 20 X 20 - SURMESH",
    },
    {
      id: "slider21",
      img: PortfolioImg1,
      title: "MALLA POLIPROPILENO 30 X 30 - SURMESH",
    },
    {
      id: "slider22",
      img: PortfolioImg1,
      title:
        "FIJADOR DE MALLA LAPAROSCOPICO (T) 30 G (WEL-TACK) /ENGRAPADORA DE TITANIO (Tipo Protack)",
    },
    {
      id: "slider23",
      img: PortfolioImg1,
      title:
        "FIJADOR DE MALLA LAPAROSCOPICO (A) 30 G (WEL-TACK) /ENGRAPADORA DE TITANIO (Tipo Protack)",
    },
    {
      id: "slider24",
      img: PortfolioImg1,
      title:
        "FIJADOR DE MALLA LAPAROSCOPICO (T) 15 G (WEL-TACK) /ENGRAPADORA DE TITANIO (Tipo Protack)",
    },
    {
      id: "slider25",
      img: PortfolioImg1,
      title:
        "FIJADOR DE MALLA LAPAROSCOPICO (A) 15 G (WEL-TACK) /ENGRAPADORA DE TITANIO (Tipo Protack)",
    },
    {
      id: "slider26",
      img: PortfolioImg1,
      title: "SUTURA MECANICA CIRCULAR (Varias Medidas) 21-25-29-33",
    },
    {
      id: "slider27",
      img: PortfolioImg1,
      title: "SUTURA MECANICA CURVA CORTANTE (Tipo Contour) - 45 mm (verde)",
    },
    {
      id: "slider28",
      img: PortfolioImg1,
      title:
        "Recarga para SUTURA MECANICA CURVA CORTANTE (Tipo Contour) - 45 mm (verde)",
    },
    {
      id: "slider29",
      img: PortfolioImg1,
      title: "SUTURA MECANICA LINEAL CORTANTE (a cielo Abierto) de 55/75 MM",
    },
    {
      id: "slider30",
      img: PortfolioImg1,
      title:
        "RECARGA SUTURA MECANICA LINEAL CORTANTE (a cielo Abierto) de 55/75 MM (Azul/Verde)",
    },
    {
      id: "slider31",
      img: PortfolioImg1,
      title: "SUTURA MECANICA LINEAL CORTANTE (Laparoscópica) de 30/45/60 MM",
    },
    {
      id: "slider32",
      img: PortfolioImg1,
      title:
        "RECARGA SUTURA MECANICA LINEAL CORTANTE (Laparoscópica) de 30/45/60 MM (Blanco/Azul/Verde)",
    },
    {
      id: "slider33",
      img: PortfolioImg1,
      title: "SUTURA MECANICA LINEAL (Corta y Sella) de 30/45/60 MM",
    },
    {
      id: "slider34",
      img: PortfolioImg1,
      title:
        "RECARGA SUTURA MECANICA LINEAL (Corta y Sella) de 30/45/60 MM (Blanco/Azul/Verde)",
    },
    {
      id: "slider35",
      img: PortfolioImg1,
      title: "SUTURA MECANICA TORACICA RECTA 30MM",
    },
    {
      id: "slider36",
      img: PortfolioImg1,
      title: "RECARGA SUTURA MECANICA TORACICA RECTA 30MM (Blanco/Azul/Verde)",
    },
    { id: "slider37", img: PortfolioImg1, title: "ENDOBAG 10MM - 15MM" },
    {
      id: "slider38",
      img: PortfolioImg1,
      title: "MALLA ULTRALIGERA L/TAD INTRAUM",
    },
    {
      id: "slider39",
      img: PortfolioImg1,
      title: "MALLA ULTRALIGERA TAD L3 Malla Ultraligera 30 x 30",
    },
    {
      id: "slider40",
      img: PortfolioImg1,
      title: "Recarga Grapadora corte 10x60 MM tipo echelon blanco",
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
