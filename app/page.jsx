
import Cards from "./components/cardserv";
import Cliente from "./components/clientes";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Metodo from "./components/metodo";
import Sobre from "./components/sobre";
import Welcome from "./components/welcome";
import Whatsapp from "./components/whatsapp";


export default function Home() {
  return (
      <div>
        <Header/>
        <Welcome />
        <Sobre />
        <Metodo/>
        <Cards/>
        <Cliente/>
        <Contact/>
        <Footer/>
        <Whatsapp/>
      </div>


     );
}
