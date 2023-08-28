
import Button_detalhes from "../Button_detalhes";
import { Link } from "react-router-dom"
import { ClienteStyled } from "./style";

function funcionarios(
    id: string,
    nome: string,
    servico: string,
    data: string,
    status: string,
) {
    return { id, nome, servico, data, status };
}

const colunm = [
    funcionarios('#7767631', 'Nicollas', 'Plano Ouro - Instalação', '10-08-2024', 'Aguardando agendamento'),
    funcionarios('#7767631', 'Rodrigo', 'Plano Prata - Instalação', '09-10-2023', 'Aguardando agendamento'),
    funcionarios('#7767631', 'Nicollas', 'Plano Ouro - Instalação', '22-02-2024', 'Aguardando agendamento'),
    funcionarios('#7767631', 'Rodrigo', 'Plano Prata - Instalação', '19-12-2023', 'Aguardando agendamento')
];



export default function Painel() {
    return (
        <>
              <ClienteStyled>
                

            {colunm.map((colunm) => (
              <tbody key={colunm.id}>
                <tr>
                  <td>{colunm.id}</td>
                  <td>{colunm.nome}</td>
                  <td>{colunm.servico}</td>
                  <td>{colunm.data}</td>
                  <td>{colunm.status}</td>
                  <td>
                    <Link to="/detalhes">
                      <Button_detalhes text="ver detalhes" />
                    </Link>
                  </td>
             
                </tr>
              </tbody>
            ))}
 
      </ClienteStyled>
    </>
  );
}