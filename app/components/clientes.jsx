'use client'
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestimonialsCard({ description, person }) {
    return (
        <div className="p-7">
            <div className="grid p-4 w-full md:w-[300px] h-[480px] justify-items-center bg-gray-300 rounded-lg mx-auto shadow-lg shadow-black">
                <span className="text-4xl text-black font-poppins font-bold ">&quot;</span>
                <p className="text-lg justify-center text-left ">{description}</p>
                <h1 className="text-3xl font-bold">- {person}</h1>
            </div>
        </div>
    )
}

function Cliente (){

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    
    return(
        
        <div className="">
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