import logoConexos from "../../assets/conexos-logo-black.svg";
import { Container, FooterStyled } from "./style";
import React from "react";

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
