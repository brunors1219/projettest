import Image from 'next/image';
import Logo from '../img/detetive.png';
import Link from 'next/link';

function Header() {
    return (
        <div className="py-7 px-7 bg-cinzabg grid grid-cols-2 items-center ">
            <Image className='size-14' src={Logo} alt='Logo' />

            <nav className="flex space-x-4 justify-end items-center font-serif text-xl px-5">
                <Link href='/' className="hover:text-white transition duration-300 delay-150">Home</Link>
                <Link href='/' className="hover:text-white transition duration-300 delay-150">Sobre</Link>
                <Link href='/' className="hover:text-white transition duration-300 delay-150">Serviços</Link>
                <Link href='/' className="hover:text-white transition duration-300 delay-150">Contato</Link>
            </nav>
        </div>
    );

}

export default Header;