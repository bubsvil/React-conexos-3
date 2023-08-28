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
//           <label>{label}</label>
//           <input type={type} value={value} disabled/>
//           </Form>
//       </>
//     );
//   }


import { Link } from "react-router-dom";
import { Form } from "./style";
import Button from "../Button_detalhes";

export default function Formulario_pedido(){

    return(<>
        <Form>
        <label>Nome Cliente</label>
        <input
        type="text"
        value="Joao"
        disabled
        />
        <label>servico</label>
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
        </Form>
    <div className="container_actions">
        <div className="button_voltar">
             <Link to="/detalhes">
             <Button text="teste" />
            </Link>
        </div>

        <div className="button_atender">
            <Link to="/detalhes">
            <Button text="teste" />
            </Link>
        </div>
        {/* fazer display flex, space-beetween, flex direction*/}
    </div>
    </>);
    }