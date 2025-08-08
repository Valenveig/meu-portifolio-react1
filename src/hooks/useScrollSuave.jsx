import { useEffect } from "react";

export default function useScrollSuave() {
  useEffect(() => {
    function handleClick(e) {
      const href = e.currentTarget.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const alvo = document.querySelector(href);
        if (alvo) {
          alvo.scrollIntoView({ behavior: "smooth" });
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener("click", handleClick));

    return () => {
      links.forEach(link => link.removeEventListener("click", handleClick));
    };
  }, []);
}
