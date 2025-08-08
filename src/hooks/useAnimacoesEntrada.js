import { useEffect } from "react";

const useAnimacoesEntrada = () => {
  useEffect(() => {
    const elementos = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visivel");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elementos.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useAnimacoesEntrada;
