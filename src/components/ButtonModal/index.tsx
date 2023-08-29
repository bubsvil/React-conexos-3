import { ButtonStyled } from "./style";
import { useState } from "react";
import Modal from "../Modal";

interface ButtonProps {
  text: string;
}

function ButtonModal({ text }: ButtonProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <ButtonStyled onClick={() => setOpen(!open)}>{text}</ButtonStyled>{" "}
      <Modal
        isOpen={open}
        setOpen={setOpen}
        title={"Titulo do Modal"}
        description={"Descrição"}
      />
    </>
  );
}

export default ButtonModal;