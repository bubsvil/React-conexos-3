import { ButtonStyled } from "./styled";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return <ButtonStyled>{text}</ButtonStyled>;
}