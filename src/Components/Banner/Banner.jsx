import { useEffect, useState } from "react"
import "./Banner.css"

function Banner() {

    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [banner, setBanner] = useState()

    // Atualiza o banner com base no tamanho da tela
    useEffect(() => {
        if (screenSize <= 500) {
        setBanner("/img/banner-principal-mobile.png");
        } else {
        setBanner("/img/banner-principal.png");
        }
    }, [screenSize]);

    // Adiciona o event listener para resize
    useEffect(() => {
        const handleResize = () => {
        setScreenSize(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Define o tamanho inicialmente
        handleResize();

        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <div className="Banner">
            <img src={`${banner}`} alt="" />
        </div>
    )
}

export default Banner