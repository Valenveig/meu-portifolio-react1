import React from 'react';
import formularioThumb from '../assets/formulario-screenshot.png'; // Importa imagem da pasta assets

function Projetos() {
  function abrirModal(id) {
    // Abre o link em nova aba ao clicar no card
    window.open("https://valenveig.github.io/formulario-satisfacao/index.html", "_blank");
  }

  return (
    <section className="projetos fade" id="projetos">
      <div className="container cards">
        <div
          className="card"
          tabIndex="0"
          role="button"
          aria-label="Abrir detalhes do Projeto 1"
          onClick={() => abrirModal(1)}
          onKeyPress={e => e.key === 'Enter' && abrirModal(1)}
        >
          <img 
            src={formularioThumb} 
            alt="Miniatura do Formulário de Satisfação Império Laser" 
            className="miniatura-projeto"
          />
          <h3>Projeto 1</h3>
          <p>Formulário de Satisfação Império Laser.</p>
          <a
            href="https://valenveig.github.io/formulario-satisfacao/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="link-externo"
            aria-label="Ver Projeto 1 no GitHub"
          >
            
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
