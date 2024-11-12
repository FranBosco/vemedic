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
      "AGUJA de Biopsia P/ ECOENDOSCOPIA SONOFLEX 19/22 G (FNB) - ECHO TIP (FNA)",
  },
  {
    id: "slider2",
    img: PortfolioImg1,
    title:
      "ALAMBRE GUIA (Hilo Guia) - 450 CM X 0.035 PUNTA RECTA (Guia Hidrofilica) - AGS MEDTECH",
  },
  {
    id: "slider3",
    img: PortfolioImg1,
    title: "ANSA FRIA HEXAGONAL / OVAL - AGS",
  },
  {
    id: "slider4",
    img: PortfolioImg1,
    title: "ANSA DE POLIPECTOMIA MONOFILAMENTO OVAL DE 6/10/15/25/35MM",
  },
  {
    id: "slider5",
    img: PortfolioImg1,
    title: "Ansa de RED 25 mm x 240 cm canal 2,8 mm no rotable - ANREI",
  },
  {
    id: "slider6",
    img: PortfolioImg1,
    title: "BALON DE DILATACION (Medidas Varias)",
  },
  {
    id: "slider7",
    img: PortfolioImg1,
    title:
      "BALON DE RADIOFRECUENCIA HALO90 (Medidas Varias) Cateter Focal de Ablacion",
  },
  { id: "slider8", img: PortfolioImg1, title: "BALON EXTRACTOR TRIPLE LUMEN" },
  {
    id: "slider9",
    img: PortfolioImg1,
    title: "BOTON DE GASTROSTOMIA CON/SIN BALON",
  },
  {
    id: "slider10",
    img: PortfolioImg1,
    title: "BOTON DE GASTROSTOMIA MIC-KEY",
  },
  {
    id: "slider11",
    img: PortfolioImg1,
    title: "CANASTILLA DORMIA LITOTRIPTORA DE 4 HILOS DE 3.5 - COOK",
  },
  {
    id: "slider12",
    img: PortfolioImg1,
    title: "CAPSULA ENDOSCOPICA - PILLCAM SB3",
  },
  {
    id: "slider13",
    img: PortfolioImg1,
    title: "CATETER DE DRENAJE BILIAR 10FR",
  },
  {
    id: "slider14",
    img: PortfolioImg1,
    title: "CATETER DE DRENAJE MULTIPROPOSITO 8.5FR",
  },
  { id: "slider15", img: PortfolioImg1, title: "CEPILLO DE LIMPIEZA" },
  {
    id: "slider16",
    img: PortfolioImg1,
    title: "EXTENSOR DE ALIMENTACION (Conector Boton)",
  },
  {
    id: "slider17",
    img: PortfolioImg1,
    title: "HEMOCLIP de apertura 16mm de 135 largo - AGS MEDTECH",
  },
  {
    id: "slider18",
    img: PortfolioImg1,
    title: "HEMOCLIP para hemostasia 16mm de 135 largo - AGS MEDTECH",
  },
  {
    id: "slider19",
    img: PortfolioImg1,
    title: "HEMOCLIP apertura de clip 12mm - largo 220 cm - MEDWORK",
  },
  {
    id: "slider20",
    img: PortfolioImg1,
    title: "INYECTOR 21/23/25 G 2,4 MM LARGO 2300 MM - AGS",
  },
  { id: "slider21", img: PortfolioImg1, title: "INYECTOR 21/25 G - ENDOFLEX" },
  {
    id: "slider22",
    img: PortfolioImg1,
    title: "MORDILLO Descartable - MEDWORK",
  },
  {
    id: "slider23",
    img: PortfolioImg1,
    title: "PAPILOTOMO TRIPLE LUMEN DE 5 mm , 20/25 mm",
  },
  { id: "slider24", img: PortfolioImg1, title: "PINZA DE BIOPSIA" },
  {
    id: "slider25",
    img: PortfolioImg1,
    title:
      "SET DE BANDAS (SET DE LIGADURAS para Varices Esofagicas) - SMARTBAND - INTELLIGENT ENDOSCOPY",
  },
  {
    id: "slider26",
    img: PortfolioImg1,
    title:
      "RECARGA P/ SET DE BANDAS (SET DE LIGADURAS para Varices Esofagicas) - SMARTBAND - INTELLIGENT ENDOSCOPY",
  },
  {
    id: "slider27",
    img: PortfolioImg1,
    title: "SET DE GASTROSTOMIA ENDOSCOPICO PERCUTANEO (Medidas Varias)",
  },
  {
    id: "slider28",
    img: PortfolioImg1,
    title: "SISTEMA DE INTRODUCCION TIPO DAGOSTINO (Set Introductor Biliar)",
  },
  { id: "slider29", img: PortfolioImg1, title: "SONDA DE ARGON ENDOSCOPICA" },
  {
    id: "slider30",
    img: PortfolioImg1,
    title: "SONDA PH IMPEDANCIO (Cateter de Monitoreo)",
  },
  {
    id: "slider31",
    img: PortfolioImg1,
    title: "SONDA P/ GASTROSTOMIA 18-24 FR - SILMAG",
  },
  {
    id: "slider32",
    img: PortfolioImg1,
    title: "STENT BILIAR PLASTICO C/Introductor(Varias Medidas)",
  },
  {
    id: "slider33",
    img: PortfolioImg1,
    title: "Stent Esofágico autoexpandible - ELLA",
  },
  {
    id: "slider34",
    img: PortfolioImg1,
    title:
      "Stent Biliar autoexpandible - Endoscopico/Percutaneo - NITINELLA PLUS - ELLA",
  },
  {
    id: "slider35",
    img: PortfolioImg1,
    title: "Stent Piloroduodenal autoexpandible. ENTERELLA - ELLA",
  },
  {
    id: "slider36",
    img: PortfolioImg1,
    title: "Stent colonico autoexpandible. ENTERELLA - ELLA",
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
