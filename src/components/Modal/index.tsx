import { Container, StyledModal } from "./style";

interface IModal {
  isOpen?: boolean;
  setOpen: (isOpen: boolean) => void;
  title: string;
  description: string
}

export default function Modal({ isOpen, setOpen, title, description }: IModal) {
  if (isOpen) {
    return (
      <Container>
        <StyledModal>
          <h2>{title}</h2>
          <p>{description}</p>
          <button onClick={() => setOpen(!isOpen)}>Fechar</button>
        </StyledModal>
      </Container>
    );
  } else {
    return <></>;
  }
}