import logoConexos from "../../assets/conexos-logo-black.svg";
import { HeaderStyled, Container, Menu } from "./style";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <Container>
          <img src={logoConexos} alt="Logo Conexos" />

          <Menu>
            <ul>
              <li>
                <Link to="/login">Inicio</Link>
              </li>
              <li>
                <Link to="/servico">Serviços</Link>
              </li>
              <li>
                <Link to="/relatorios">Relatórios</Link>
              </li>
            </ul>
          </Menu>
        </Container>
      </HeaderStyled>
    </>
  );
}
