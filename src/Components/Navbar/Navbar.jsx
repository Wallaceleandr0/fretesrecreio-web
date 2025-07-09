import { useEffect, useState, useRef } from "react";
import "./Navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState("none");
  const ulRef = useRef(null);

  const handleMenuClick = () => {
    if (window.innerWidth < 770) {
      setShowMenu((prev) => (prev !== "flex" ? "flex" : "none"));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 770) {
        setShowMenu("flex");
      } else {
        setShowMenu("none");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Quando showMenu mudar, animar a ul via JS
    const ul = ulRef.current;
    if (!ul) return;

    if (showMenu === "flex") {
      ul.style.display = "flex";
      ul.style.opacity = 0;
      ul.style.transform = "translateY(-20px)";
      ul.style.transition = "opacity 0.3s ease, transform 0.3s ease";

      // Forçar reflow para ativar a transição
      void ul.offsetWidth;

      ul.style.opacity = 1;
      ul.style.transform = "translateY(0)";
    } else {
      // Quando esconder, animar para sumir
      ul.style.opacity = 0;
      ul.style.transform = "translateY(-20px)";
      ul.style.transition = "opacity 0.3s ease, transform 0.3s ease";

      // Depois do tempo da transição, esconder de fato (display none)
      const timeoutId = setTimeout(() => {
        ul.style.display = "none";
      }, 300);

      // Limpar timeout se showMenu mudar antes
      return () => clearTimeout(timeoutId);
    }
  }, [showMenu]);

  // Seu efeito de scroll suave (sem alteração)
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute("href");
      const id = href.slice(1);
      const target = document.getElementById(id);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        if (window.innerWidth < 770) {
          setShowMenu("none");
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <div className="Navbar">
      <header>
        <div className="FlexImgAndIcon">
          <a href="#"><img src="/img/logo.png" alt="Logo" /></a>
          <div className="IconMenuBurguer" onClick={handleMenuClick}>
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </div>
        </div>
        <nav>
          <ul ref={ulRef} style={{ display: showMenu }}>
            <li><a href="#Servicos">Serviços</a></li>
            <li><a href="#Sobre">Sobre nós</a></li>
            <li><a href="#Depoimentos">Depoimentos</a></li>
            <li><a href="#Contato">Contato</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
