'use client';

import { useState } from 'react';
import Image from 'next/image';
import Logo from '../img/detetive.png';
import Link from 'next/link';



function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (
    <div className="py-7 px-7 bg-cinzabg grid grid-cols-2 items-center ">
      <Image className='size-14' src={Logo} alt='Logo' />

      {/* Botão de Hambúrguer para dispositivos móveis */}
      <div className="ml-auto block md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black flex ">
          {/* Ícone do hambúrguer */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menu de navegação */}
      <nav className={`flex-col md:flex-row space-x-4 justify-end items-center font-serif text-xl px-5 ${isOpen ? 'block' : 'hidden'} md:flex`}>
        <Link href='#home' className="hover:text-white transition duration-300 delay-150">Home</Link>
        <Link href='#sobre' className="hover:text-white transition duration-300 delay-150">Sobre</Link>
        <Link href='#servico' className="hover:text-white transition duration-300 delay-150">Serviços</Link>
        <Link href='#contato' className="hover:text-white transition duration-300 delay-150">Contato</Link>
      </nav>
    </div>
    );

}

export default Header;