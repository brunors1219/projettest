
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
        <Whatsapp/>
      </div>


     );
}
