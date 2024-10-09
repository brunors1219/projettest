import Image from "next/image";
import Image2 from "../img/image2.jpg"


function Sobre (){
    return(
        <div className="grid grid-cols-1  xl:grid-cols-2 bg-cinzabg pt-7 gap-5 px-4">
            <Image className=" w-full h-[300px] md:w-[650px] md:h-[650px] opacity-90 object-cover" src={Image2} alt='Detetive'/>
            <div className="w-full md:w-[600px] space-x-5">
                <h1 className="text-2x1 md:text-3xl font-bold pb-3">Conhecendo</h1>
                <h2 className="tex-xl md:text-2xl font-bold py-3">Quem sou eu?</h2>
                <p className="text-lg md:text-xl">Olá, sou [Nome do Detetive], um detetive particular especializado em fornecer soluções confiáveis para quem busca a verdade. Cada investigação que conduzo é tratada com total sigilo e atenção aos detalhes, para garantir que você receba as respostas de que precisa.</p>
                <h2 className="text-xl md:text-2xl font-bold py-3">Por que me Contratar?</h2>
                <p className="text-lg md:text-xl">Com vasta experiência em investigações privadas, já solucionei diversos casos complexos com discrição e eficácia, utilizando técnicas modernas e seguras para garantir precisão em cada detalhe.</p>
            </div>
        </div>
    );
}

export default Sobre;