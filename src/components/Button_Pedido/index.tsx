import { ButtonStyled } from "./styled";
import React from "react";
interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return <ButtonStyled>{text}</ButtonStyled>;
}
