import { useEffect, useRef, useState } from "react";
import "./Servicos.css";
import WhatsAppBtn from "../../Components/WhatsAppBtn/WhatsAppBtn";

function Servicos() {
  // refs para os dois containers
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  // estados para visibilidade dos containers
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible1(true);
          observer1.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible2(true);
          observer2.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref1.current) observer1.observe(ref1.current);
    if (ref2.current) observer2.observe(ref2.current);

    return () => {
      if (ref1.current) observer1.unobserve(ref1.current);
      if (ref2.current) observer2.unobserve(ref2.current);
    };
  }, []);

  return (
    <div className="Servicos" id="Servicos">
      <h2>SERVIÇOS</h2>

      <div
        ref={ref1}
        className={`Container slide-up ${visible1 ? "aparecer" : ""}`}
      >
        <img src="img/funcionarios.jpg" alt="" />
        <div className="TextBox">
          <h3>MUDANÇA RESIDENCIAL</h3>
          <p>
            Casas, apartamentos e condomínios, oferecemos a desmontagem o
            empacotamento dos móveis e o transporte com agilidade e segurança!
          </p>
          <WhatsAppBtn />
        </div>
      </div>

      <div
        ref={ref2}
        id="Container2"
        className={`Container ${visible2 ? "aparecer" : ""}`}
      >
        <div className="TextBox">
          <h3>MUDANÇA COMERCIAL</h3>
          <p>
            Também atendemos escritórios, galpões e centros logísticos onde
            realizamos todas as etapas do transporte de móveis e equipamentos.
          </p>
          <WhatsAppBtn />
        </div>
        <img src="img/transportes-e-mudancas-BN2.jpg" alt="" />
      </div>
    </div>
  );
}

export default Servicos;
