import Image from "next/image";
import Logo from "../img/detetive.png";
import React from "react";

function Footer(){
    return(
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 space-y-3 md:space-x-3 p-7 bg-cinzabg border-collapse">
                <Image src={Logo} alt="Logo"/>
            
                <div className=" grid ">
                    <h3 className="text-xl font-bold">Menu</h3>
                    <a className="text-lg hover:text-white transition duration-300 delay-150" href="">Home</a>
                    <a className="text-lg hover:text-white transition duration-300 delay-150" href="">Sobre</a>
                    <a className="text-lg hover:text-white transition duration-300 delay-150" href="">Contato</a>
                </div>
                <div className="grid">
                    <h3 className="text-xl font-bold">Contato</h3>
                    <p className="text-lg">Telefone: <a className="text-lg hover:text-white transition duration-300 delay-150" href="">(XX) XXXX-XXXX</a></p>
                    <p className="text-lg">E-mail: <a className="text-lg hover:text-white transition duration-300 delay-150" href="">contato@detectivexyz.com</a></p>
                </div>
        </div>

            <div className="text-center bg-cinzabg"><p >© 2024 Agência XYZ de Detetives | Todos os direitos reservados</p></div>
        </div>

        
    );
}

export default Footer;