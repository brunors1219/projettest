import Image from "next/image";
import Image2 from "../img/image2.jpg"


function Sobre (){
    return(
        <div className="grid grid-cols-2 bg-cinzabg pt-7">
            <Image className="w-[650px] h-[650px] opacity-90" src={Image2} alt='Detetive'/>
            <div className="w-[600px] ">
                <h1 className="text-3xl font-bold pb-5">Conhecendo</h1>
                <h2 className="text-2xl font-bold py-5">Quem sou eu?</h2>
                <p className="text-xl">Olá, sou [Nome do Detetive], um detetive particular especializado em fornecer soluções confiáveis para quem busca a verdade. Cada investigação que conduzo é tratada com total sigilo e atenção aos detalhes, para garantir que você receba as respostas de que precisa.</p>
                <h2 className="text-2xl font-bold py-5">Por que me Contratar?</h2>
                <p className="text-xl">Com vasta experiência em investigações privadas, já solucionei diversos casos complexos com discrição e eficácia, utilizando técnicas modernas e seguras para garantir precisão em cada detalhe.</p>
            </div>
        </div>
    );
}

export default Sobre;