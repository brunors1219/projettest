import Image from "next/image";
import Detetive from "../img/image1.jpg";

function Welcome() {
    return (
        <div className="bg-cinzabg flex flex-col md:flex-row items-center px-4 py-10 md:px-7 py20  ">
            <div className="py-7 px-7 md:px-7 w-full md:w-[850px] space-y-5 md:space-y-10">
                <h1 className="text-4xl md:text-7x1 font-bold ">Descubra a <span className="text-green-700">Verdade. </span>
                    Investigação Privada <span className="text-green-700">Discreta e Profissional.</span></h1>
                <p className="text-xl md:text-2x1 font-medium">Oferecemos serviços de investigação confidenciais para ajudá-lo a encontrar respostas.</p>
                <button className="bg-gray-500 text-center text-xl font-bold w-[140px] h-[90px] rounded-xl shadow-md hover:opacity-65 transition duration-300 delay-150">Fale com um Detetive</button>
            </div>
            <div className="w-full md:w-[580px] h-[300px] md:h-[630px] rounded-lg shadow-xl shadow-black overflow-hidden mt-5 md:mt-0">
                <Image src={Detetive} alt='Imgem de um detetive' className="object-cover w-full h-full " />
            </div>
        </div>
    );
}

export default Welcome;