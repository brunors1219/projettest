import Image from "next/image";
import icon1 from "../img/icon1.png";
import icon2 from "../img/icon2.png";
import icon3 from "../img/icon3.png";
import icon4 from "../img/icon4.png";




function Cards() {
    return (
        <div id='servico' className="px-12 py-24 bg-cinzabg">
            <h1 className="text-3xl font-bold text-center pb-5">Nossos Serviços</h1>
            <p className="text-lg md:text-xl text-center">Oferecemos uma ampla gama de serviços de investigação, todos conduzidos com discrição e profissionalismo para atender às suas necessidades. Veja abaixo os principais serviços que oferecemos:</p>


            <div className="flex flex-col md:flex-row items-center py-24 space-y-2 md:space-x-5">

                <div className="grid w-full md:w-[250px] h-[380px] bg-gray-300  justify-items-center rounded-xl shadow-lg shadow-black">
                    <Image src={icon1} alt='Balaça da justica'/>
                    <h1 className="text-xl font-bold">Coleta de Provas Judiciais</h1>
                    <p className="text-center text-lg justify-center items-center w-52">Oferecemos suporte completo na obtenção de provas para uso em processos legais,
                        com total respeito às normas e regulamentações.</p>
                </div>
                <div className="grid w-full md:w-[250px] h-[380px] bg-gray-300  justify-items-center rounded-xl shadow-lg shadow-black">
                    <Image src={icon2} alt='Balaça da justica'/>
                    <h1 className="text-xl font-bold">Investigação de Fraude</h1>
                    <p className="text-center text-lg justify-center items-center w-52">Análise de casos de fraude financeira, comercial ou de identidade.</p>
                </div>
                <div className="grid w-full md:w-[250px] h-[380px] bg-gray-300  justify-items-center rounded-xl shadow-lg shadow-black">
                    <Image src={icon3} alt='Balaça da justica'/>
                    <h1 className="text-xl font-bold">Consultoria em Segurança</h1>
                    <p className="text-center text-lg justify-center items-center w-52">Avaliação de riscos e recomendações para melhorar a segurança pessoal ou empresarial.
                    </p>
                </div>
                <div className="grid w-full md:w-[250px] h-[380px] bg-gray-300  justify-items-center rounded-xl shadow-lg shadow-black">
                    <Image src={icon4} alt='Balaça da justica'/>
                    <h1 className="text-xl font-bold">Consultoria em Segurança</h1>
                    <p className="text-center text-lg justify-center items-center w-52">Avaliação de riscos e recomendações para melhorar a segurança pessoal ou empresarial.
                    </p>
                </div>
                <div className="grid w-full md:w-[250px] h-[380px] bg-gray-300  justify-items-center rounded-xl shadow-lg shadow-black">
                    <Image src={icon4} alt='Balaça da justica'/>
                    <h1 className="text-xl font-bold">Consultoria em Segurança</h1>
                    <p className="text-center text-lg justify-center items-center w-52">Avaliação de riscos e recomendações para melhorar a segurança pessoal ou empresarial.
                    </p>
                </div>



                
            </div>




        </div>
    );
}

export default Cards;