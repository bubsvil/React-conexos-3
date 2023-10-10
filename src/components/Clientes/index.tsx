import Button_detalhes from "../Button_detalhes";
import { Link } from "react-router-dom"
import { Div } from "./style"; 
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from "react";

function Painel() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');


  useEffect(() => {
    // Faça a requisição GET assim que o componente for montado
    axios.get('http://localhost:3000/order')
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

  const handleAtenderSolicitacao = async () => {
    try {
      // Realiza uma requisição PUT para atualizar o status
      const response = await axios.put(`http://localhost:3000/order/6`, {
        status: 'Em andamento',
      });

      // Verifica se a resposta foi bem-sucedida
      if (response.status === 200) {
        setStatus('Em andamento'); // Atualiza o estado local com o novo status
        console.log('Status atualizado com sucesso para "Em andamento".');
      } else {
        setError('Não foi possível atualizar o status.');
      }
    } catch (err) {
      setError('Ocorreu um erro ao atualizar o status.');
    }
  };

  return ( 
    <Div>
    <table>
    <div className="Painel">
      {error && <p>{error}</p>} 
    
        <thead>
          <tr>
            <th>Código de Acesso</th>
            <th>Nome do Cliente</th>
            <th>Serviço Solicitado</th>
            <th>Horário</th>
            <th>Status</th>
            <th>Detalhe</th>
          </tr>
        </thead> 
        <tbody>
        
          {data.map((item, index) => (
            <tr key= {index}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.plano}</td>
              <td>{item.horario}</td>
              <td>{item.status}</td>
              <td>
                <Link to={`/detalhe_servico/${item.id}`}>
                <Button_detalhes text="ver detalhes"/>
                </Link>
              </td>
            </tr>  
          ))} 
           
        </tbody> 
    </div> 
    </table>
    </Div>
  );
}

export default Painel;

// Após o clique do botão, e antes de ir para a próxima página, salvar o id do elemento que foi clicado no localStorage da aplicação.
// Antes de mostrar, na página dos detalhes de um serviço, o formulário com as informações associadas, vocês devem ter uma verificação
// do tipo: se o valor do detalhesServico for igual a nulo vocês devem renderizar alguma informação de "Carregando os detalhes."
// Agora, se ele for diferente de nulo, vocês sabem que a requisição foi efetuada corretamente pelo useEffect desse componente.

/*
  -- arquivo tsx

  interface DetalhesServico {
    id number
    ...
  }

  -- corpo do componente
  const [detalhesServico, setDetalhesServico] = useState({})

  useEffect(() => {
    const id = localStorage.getItem("idServico")

    const respo
  }, [])
*/

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
//                 <Div>
//                     <td>
//                       <ButtonModal text="atender solicitação" />
//                     </td>
//                   </Div>
//             </tr>
//           </tbody>
//         ))}

//       </ClienteStyled>
//     </>
//   );
// }