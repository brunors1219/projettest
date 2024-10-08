'use client'
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestimonialsCard({ description, person }) {
    return (
        <div className="bg-white m-4 p-6 min-h-[450px] w-[90%] max-w-[420px] mx-auto shadow-xl shadow-black">
            <span className="text-4xl text-renata-yellow font-poppins font-bold">&quot;</span>
            <p>{description}</p>
            <h4 className="text-xl text-renata-yellow font-poppins font-semibold py-4 uppercase">- {person}</h4>
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
        <div className=" py-7 px-5 ">
            <h1 className="text-3xl font-bold">Depoimentos de Clientes</h1>
            <div className="flex items-center justify-center py-24 space-x-4">

                <div  className="grid p-4 w-[350px] h-[380px] justify-items-center bg-gray-300 rounded-lg">
                    <h1 className="text-3xl font-bold">João Silva</h1>
                    <p className="text-lg justify-center text-left ">"Eu estava em uma situação muito difícil e sem saber o que fazer. Graças ao profissionalismo e discrição do [Detetive], consegui as respostas que tanto precisava. A investigação foi rápida e extremamente eficiente. Recomendo sem hesitação!"</p>
                </div>

                <div  className="grid p-4 w-[350px] h-[380px] justify-items-center bg-gray-300 rounded-lg">
                    <h1 className="text-3xl font-bold">João Silva</h1>
                    <p className="text-lg justify-center text-left ">"Eu estava em uma situação muito difícil e sem saber o que fazer. Graças ao profissionalismo e discrição do [Detetive], consegui as respostas que tanto precisava. A investigação foi rápida e extremamente eficiente. Recomendo sem hesitação!"</p>
                </div>

                <div  className="grid p-4 w-[350px] h-[380px] justify-items-center bg-gray-300 rounded-lg">
                    <h1 className="text-3xl font-bold">João Silva</h1>
                    <p className="text-lg justify-center text-left ">"Eu estava em uma situação muito difícil e sem saber o que fazer. Graças ao profissionalismo e discrição do [Detetive], consegui as respostas que tanto precisava. A investigação foi rápida e extremamente eficiente. Recomendo sem hesitação!"</p>
                </div>

                <div  className="grid p-4 w-[350px] h-[380px] justify-items-center bg-gray-300 rounded-lg">
                    <h1 className="text-3xl font-bold">João Silva</h1>
                    <p className="text-lg justify-center text-left ">"Eu estava em uma situação muito difícil e sem saber o que fazer. Graças ao profissionalismo e discrição do [Detetive], consegui as respostas que tanto precisava. A investigação foi rápida e extremamente eficiente. Recomendo sem hesitação!"</p>
                </div>

                
            </div>
        </div>
    );
}

export default Cliente; 