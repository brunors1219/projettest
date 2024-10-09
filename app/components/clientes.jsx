'use client';
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Setas personalizadas
// Setas personalizadas
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-next`}
            style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
            onClick={onClick}
        >
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-prev`}
            style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
            onClick={onClick}
        >
            
        </div>
    );
}

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
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />, // Adicionando seta para avançar
        prevArrow: <PrevArrow />, // Adicionando seta para voltar
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
                        description="Estava enfrentando suspeitas em meu relacionamento e decidi procurar a ajuda de Renata. Sua discrição e profissionalismo foram além das minhas expectativas. Ela me forneceu respostas claras e me ajudou a tomar decisões importantes para o meu futuro. Estou imensamente grata por sua assistência."
                        person="Sofia Silva"
                    />
                </div>
                <div>
                    <TestimonialsCard
                        description="Renata foi incrível ao lidar com minha situação delicada. Sua abordagem compassiva e profissional me fez sentir apoiada em cada passo do caminho. Graças a ela, descobri a verdade e pude seguir em frente com minha vida."
                        person="Maria Oliveira"
                    />
                </div>
                <div>
                    <TestimonialsCard
                        description="Renata foi incrível ao lidar com minha situação delicada. Sua abordagem compassiva e profissional me fez sentir apoiada em cada passo do caminho. Graças a ela, descobri a verdade e pude seguir em frente com minha vida."
                        person="Maria Oliveira"
                    />
                </div>
                <div>
                    <TestimonialsCard
                        description="Renata foi incrível ao lidar com minha situação delicada. Sua abordagem compassiva e profissional me fez sentir apoiada em cada passo do caminho. Graças a ela, descobri a verdade e pude seguir em frente com minha vida."
                        person="Maria Oliveira"
                    />
                </div>
            </Slider>
        </div>
    );
}

export default Cliente;
