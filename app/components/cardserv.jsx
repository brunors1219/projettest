import Image from "next/image";
import icon1 from "../img/icon1.png";


function Cards() {
    return (
        <div className="px-12 py-24 bg-cinzabg">
            <h1 className="text-3xl font-bold text-center pb-5">Nossos Serviços</h1>
            <p className="text-2xl text-center">Oferecemos uma ampla gama de serviços de investigação, todos conduzidos com discrição e profissionalismo para atender às suas necessidades. Veja abaixo os principais serviços que oferecemos:</p>


            <div className="flex  flex-col md:flex-row items-center py-24 space-y-4 md:space-x-5">

                <div className="grid w-[300px] h-[380px] bg-gray-300  justify-items-center rounded-xl shadow-2xl">
                    <Image src={icon1} alt='Balaça da justica'/>
                    <h1 className="text-xl font-bold">Coleta de Provas Judiciais</h1>
                    <p className="text-center text-lg justify-center items-center w-52">Oferecemos suporte completo na obtenção de provas para uso em processos legais,
                        com total respeito às normas e regulamentações.</p>
                </div>


                <div className="grid w-[300px] h-[380px] bg-gray-300  justify-items-center rounded-xl shadow-2xl">
                    <Image src={icon1} alt='Balaça da justica'/>
                    <h1 className="text-xl font-bold">Coleta de Provas Judiciais</h1>
                    <p className="text-center text-lg justify-center items-center w-52">Oferecemos suporte completo na obtenção de provas para uso em processos legais,
                        com total respeito às normas e regulamentações.</p>
                </div>


                <div className="grid w-[300px] h-[380px] bg-gray-300  justify-items-center rounded-xl shadow-2xl">
                    <Image src={icon1} alt='Balaça da justica'/>
                    <h1 className="text-xl font-bold">Coleta de Provas Judiciais</h1>
                    <p className="text-center text-lg justify-center items-center w-52">Oferecemos suporte completo na obtenção de provas para uso em processos legais,
                        com total respeito às normas e regulamentações.</p>
                </div>



                <div className="grid w-[300px] h-[380px] bg-gray-300  justify-items-center rounded-xl shadow-2xl">
                    <Image src={icon1} alt='Balaça da justica'/>
                    <h1 className="text-xl font-bold">Coleta de Provas Judiciais</h1>
                    <p className="text-center text-lg justify-center items-center w-52">Oferecemos suporte completo na obtenção de provas para uso em processos legais,
                        com total respeito às normas e regulamentações.</p>
                </div>
            </div>




        </div>
    );
}

export default Cards;