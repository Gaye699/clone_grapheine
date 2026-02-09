import React, { useEffect, useState } from "react";
import "../assets/style/header.css";

export default function Header() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const headerEl = document.getElementById("site-header");
    const mainEl = document.getElementById("main-content") || document.querySelector("main");
    if (!mainEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          headerEl?.classList.add("is-light");
          setIsLight(true);
        } else {
          headerEl?.classList.remove("is-light");
          setIsLight(false);
        }
      },
      { rootMargin: "-80px 0px 0px 0px" }
    );

    observer.observe(mainEl);

    return () => observer.disconnect();
  }, []);

  return (
    <header id="site-header" className={`header ${isLight ? "is-light" : ""}`}>
      <div className="container">
        <nav>
          <div className="brand">
            <a href="/" aria-label="Accueil">graphéine</a>
            <span className="tagline">design & stratégie</span>
          </div>

          <ul className="nav-list">
            <li><a href="/work">Work</a></li>
            <li><a href="/expertises">Expertises</a></li>
            <li><a href="/studio">Studio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
