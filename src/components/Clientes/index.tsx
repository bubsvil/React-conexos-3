
import Button_detalhes from "../Button_detalhes";
import { Link } from "react-router-dom"
import { TituloCliente, ClienteStyled, Div } from "./style";
import ButtonModal from "../ButtonModal";

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
  funcionarios('#7767631', 'Patrick', 'Plano Ouro - Instalação', '10-08-2024', 'Aguardando agendamento'),
  funcionarios('#7767631', 'Rafaela', 'Plano Prata - Instalação', '09-10-2023', 'Aguardando agendamento'),
  funcionarios('#7767631', 'Patrick', 'Plano Ouro - Instalação', '22-02-2024', 'Aguardando agendamento'),
  funcionarios('#7767631', 'Rafaela', 'Plano Prata - Instalação', '19-12-2023', 'Aguardando agendamento')
];

export default function Painel() {
  return (
    <>
<TituloCliente> 
  <h4>Código de acesso</h4>
  <h4>Nome do cliente</h4>
  <h4>Serviço solicitado</h4>
  <h4>Data da contratação</h4>
  <h4>Status</h4>
</TituloCliente>

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
                <Link to="/detalhe_servico">
                  <Button_detalhes text="ver detalhes" />
                </Link>
              </td>
                <Div>
                    <td>
                      <ButtonModal text="atender solicitação" />
                    </td>
                  </Div>
            </tr>
          </tbody>
        ))}

      </ClienteStyled>
    </>
  );
}