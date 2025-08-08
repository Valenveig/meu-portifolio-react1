import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Conhecimentos from "./components/Conhecimentos";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import ParticulasBG from "./components/ParticulasBG";
import Toast from "./components/Toast";
import useScrollSuave from "./hooks/useScrollSuave";
import useAnimacoesEntrada from "./hooks/useAnimacoesEntrada";

function App() {
  useScrollSuave();
  useAnimacoesEntrada();

  useEffect(() => {
    document.body.classList.remove("claro");
    localStorage.setItem("tema", "escuro");
  }, []);

  return (
    <BrowserRouter basename="/meu-portifolio-react1/">
      <ParticulasBG />
      <div className="scroll-container">
        <Header />
        {/* Você pode ter rotas aqui para diferentes páginas */}
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Sobre />
              <Conhecimentos />
              <Projetos />
              <Contato />
            </>
          } />
          {/* Exemplo de outra rota */}
          {/* <Route path="/outra-pagina" element={<OutraPagina />} /> */}
        </Routes>
        <Footer />
        <Toast />
      </div>
    </BrowserRouter>
  );
}

export default App;
