import Banner from "../../Components/Banner/Banner";
import Contato from "../Contato/Contato";
import Depoimentos from "../Depoimentos/Depoimentos";
import Servicos from "../Servicos/Servicos";
import Sobre from "../Sobre/Sobre";
import "./Home.css"

function Home() {
    return (
        <>
            <Banner />
            <div className="Home">
                <Servicos />
                <Depoimentos />
                <Sobre />
                <Contato />
            </div>
        </>
    )
}

export default Home