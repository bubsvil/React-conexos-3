import { Form_soli, Container_soli } from "./style"; 
import React, { useState } from 'react';
import axios from 'axios';

function Form_solicitacao() {
  const [dados, setDados] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    plano: '', 
    horario: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados({
      ...dados,
      [name]: value, 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aqui você pode enviar os dados para um servidor usando Axios
    axios.post('http://localhost:5173/formulario', dados)
      .then((response) => {
        console.log('Dados enviados com sucesso:', response.data);
      })
      .catch((error) => {
        console.error('Erro ao enviar os dados:', error);
      });
  };

  return (
    <Container_soli>
      <Form_soli>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome Completo:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={dados.nome}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="cpf">CPF:</label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          value={dados.cpf}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="telefone">Telefone para Contato:</label>
        <input
          type="text"
          id="telefone"
          name="telefone"
          value={dados.telefone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={dados.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="plano">Plano:</label>
        <select id="plano" name="plano" value={dados.plano} onChange={handleChange}>
          <option value="Bronze">Bronze</option>
          <option value="Prata">Prata</option>
          <option value="Ouro">Ouro</option>
        </select>
      </div>
      <div>
        <label htmlFor="horario">Horário:</label>
        <select id="horario" name="horario" value={dados.horario} onChange={handleChange}>
          <option value="8:00 às 12:00">8:00 às 12:00</option>
          <option value="12:00 às 16:00">12:00 às 16:00</option>
          <option value="16:00 às 20:00">16:00 às 20:00</option>
        </select>
      
      </div>
      <button type="submit">Confirmar</button> 
    </form>

    </Form_soli>
        </Container_soli> 
  );
}

export default Form_solicitacao;








// import { Form_soli, Container_soli } from "./style"; 
// import {EnviarFormulario} from "./script";
// import { useForm, Controller } from 'react-hook-form';
// import axios from 'axios';

// interface FormData {
//   nome: string;
//   email: string;
//   telefone: string;
//   cpf: string;
//   plano: string;
//   horario: string;
// }

// const planos = ['Bronze', 'Prata', 'Ouro'];
// const horarios = ['8:00 às 12:00', '12:00 às 16:00', '16:00 às 20:00'];

// const Form_solicitacao: React.FC = () => {
//   const { handleSubmit, control} = useForm<FormData>();

//   const onSubmit = async (data: FormData) => {
//     try {
//       const response = await axios.post('/formulario', data);
//       console.log('Confirmado', response.data);
//     } catch (error) {
//       console.error('Erro ao enviar dados:', error);
//     }
//   };

//   return ( 

//   <EnviarFormulario>
//     <Container_soli>
//        <Form_soli> 

//     <form onSubmit={handleSubmit(onSubmit)}> 
   
//         <label htmlFor="nome">Nome Completo:</label>
//         <Controller
//           name="nome"
//           control={control}
//           defaultValue=""
//           rules={{ required: 'Campo obrigatório' }}
//           render={({ field }) => <input {...field} />}
//         />

//     <label htmlFor="cpf">CPF:</label>
//         <Controller
//           name="cpf"
//           control={control}
//           defaultValue=""
//           rules={{ required: 'Campo obrigatório', pattern: /^\d+$/ }}
//           render={({ field }) => <input {...field} />}
//         />

// <label htmlFor="telefone">Telefone para contato:</label>
//         <Controller
//           name="telefone"
//           control={control}
//           defaultValue=""
//           rules={{ required: 'Campo obrigatório', pattern: /^\d+$/ }}
//           render={({ field }) => <input {...field} />}
//         />

//         <label htmlFor="email">E-mail:</label>
//         <Controller
//           name="email"
//           control={control}
//           defaultValue=""
//           rules={{ required: 'Campo obrigatório' }}
//           render={({ field }) => <input {...field} />}
//         />
        
//         <label htmlFor="plano">Plano:</label>
//         <Controller
//           name="plano"
//           control={control}
//           defaultValue=""
//           rules={{ required: 'Campo obrigatório' }}
//           render={({ field }) => (
//             <select {...field}>
//               <option value="">Selecione um plano</option>
//               {planos.map((plano) => (
//                 <option key={plano} value={plano}>
//                   {plano}
//                 </option>
//               ))}
//             </select>
//           )}
//         />
    
//         <label htmlFor="horario">Selecione horário para visita técnica:</label>
//         <Controller
//           name="horario"
//           control={control}
//           defaultValue=""
//           rules={{ required: 'Campo obrigatório' }}
//           render={({ field }) => (
//             <select {...field}>
//               <option value="">Selecione um horário</option>
//               {horarios.map((horario) => (
//                 <option key={horario} value={horario}>
//                   {horario}
//                 </option>
//               ))}
//             </select>
//           )}
//         />
       
    
//        <button type="button" id="submitform">Contratar</button>
     
//     </form> 
//     </Form_soli>
//         </Container_soli>  
//        </EnviarFormulario>
//   );
// }; 



// export default Form_solicitacao;