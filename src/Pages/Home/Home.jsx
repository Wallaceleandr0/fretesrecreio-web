import Banner from "../../Components/Banner/Banner";
import Contato from "../Contato/Contato";
import Depoimentos from "../Depoimentos/Depoimentos";
import Servicos from "../Servicos/Servicos";
import Sobre from "../Sobre/Sobre";
import Footer from "../../Components/Footer/Footer";
import "./Home.css"
import WhatsAppBtnBottom from "../../Components/WhatsAppBtnBottom/WhatsAppBtnBottom";

function Home() {
    return (
        <>
            <WhatsAppBtnBottom/>
            <Banner />
            <div className="Home">
                <Servicos />
                <Depoimentos />
                <Sobre />
                <Contato />
                <Footer />
            </div>
        </>
    )
}

export default Home