import { Form_soli, Container_soli } from "./style";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

interface FormData {
  nomeCompleto: string;
  email: string;
  telefone: string;
  cpf: string;
  plano: string;
  horario: string;
}

const planos = ['Bronze', 'Prata', 'Ouro'];
const horarios = ['8:00 às 12:00', '12:00 às 16:00', '16:00 às 20:00'];

const Form_solicitacao: React.FC = () => {
  const { handleSubmit, control} = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // Substitua 'sua_url_de_envio' pela URL do seu endpoint
      const response = await axios.post('sua_url_de_envio', data);
      // Lide com a resposta da API (por exemplo, exiba uma mensagem de sucesso)
      console.log('Resposta da API:', response.data);
    } catch (error) {
      // Lide com erros (por exemplo, exiba uma mensagem de erro)
      console.error('Erro ao enviar dados:', error);
    }
  };

  return ( 

    <Container_soli>
       <Form_soli> 

    <form onSubmit={handleSubmit(onSubmit)}>
   
        <label htmlFor="nomeCompleto">Nome Completo:</label>
        <Controller
          name="nomeCompleto"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({ field }) => <input {...field} />}
        />

    <label htmlFor="cpf">CPF:</label>
        <Controller
          name="cpf"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório', pattern: /^\d+$/ }}
          render={({ field }) => <input {...field} />}
        />

<label htmlFor="telefone">Telefone para contato:</label>
        <Controller
          name="telefone"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório', pattern: /^\d+$/ }}
          render={({ field }) => <input {...field} />}
        />

        <label htmlFor="email">E-mail:</label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({ field }) => <input {...field} />}
        />
        
        <label htmlFor="plano">Plano:</label>
        <Controller
          name="plano"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({ field }) => (
            <select {...field}>
              <option value="">Selecione um plano</option>
              {planos.map((plano) => (
                <option key={plano} value={plano}>
                  {plano}
                </option>
              ))}
            </select>
          )}
        />
    
        <label htmlFor="horario">Selecione horário para visita técnica:</label>
        <Controller
          name="horario"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({ field }) => (
            <select {...field}>
              <option value="">Selecione um horário</option>
              {horarios.map((horario) => (
                <option key={horario} value={horario}>
                  {horario}
                </option>
              ))}
            </select>
          )}
        />
       
    
        <button type="submit">Confirmar</button>
     
    </form> 
    </Form_soli>
        </Container_soli>
  );
}; 



export default Form_solicitacao;