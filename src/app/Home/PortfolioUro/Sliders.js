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
      title: "AGUJA DE CHIVA Calibre 22 x 20/28 cm - MARFLOW",
    },
    {
      id: "slider2",
      img: PortfolioImg1,
      title: "AGUJA DE CHIVA 2 Partes 18G 20 cm - ROCANEPHRO",
    },
    {
      id: "slider3",
      img: PortfolioImg1,
      title:
        "ALAMBRE GUIA 0,035x150 cm (URO-PERCUTANEO) - GUIA DE NITINOL - Punta Hidrofil. - ROCAMED",
    },
    {
      id: "slider4",
      img: PortfolioImg1,
      title:
        "ALAMBRE GUIA - 0.035x150 cm -Guia Metalica Hidrofilica de Titanio (URO-PERCUTANEO) - MARFLOW",
    },
    {
      id: "slider5",
      img: PortfolioImg1,
      title: "ANSAS MONOPOLAR - (STORZ/WOLF/OLYMPUS) - MARFLOW",
    },
    {
      id: "slider6",
      img: PortfolioImg1,
      title: "ANSAS BIPOLAR - (STORZ/OLYMPUS) - MARFLOW",
    },
    { id: "slider7", img: PortfolioImg1, title: "BALON DILATADOR URETRAL" },
    {
      id: "slider8",
      img: PortfolioImg1,
      title: "CANASTILLA DE AGARRE FRONTAL - ROCAMED",
    },
    {
      id: "slider9",
      img: PortfolioImg1,
      title:
        "CANASTILLA DE CALCULOS RENALES AGARRE FRONTAL G-PAW DE 1.9 FR X 120 CM - MARFLOW",
    },
    {
      id: "slider10",
      img: PortfolioImg1,
      title:
        "CANASTILLA UROLOGICA de Dormia DE NITINOL 4 HILOS 90 cm - MARFLOW",
    },
    {
      id: "slider11",
      img: PortfolioImg1,
      title:
        "CANASTILLA de Nitinol sin punta para extraccion de calculos (N-COMPASS / NTRAP) - ROCAMED",
    },
    {
      id: "slider12",
      img: PortfolioImg1,
      title: "CANASTILLA UROLOGICA DE NITINOL 4 HILOS - ROCAMED",
    },
    {
      id: "slider13",
      img: PortfolioImg1,
      title:
        "CATETER DOBLE J Adultos 6 fr X 24/26 CM- 1y2 puntas abiertas - MARFLOW",
    },
    {
      id: "slider14",
      img: PortfolioImg1,
      title: "CATETER DOBLE J 6 FR X 26 CM - ROCAMED",
    },
    {
      id: "slider15",
      img: PortfolioImg1,
      title: "CATETER URETERAL OPEN END 3 y 6 fr X 70 CM -MARFLOW",
    },
    {
      id: "slider16",
      img: PortfolioImg1,
      title: "CATETER URETERAL OPEN END Recto Abierto - ROCAMED",
    },
    {
      id: "slider17",
      img: PortfolioImg1,
      title: "Manipulador Uterino Descartable - Advincula Delineator - 3/3,5/4",
    },
    {
      id: "slider18",
      img: PortfolioImg1,
      title:
        "SET DE NEFROSTOMIA PERCUTANEA con Pigtail / Malecot 8-10-12 FR - ROCAMED",
    },
    {
      id: "slider19",
      img: PortfolioImg1,
      title:
        "SET DE NEFROSTOMIA PERCUTANEA de 10/12/14 fr con Pigtail / Punta Malecot - MARFLOW",
    },
    {
      id: "slider20",
      img: PortfolioImg1,
      title: "SET DE DILATADOR AMPLATZ DE 8FR A 30FR - MARFLOW",
    },
    {
      id: "slider21",
      img: PortfolioImg1,
      title: "SET DILATADORES URETRALES de 6 a 16 fr x 70 cm - MARFLOW",
    },
    {
      id: "slider22",
      img: PortfolioImg1,
      title:
        "VAINA (CAMISA) DE ACCESO URETERAL 10x12 Y 12x14 - 35 CM largo - ROCAMED (Uso Mujeres)",
    },
    {
      id: "slider23",
      img: PortfolioImg1,
      title:
        "VAINA (CAMISA) DE ACCESO URETERAL 10x12 Y 12x14 - 45 CM largo - ROCAMED (Uso Hombres)",
    },
    {
      id: "slider24",
      img: PortfolioImg1,
      title:
        "VAINA (Camisa) DE ACCESO URETERAL 12 FR X 35 y 45 CM TRENZADO - MARFLOW",
    },
    {
      id: "slider25",
      img: PortfolioImg1,
      title: "Sonda FOLEY de 2 vias con Balon de Silicona - MARFLOW",
    },
    {
      id: "slider26",
      img: PortfolioImg1,
      title: "Sonda FOLEY de 2 vias de Silicona - SILMAG",
    },
    {
      id: "slider27",
      img: PortfolioImg1,
      title:
        "Ureteroscopio punta fleible, desechable, de 7,5/9 FR p/canal de trabajo - SEPLOU",
    },
    {
      id: "slider28",
      img: PortfolioImg1,
      title: "Sling para incontinencia de orina (TOT / TVT)",
    },
    {
      id: "slider29",
      img: PortfolioImg1,
      title: "Malla para prolapso con 6 puntos de fijacion",
    },
    {
      id: "slider30",
      img: PortfolioImg1,
      title: "Arpones de peek para fijar al ligamento sacroespinoso",
    },
    { id: "slider31", img: PortfolioImg1, title: "Aplicador de arpones" },
    {
      id: "slider32",
      img: PortfolioImg1,
      title: "Sistema para prolapso minimamente invasivo",
    },
    {
      id: "slider33",
      img: PortfolioImg1,
      title: "Malla TOT de insicion unica",
    },
    {
      id: "slider34",
      img: PortfolioImg1,
      title: "Sistema reemex reajustable de por vida (Femenino)",
    },
    {
      id: "slider35",
      img: PortfolioImg1,
      title: "Sistema reemex reajustable de por vida (Masculino)",
    },
    {
      id: "slider36",
      img: PortfolioImg1,
      title: "Kit macroplastique para relleno ureteral",
    },
  ]);

  return (
    <>
      <Swiper
        slidesPerView={8}
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
