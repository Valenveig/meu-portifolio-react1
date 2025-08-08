import React, { useEffect } from "react";
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
<link rel="stylesheet" href="/meu-portifolio-react1/style.css" />


function App() {
  useScrollSuave();
  useAnimacoesEntrada();

  useEffect(() => {
    // Remove o tema claro e garante que o escuro esteja ativo
    document.body.classList.remove("claro");
    localStorage.setItem("tema", "escuro");
  }, []);

  return (
    <>
      <ParticulasBG />
      <div className="scroll-container">
        <Header />
        {/* ToggleTema removido */}

        <Hero />
        <Sobre />
        <Conhecimentos />
        <Projetos />
        <Contato />

        <Footer />
        <Toast />
      </div>
    </>
  );
}

export default App;
