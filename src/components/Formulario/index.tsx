import Button from "../Button";
import FormField from "../FormField";
import { Form, Container } from "./style";

export default function Formulario() {
  return (
    <>
      <Container>
        <Form>
          <FormField
            label="código de acesso"
            name="codigo_acesso"
            type="text"
          />

          <FormField label="Senha" name="senha" type="password" />

          <Button text="entrar" />
        </Form>
      </Container>
    </>
  );
}
