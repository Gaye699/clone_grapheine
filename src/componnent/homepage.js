import React from "react";
import Header from "./composant/header";
import Gallery from "./composant/gallery";
import Footer from "./composant/footer";

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <div className="container">
          <Gallery />
        </div>
      </main>
      <Footer />
    </>
  );
}
