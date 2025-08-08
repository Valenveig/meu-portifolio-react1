import React from "react";

function Hero() {
  return (
    <section className="hero fade" id="home">
      <div className="container hero-content">
        <img src="/foto-sobre.jpg" alt="Foto da Valen" className="foto-apresentacao" />
        <div className="texto-apresentacao">
          <h1>Olá, eu sou a Valengardd!</h1>
          <p>Designer e desenvolvedora apaixonada por criar experiências incríveis.</p>
          <div className="botoes-hero">
            <a href="/Pacotes.pdf" target="_blank" rel="noopener noreferrer" className="btn">
  Pacotes
</a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secundario whatsapp-btn"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
