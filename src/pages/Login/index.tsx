import Footer from "../../components/Footer";
import Formulario from "../../components/Formulario";
import Header from "../../components/Header";
import TextoPrincipal from "../../components/TextoPrincipal";

export default function Login() {
  return (
    <>
      <Header />
      <main className="flex">
        <TextoPrincipal
          titulo="Painel de Controle"
          descricao="Área exclusiva para funcionários."
        />
        <Formulario />
      </main>
      <Footer />
    </>
  );
}
