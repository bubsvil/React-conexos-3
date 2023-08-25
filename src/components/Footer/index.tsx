import logoConexos from "../../assets/logo-conexos-white.png";
import { Container, FooterStyled } from "./style";

export default function Footer() {
  return (
    <>
      <FooterStyled>
        <Container>
          <img src={logoConexos} alt="Logo Conexos" />

          <p>
            Projeto desenvolvido na academia Aprendiz Vivo Tech - Gama Academy
          </p>
        </Container>
      </FooterStyled>
    </>
  );
}
