const Contact=()=>{
    return( 
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-1 p-7 ">
            <div>
                <h1 className="font-bold text-3xl py-5">Entre em <span className="text-green-600">Contato</span></h1>
                <p className="text-lg md:text-2xl">Tem dúvidas ou precisa de assistência? Preencha o formulário ou entre em contato pelos canais fornecidos.</p>
            </div>
            
            
        
            <div className="w-full md:w-[400px] mx-auto bg-gray-300 rounded-xl my-6 py-6 font-poppins">
                <h1 className=" text-xl font-bold text-center">Envia-nos um email</h1>
                <form
                    className="py-4"
                >
                    <div className="w-[80%] mx-auto py-3">
                        
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            className="w-full border py-1 pl-2 rounded-xl"
                            required
                            //value={name}
                            //onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="w-[80%] mx-auto py-3">
                        
                        <input
                            type="email"
                            placeholder="Digite seu Email"
                            className="w-full border py-1 pl-2 rounded-xl"
                            required
                            //value={email}
                            //onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="w-[80%] mx-auto py-3">
                        
                        <input
                            type="text"
                            placeholder="Assunto"
                            className="w-full border py-1 pl-2 rounded-xl"
                            required
                            //value={email}
                            //onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                
                    <div className="w-[80%] mx-auto py-3">
        
                        <textarea
                            placeholder="Texto"
                            className="w-full border pl-2 rounded-xl"
                            required
                            //value={message}
                            //onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className="w-[80%] mx-auto py-3">
                        <input
                            type="submit"
                            className="bg-renata-yellow  transform transition duration-200 ease-in text-xl text-black bg-white  rounded-lg font-semibold uppercase w-full py-3 hover:opacity-5"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;