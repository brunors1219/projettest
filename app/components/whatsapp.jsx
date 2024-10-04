import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
    return (
        <a
            href="https://wa.me/5531996268192"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
        ><FaWhatsapp className="size-9"/></a>
    );
}

export default Whatsapp