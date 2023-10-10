//parte patrick

import React from "react";
import { Form, Container } from "./style";
import { useState, FormEventHandler } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Formulario() {
  const [codigoAcesso, setCodigo] = useState("");
  const [password, setSenha] = useState(""); 
  const [error, setError] = useState('');

  const logar: FormEventHandler<HTMLFormElement> = (evento) => {
    // evita recarregamento da página no envio do formulário
    evento.preventDefault();
    // pra ver o que vem no parâmetro evento
    // console.log(evento);
    // pra ver o valor de cada campo do formulário
    console.log(codigoAcesso);
    console.log(password);
  }; 

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/auth', {
        codigoAcesso: codigoAcesso,
        password: password
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
            value={codigoAcesso}
            onChange={(e) => setCodigo(e.target.value)}
          />

          <label>senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setSenha(e.target.value)}
          />
           <Link to="/servico">
          <button onClick={handleLogin}>entrar</button>
          </Link>
          {error && <p>{error}</p>} 
        </Form>
      </Container> 

    </>
  );
}
