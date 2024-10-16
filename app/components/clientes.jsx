'use client';
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Setas personalizadas
// Setas personalizadas
const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "gray", // Defina a cor ou estilo que quiser
          borderRadius: "50%", // Exemplo de borda arredondada
        }}
        onClick={onClick}
      />
    );
  };
  
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "gray", // Defina a cor ou estilo que quiser
          borderRadius: "50%", // Exemplo de borda arredondada
        }}
        onClick={onClick}
      />
    );
  };

function TestimonialsCard({ description, person }) {
    return (
        <div className="p-5">
            <div className="grid p-4 w-full md:w-[300px] h-[480px] justify-items-center bg-gray-300 rounded-lg mx-auto shadow-lg shadow-black">
                <span className="text-4xl text-black font-poppins font-bold">&quot;</span>
                <p className="text-lg text-center">{description}</p>
                <h1 className="text-2xl font-bold mt-4">- {person}</h1>
            </div>
        </div>
    );
}

function Cliente() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,          // Ativa o autoplay
        autoplaySpeed: 2500,     // Intervalo de 2 segundos entre as transições
        pauseOnHover: true,      // Pausa o autoplay quando o mouse passa por cima
        nextArrow: <CustomNextArrow />, // Seta customizada para "next"
        prevArrow: <CustomPrevArrow />,  // Seta customizada para "prev"
        responsive: [
            {
                breakpoint: 1024, // Tablets e telas menores
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768, // Celulares
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="container mx-auto p-5">
            <Slider {...settings}>
                <div>
                    <TestimonialsCard
                        description="Contratei os serviços do detetive Bruno para investigar um caso de infidelidade. Ele foi extremamente profissional e discreto. As informações que ele me trouxe foram cruciais para entender a situação. Recomendo!"
                        person="João S."
                    />
                </div>
                <div>
                    <TestimonialsCard
                        description="O serviço foi excepcional! O detetive foi muito atencioso e se preocupou com todos os detalhes. Agradeço pela ajuda na localização de um parente desaparecido. O resultado foi surpreendente"
                        person="Maria F."
                    />
                </div>
                <div>
                    <TestimonialsCard
                        description="Fiquei impressionado com a rapidez e eficiência do trabalho do Bruno. Ele me ajudou a resolver um problema de fraude que estava me preocupando. A comunicação foi clara e constante."
                        person="Ricardo T."
                    />
                </div>
                <div>
                    <TestimonialsCard
                        description="O trabalho foi feito com muito profissionalismo e ética. Me senti seguro durante todo o processo. Agradeço pela dedicação e pelos resultados positivos."
                        person="Ana P."
                    />
                </div>
            </Slider>
        </div>
    );
}

export default Cliente;
