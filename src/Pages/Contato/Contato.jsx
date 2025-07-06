import { useEffect, useRef, useState } from "react";
import "./Contato.css";

function Contato() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // desconecta depois que apareceu, pra não ficar observando à toa
        }
      },
      {
        threshold: 0.1, // 10% do elemento visível pra ativar
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      className={`Contato ${visible ? "aparecer" : ""}`}
      id="Contato"
      ref={ref}
    >
      <div className="TextBox">
        <div>
          <h3>LIGUE PARA NÓS</h3>
          <p>(21) 97007-7278</p>
        </div>
        <div>
          <h3>ENDEREÇO</h3>
          <p>Av Guiomar de Novais n° 80</p>
        </div>
        <div>
          <h3>HORÁRIO COMERCIAL</h3>
          <p>Seg - Dom: 24 hrs</p>
        </div>
      </div>
      <div className="FormBox">
        <form action="">
          <h3>Entre em contato conosco</h3>
          <input type="text" placeholder="Enter your Name" />
          <input type="email" placeholder="Enter a valid email address" />
          <textarea placeholder="Preciso de um serviço para mudança.."></textarea>
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contato;
