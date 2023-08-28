import logoConexos from "../../assets/logo-conexos-white.png";
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
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/servicos">Serviços</Link>
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
