
import Button_detalhes from "../Button_detalhes";
import { Link } from "react-router-dom"
import { TituloCliente, ClienteStyled } from "./style";
import ButtonModal from "../ButtonModal"; 
import axios from 'axios';
import { useState, useEffect } from 'react';

function Painel() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Faça a requisição GET assim que o componente for montado
    axios.get('URL_DO_SEU_ENDPOINT_DE_DADOS')
      .then((response) => {
        // Verifique se a resposta foi bem-sucedida
        if (response.status === 200) {
          setData(response.data);
        } else {
          setError('Não foi possível buscar os dados.');
        }
      })
      .catch((err) => {
        setError('Ocorreu um erro ao buscar os dados.');
      });
  }, []);

  return (
    <div className="Painel">
      {error && <p>{error}</p>} 

      <TituloCliente> 
      <table>
        <thead>
          <tr>
            <th>Código de Acesso</th>
            <th>Nome do Cliente</th>
            <th>Serviço Solicitado</th>
            <th>Data de Contratação</th>
          </tr>
        </thead> 
        </TituloCliente> 
        <ClienteStyled>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.codigoAcesso}</td>
              <td>{item.nomeCliente}</td>
              <td>{item.servicoSolicitado}</td>
              <td>{item.dataContratacao}</td>
              <td>
                <Link to="/detalhe_servico">
                  <Button_detalhes onClick={fetchData} text="ver detalhes" />
                </Link>
              </td>
              <td>
                <ButtonModal text="atender solicitação" />
              </td>   
            </tr>  
          ))} 
           
        </tbody> 
        </ClienteStyled>
      </table>
    </div> 
  
  );
}

export default Painel;


// function funcionarios(
//   id: string,
//   nome: string,
//   servico: string,
//   data: string,
//   status: string,
// ) {
//   return { id, nome, servico, data, status };
// }

// const colunm = [
//   funcionarios('#7767631', 'Patrick', 'Plano Ouro - Instalação', '10-08-2024', 'Aguardando agendamento'),
//   funcionarios('#7767631', 'Rafaela', 'Plano Prata - Instalação', '09-10-2023', 'Aguardando agendamento'),
//   funcionarios('#7767631', 'Patrick', 'Plano Ouro - Instalação', '22-02-2024', 'Aguardando agendamento'),
//   funcionarios('#7767631', 'Rafaela', 'Plano Prata - Instalação', '19-12-2023', 'Aguardando agendamento')
// ];

// export default function Painel() {
//   return (
//     <>
// <TituloCliente> 
//   <h4>Código de acesso</h4>
//   <h4>Nome do cliente</h4>
//   <h4>Serviço solicitado</h4>
//   <h4>Data da contratação</h4>
//   <h4>Status</h4>
// </TituloCliente>

//       <ClienteStyled>

//         {colunm.map((colunm) => (
//           <tbody key={colunm.id}> 
//             <tr>
//               <td>{colunm.id}</td>
//               <td>{colunm.nome}</td>
//               <td>{colunm.servico}</td>
//               <td>{colunm.data}</td>
//               <td>{colunm.status}</td>
//               <td>
//                 <Link to="/detalhe_servico">
//                   <Button_detalhes text="ver detalhes" />
//                 </Link>
//               </td>
                // <Div>
                //     <td>
                //       <ButtonModal text="atender solicitação" />
                //     </td>
                //   </Div>
//             </tr>
//           </tbody>
//         ))}

//       </ClienteStyled>
//     </>
//   );
// }