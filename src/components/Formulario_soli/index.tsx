import { Form_soli, Container_soli} from "./style";

export default function Form_solicitacao() {

    return (<>

        <Container_soli>
            <Form_soli>
                <label for="nome">Nome Completo</label>
                <input type="text" id="Nome"/>

                    <label for="cpf">CPF</label>
                    <input type="number" id="cpf"/>

                        <label for="Telefone">Telefone para contato</label>
                        <input type="number" id="telefone"/>

                            <label for="email">Insira seu Email</label>
                            <input type="email" id="email"/>

                                <label for="plano">Selecione o plano</label>
                                <select>
                                    <option value="1">Bronze</option>
                                    <option value="2">Prata</option>
                                    <option value="3">Ouro</option>
                                </select>

                                <label for="plano">Preferência de horario para
                                    visita
                                    técnica</label>
                                <select>
                                    <option value="1">8:00 ás 12:00</option>
                                    <option value="2">12:00 ás 16:00</option>
                                    <option value="3">16:00 ás 20:00</option>
                                </select>

                                    <button type="button">Contratar</button>
                            

                            </Form_soli>
                        </Container_soli>

                    </>);
    } 
