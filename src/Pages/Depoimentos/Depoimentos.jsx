import { useEffect, useRef, useState } from "react";
import "./Depoimentos.css";

function Depoimentos () {
    const depoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect(); // desconecta após ativar
                    }
                });
            },
            { threshold: 0.3 } // 30% da div visível já ativa
        );

        if (depoRef.current) {
            observer.observe(depoRef.current);
        }

        return () => {
            if (depoRef.current) {
                observer.unobserve(depoRef.current);
            }
        };
    }, []);

    return (
        <div 
            className={`Depoimentos ${isVisible ? 'visible' : ''}`} 
            id="Depoimentos" 
            ref={depoRef}
        >
            <h2>O que os clientes dizem</h2>
            <p>Confira as experiências dos nossos clientes satisfeitos</p>
            <div className="DepoimentosContainer">
                {/* Box dos depoimentos */}
                <div className="Box">
                    <img src="/img/erik.png" alt="Erik Mascarenhas"/>
                    <p>"A transportadora superou minhas expectativas! A entrega foi rápida e tudo chegou em perfeito estado. Recomendo a todos!"</p>
                    <p>Erik Mascarenhas</p>
                </div>
                <div className="Box">
                    <img src="/img/daiana.png" alt="Daiana Jorkoski"/>
                    <p>"Excelente serviço! A equipe foi pontual e muito atenciosa durante toda a mudança. Com certeza usarei novamente."</p>
                    <p>Daiana Jorkoski</p>
                </div>
                <div className="Box">
                    <img src="/img/marcos.png" alt="Marcos Santos"/>
                    <p>"Muito satisfeita com o atendimento! O processo foi tranquilo, sem imprevistos, e tudo foi entregue com segurança."</p>
                    <p>Marcos Santos</p>
                </div>
            </div>
        </div>
    );
}

export default Depoimentos;
