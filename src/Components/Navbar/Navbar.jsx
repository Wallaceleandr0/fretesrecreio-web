import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState("none");

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

  // Esse efeito ativa o scroll suave para qualquer <a href="#...">
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
        // Fechar menu se mobile
        if (window.innerWidth < 770) {
          setShowMenu("none");
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
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
          <ul style={{ display: showMenu }}>
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
