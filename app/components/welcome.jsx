import Image from "next/image";
import Detetive from "../img/image1.jpg";

function Welcome() {
    return (
        <div className="bg-cinzabg flex items-center px-7 py-20">
            <div className="py-7 px-7 w-[850px] space-y-10">
                <h1 className="text-7xl font-bold ">Descubra a <span className="text-green-700">Verdade. </span>
                    Investigação Privada <span className="text-green-700">Discreta e Profissional.</span></h1>
                <p className="text-2xl font-medium">Oferecemos serviços de investigação confidenciais para ajudá-lo a encontrar respostas.</p>
                <button className="bg-gray-500 text-center text-xl font-bold w-[140px] h-[90px] rounded-xl shadow-md hover:opacity-65 transition duration-300 delay-150">Fale com um Detetive</button>
            </div>
            <div className="w-[580px] h-[610px] rounded-lg shadow-xl overflow-hidden ">
                <Image src={Detetive} alt='Imgem de um detetive' className="object-cover w-[580px] h-[610px] " />
            </div>
        </div>
    );
}

export default Welcome;