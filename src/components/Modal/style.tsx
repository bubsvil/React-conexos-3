import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.624);
`;

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  color: #000000;
  border-radius: 10px;
  height: 300px;
  width: 300px;
`;