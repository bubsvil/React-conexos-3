import Header from "../../components/Header";
import TextoPrincipal from "../../components/TextoPrincipal";
import Footer from "../../components/Footer";
import Painel from "../../components/Clientes";



export default function Servicos() {
  return  (
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