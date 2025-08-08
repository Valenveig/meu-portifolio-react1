import React from 'react';

function Conhecimentos() {
  return (
    <section className="conhecimentos fade" id="conhecimentos">
      <div className="container">
        <h2>Conhecimentos</h2>
        <p>*passe o cursor nos cards para ler*</p>
        <div className="cards-conhecimentos">
          <div className="card-conhecimentos tooltip" tabIndex="0" aria-describedby="tooltip-html5">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="Logo da linguagem HTML5" />
            <p>HTML5</p>
            <span className="tooltip-text" id="tooltip-html5" role="tooltip">Linguagem de marcação usada para estruturar conteúdos na web.</span>
          </div>
          <div className="card-conhecimentos tooltip" tabIndex="0" aria-describedby="tooltip-css3">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="Logo da linguagem CSS3" />
            <p>CSS3</p>
            <span className="tooltip-text" id="tooltip-css3" role="tooltip">Usado para estilizar elementos visuais e layouts de páginas.</span>
          </div>
          <div className="card-conhecimentos tooltip" tabIndex="0" aria-describedby="tooltip-js">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Logo da linguagem JavaScript" />
            <p>JavaScript</p>
            <span className="tooltip-text" id="tooltip-js" role="tooltip">Adiciona interatividade e dinamicidade à web.</span>
          </div>
          <div className="card-conhecimentos tooltip" tabIndex="0" aria-describedby="tooltip-react">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="Logo da biblioteca React" />
            <p>React</p>
            <span className="tooltip-text" id="tooltip-react" role="tooltip">Biblioteca JavaScript focada em interfaces modernas.</span>
          </div>
          <div className="card-conhecimentos tooltip" tabIndex="0" aria-describedby="tooltip-python">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Logo da linguagem Python" />
            <p>Python</p>
            <span className="tooltip-text" id="tooltip-python" role="tooltip">Linguagem versátil, ideal para automações e dados.</span>
          </div>
          <div className="card-conhecimentos tooltip" tabIndex="0" aria-describedby="tooltip-figma">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Logo da ferramenta de design Figma" />
            <p>Figma</p>
            <span className="tooltip-text" id="tooltip-figma" role="tooltip">Ferramenta de design colaborativo para UI/UX.</span>
          </div>
          <div className="card-conhecimentos tooltip" tabIndex="0" aria-describedby="tooltip-uxui">
            <img src="https://cdn-icons-png.flaticon.com/512/1234/1234512.png" alt="Ícone representando design UX e UI" />
            <p>UX/UI</p>
            <span className="tooltip-text" id="tooltip-uxui" role="tooltip">Design centrado no usuário e em boas experiências.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Conhecimentos;
