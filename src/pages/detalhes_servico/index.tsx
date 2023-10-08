import Footer from "../../components/Footer";
import Formulario_pedido from "../../components/Formulario_pedido";

import React from "react";
import Header from "../../components/Header";
import TextoPrincipal from "../../components/TextoPrincipal";

export default function Detalhes_Servico() {
    return (
      <>
        <Header />
        <main className="flex">
          <TextoPrincipal
            titulo="Pedido #1283742"
            descricao="Área exclusiva para funcionários"
          />
          <Formulario_pedido/>
        </main>
        <Footer />
      </>
    );
  }
  