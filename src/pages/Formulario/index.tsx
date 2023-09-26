import Footer from "../../components/Footer";
import Form_solicitacao from "../../components/Formulario_soli";

import Header from "../../components/Header";
import TextoPrincipal from "../../components/TextoPrincipal";

export default function Formulario_soli() {
    return (
      <>
        <Header />
        <main className="flex">
          <TextoPrincipal
            titulo= "Contratação do plano" 
            descricao=""
          />
          <Form_solicitacao/>
        </main>
        <Footer />
      </>
    );
  }
  