import { Link } from "react-router-dom";
import { Form, Container, Div } from "./style";    
import Button from "../Button_detalhes";  
import ButtonModal from "../ButtonModal";
import axios from 'axios';

export default function Formulario_pedido(){   
    const [formData, setFormData] = useState({nome, plano, horario, status });
    const id = 1; // Substitua 1 pelo ID específico que deseja buscar

    useEffect(() => {
        // Faça a requisição GET assim que o componente for montado
        axios.get(`http://localhost:3000/order/${id}`)
          .then((response) => {
            // Verifique se a resposta foi bem-sucedida
            if (response.status === 200) {
              setFormData(response.data);
            } else {
              setError('Não foi possível buscar os dados.');
            }
          })
          .catch((err) => {
            setError('Ocorreu um erro ao buscar os dados.');
          });
      }, [id]);

      const handleAtenderSolicitacao = async () => {
        try {
          // Realiza uma requisição PUT para atualizar o status
          const response = await axios.put('http://localhost:3000/order/', {
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
      
    return(<> 

    <Container>
        <Form> 
        <label>Nome Cliente</label>
        <input
        type="text"
        id="nome"
        value={formData.nome || ''} 
        readOnly />
      
        <label>plano</label>
        <input
        type="text"
        id="plano"
        value={formData.plano || ''} 
        readOnly />


        <label>Horário sugerido</label>
        <input
        type="text"
        id="horario" 
        value={formData.horario || ''} 
        readOnly />

        <label>Status</label>
        <input
        type="text"
        id="status" 
        value={formData.status || ''} 
        readOnly />

<div>
         <Link to="/servico">
            <Button text="voltar" />
          </Link> 

          <Div> 
          <button onClick={handleAtenderSolicitacao}>atender solicitação</button>
          {/* <ButtonModal text="atender solicitação" /> */}
          </Div>
</div>

    </Form> 
    </Container> 
   
    </>);
    }

