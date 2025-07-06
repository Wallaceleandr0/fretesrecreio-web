import { useEffect, useRef, useState } from "react";
import "./Sobre.css";

function Sobre() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      className={`Sobre ${visible ? "aparecer" : ""}`}
      id="Sobre"
      style={{ overflow: "hidden" }}
      ref={ref}
    >
      <div className="Container-1">
        <h2>Sobre a Transportadora Conforte</h2>
      </div>
      <div className="Container-2">
        <p>
          A Transportadora Conforte atua há mais de 10 anos no setor de
          transporte, destacando-se pela qualidade e foco na satisfação do
          cliente.
        </p>
        <p>
          Reconhecida como referência no mercado, a empresa se consolidou como
          sinônimo de confiança e eficiência.
        </p>
        <p>
          Comprometida com a melhoria contínua e expansão, a Conforte segue
          dedicada a oferecer um serviço confortável e confiável, reafirmando
          seu papel como a escolha preferida de transporte em todo o país.
        </p>
      </div>
    </div>
  );
}

export default Sobre;
