import Image from "next/image";
import icon1 from "../img/icon1.png";
import icon2 from "../img/icon2.png";
import icon3 from "../img/icon3.png";
import icon4 from "../img/icon4.png";
import React from "react";


function TestimonialsCard({ image, titulo, text }) {
    return (
        <div className="grid w-full md:w-[250px] h-[380px] bg-gray-300  justify-items-center rounded-xl shadow-lg shadow-black">
            <Image src={image} alt={`image de um ${image}`} />
            <h1 className="text-xl font-bold">{titulo}</h1>
            <p className="text-center text-lg justify-center items-center w-52">{text}</p>
        </div>
    );
}

function Cards() {



    return (
        <div id='servico' className="px-12 py-24 bg-cinzabg">
            <h1 className="text-3xl font-bold text-center pb-5">Nossos Serviços</h1>
            <p className="text-lg md:text-xl text-center">Oferecemos uma ampla gama de serviços de investigação, todos conduzidos com discrição e profissionalismo para atender às suas necessidades. Veja abaixo os principais serviços que oferecemos:</p>


            <div className="flex flex-col md:flex-row items-center py-24 space-y-2 md:space-x-5">



                <TestimonialsCard
                    image={icon1}
                    titulo="Serviço 1"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda expedita mollitia laudantium nobis minus, ipsum architecto totam quod adipisci corrupti"
                />
                <TestimonialsCard
                    image={icon2}
                    titulo="Serviço 2"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda expedita mollitia laudantium nobis minus, ipsum architecto totam quod adipisci corrupti"
                />

                <TestimonialsCard
                    image={icon3}
                    titulo="Serviço 3"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda expedita mollitia laudantium nobis minus, ipsum architecto totam quod adipisci corrupti"
                />
                <TestimonialsCard
                    image={icon4}
                    titulo="Servico 4"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda expedita mollitia laudantium nobis minus, ipsum architecto totam quod adipisci corrupti"
                />

            </div>




        </div>
    );
}

export default Cards;