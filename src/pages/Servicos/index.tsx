import Button from "../../components/Button";
import ButtonPedido from "../../components/ButtonPedido";
// import ButtonPedido from "../../components/ButtonPedido";
import Footer from "../../components/Footer";
import Formulario_pedido from "../../components/Formulario_pedido";
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
        <Formulario_pedido/>
        <ButtonPedido/>
      </main>
      <Footer />
    </>
  );
}
