import Button from "../Button";
import { Form, Container } from "./style";
import { useState, FormEventHandler } from "react";

export default function Formulario() {
  const [codigo, setCodigo] = useState("");
  const [senha, setSenha] = useState("");

  const logar: FormEventHandler<HTMLFormElement> = (evento) => {
    // evita recarregamento da página no envio do formulário
    evento.preventDefault();
    // pra ver o que vem no parâmetro evento
    // console.log(evento);
    // pra ver o valor de cada campo do formulário
    console.log(codigo);
    console.log(senha);
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

          <Button text="entrar" />
        </Form>
      </Container>
    </>
  );
}