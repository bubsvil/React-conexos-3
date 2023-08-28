import logoConexos from "../../assets/logo-conexos-white.png";
import { HeaderStyled, Container, Menu } from "./style";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> a970226f7f46316c01aac4fe6431140fdc665f18

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <Container>
          <img src={logoConexos} alt="Logo Conexos" />

          <Menu>
            <ul>
              <li>
<<<<<<< HEAD
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/servicos">Serviços</Link>
              </li>
              <li>
                <Link to="/relatorios">Relatórios</Link>
=======
                <a href="">Início</a>
              </li>
              <li>
                <a href="">Serviços</a>
              </li>
              <li>
                <a href="#">Relatórios</a>
>>>>>>> a970226f7f46316c01aac4fe6431140fdc665f18
              </li>
            </ul>
          </Menu>
        </Container>
      </HeaderStyled>
    </>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> a970226f7f46316c01aac4fe6431140fdc665f18
