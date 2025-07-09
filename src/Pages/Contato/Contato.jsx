import { useEffect, useRef, useState } from "react";
import "./Contato.css";

function Contato() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Abre a nova aba NA HORA do clique para evitar bloqueios
    window.open("https://www.fretesrecreio.com/Obrigado", "_blank");

    // Pega os dados do form
    const form = formRef.current;
    const formData = new FormData(form);

    try {
      // Envia via fetch para o formsubmit
      const response = await fetch("https://formsubmit.co/felipeconforte1@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Formulário enviado com sucesso!");
        form.reset();
      } else {
        alert("Erro ao enviar formulário. Tente novamente.");
      }
    } catch (error) {
      alert("Erro na conexão. Tente novamente.");
      console.error(error);
    }
  };

  return (
    <div className={`Contato ${visible ? "aparecer" : ""}`} id="Contato" ref={ref}>
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
        <form ref={formRef} onSubmit={handleSubmit}>
          <h3>Entre em contato conosco</h3>

          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Digite um email válido"
            required
          />

          <textarea
            name="message"
            placeholder="Preciso de um serviço para mudança..."
            required
          ></textarea>

          <input type="hidden" name="_captcha" value="false" />

          <button type="submit" id="btnSubmit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contato;
