
import Painel from "../../components/Clientes";
// import ButtonPedido from "../../components/ButtonPedido";
import Footer from "../../components/Footer";
import React from "react";
import Header from "../../components/Header";
import TextoPrincipal from "../../components/TextoPrincipal";

export default function Servicos() {
  return (
    <>
      <Header />
      <main className="flex">
        <TextoPrincipal
          titulo="Painel de Controle"
          descricao="Área exclusiva para funcionários."
        />
        
        <Painel/>
      
      </main>
      <Footer />
    </>
  );
}
