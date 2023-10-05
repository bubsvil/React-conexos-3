import { Form, Container } from "./style";
import { useState, FormEventHandler } from "react";
import axios from 'axios';

export default function Formulario() {
  const [codigo, setCodigo] = useState("");
  const [senha, setSenha] = useState(""); 
  const [error, setError] = useState('');

  const logar: FormEventHandler<HTMLFormElement> = (evento) => {
    // evita recarregamento da página no envio do formulário
    evento.preventDefault();
    // pra ver o que vem no parâmetro evento
    // console.log(evento);
    // pra ver o valor de cada campo do formulário
    console.log(codigo);
    console.log(senha);
  }; 

  const handleLogin = async () => {
    try {
      const response = await axios.post('URL_DO_SEU_ENDPOINT_DE_LOGIN', {
        codigo: codigo,
        senha: senha,
      });

      // Verifique a resposta do servidor e tome ações apropriadas
      if (response.data.success) {
        // Login bem-sucedido
        // Você pode armazenar o token de autenticação no estado global ou em cookies/localStorage
      } else {
        // Login falhou
        setError(response.data.message);
      }
    } catch (error) {
      setError('Ocorreu um erro ao processar a solicitação.');
    }
  };

  return (
    <>
      <Container>
        <Form onSubmit={logar}>
          <label>código de acesso</label>
          <input
            type="text"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />

          <label>senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button onClick={handleLogin}>entrar</button>
          {error && <p>{error}</p>} 
          
        </Form>
      </Container> 

    </>
  );
}
