// import { Form } from "./style"

// interface ServicoProps{
//     label: string;
//     value: string;
//     type: string;
// }

// export default function FormularioInterno({ label, type, value }: ServicoProps) {
//     return (
//       <>
//         <Form>
//          <label>{label}</label>
//           <input type={type} value={value} disabled/>
//           </Form>
//       </>
//     );
//   }

import { Link } from "react-router-dom";
import { Form, Container, Div } from "./style";    
import Button from "../Button_detalhes";  
import ButtonModal from "../ButtonModal";


export default function Formulario_pedido(){

    return(<> 

    <Container>
        <Form> 
        <label>Nome Cliente</label>
        <input
        type="text"
        value="Joao"
        disabled
        />
        <label>Servico</label>
        <input
        type="text"
        value="Plano 1 - Instalação"
        disabled
        />
         <label>Data da contratação</label>
        <input
        type="text"
        value="26/06/2023"
        disabled
        />
        <label>Horário sugerido</label>
        <input
        type="text"
        value="08:00 - 12:00"
        disabled
        />
        <label>Status</label>
        <input
        type="text"
        value="Aguardando agendamento"
        disabled
        /> 

<div>
         <Link to="/detalhes">
            <Button text="voltar" />
          </Link> 

          <Div>
          <ButtonModal text="atender solicitação" />
          </Div>
</div>

    </Form> 
    </Container> 
   
    </>);
    }

