'use client'

import { FaWhatsapp } from "react-icons/fa";
import { useUnits } from '@/app/context/Units';



function Whatsapp() {

    const whatsappContacts = useUnits();
    const whatsappNumber = whatsappContacts[0]?.contato;
    

    return (
        <a
            href={`https://wa.me/send?phone=${whatsappNumber}`}
            target="_blank"
            className="fixed bottom-5 right-9 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-black transition duration-300"
        ><FaWhatsapp className="size-9"/></a>
    );
}

export default Whatsapp;

