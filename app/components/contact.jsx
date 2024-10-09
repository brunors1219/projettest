'use client';

import { useState } from "react";
import  emailjs  from "@emailjs/browser";



const Contact=()=>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [assunto, setAssunto] = useState("");

 
    
    const handleSubmit = (e) => {
        e.preventDefault();

        window.location.reload(); // Recarrega a página inteira
        const serviceId ='service_bzoikxb';
        const templatId= 'template_jq0ywxl';
        const publicKey ='Kr78XsfERtr148GXd';

        const templateParams={
            to_name:"Detetive",
            from_name: name,
            from_email: email,
            client_assunto: assunto,
            client_message: message,
        }

        emailjs.send(serviceId, templatId, templateParams,publicKey)

        .they((response) => {
            console.log('Email enviado com sucesso', response);
            alert('email enviado com sucesso');
            setName('');
            setEmail('');
            setMessage('');
            setAssunto('');
        })
        .catch((error) => {
            console.error('erro', error);
        });
    }

    return( 
        <div id='contato' className="grid justify-items-center grid-cols-1 md:grid-cols-1 p-7 ">
            <div>
                <h1 className="font-bold text-3xl py-5">Entre em <span className="text-green-600">Contato</span></h1>
                <p className="text-lg md:text-2xl">Tem dúvidas ou precisa de assistência? Preencha o formulário ou entre em contato pelos canais fornecidos.</p>
            </div>
            
            
        
            <div className="w-full md:w-[400px] mx-auto bg-gray-300 rounded-xl my-6 py-6 font-poppins">
                <h1 className=" text-xl font-bold text-center">Envia-nos um email</h1>
                <form
                    onSubmit={handleSubmit}
                    className="py-4"
                >
                    <div className="w-[80%] mx-auto py-3">
                        
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            className="w-full border py-1 pl-2 rounded-xl"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="w-[80%] mx-auto py-3">
                        
                        <input
                            type="email"
                            placeholder="Digite seu Email"
                            className="w-full border py-1 pl-2 rounded-xl"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="w-[80%] mx-auto py-3">
                        
                        <input
                            type="text"
                            placeholder="Assunto"
                            className="w-full border py-1 pl-2 rounded-xl"
                            value={assunto}
                            onChange={(e) => setAssunto(e.target.value)}
                        />
                    </div>
                
                    <div className="w-[80%] mx-auto py-3">
        
                        <textarea
                            placeholder="Texto"
                            className="w-full border pl-2 rounded-xl"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className="w-[80%] mx-auto py-3">
                        <input
                            type="submit"
                            
                            className="transform transition duration-200 ease-in text-xl text-black bg-white  rounded-lg font-semibold uppercase w-full py-3 hover:opacity-5"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;