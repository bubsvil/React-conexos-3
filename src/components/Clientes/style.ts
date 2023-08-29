import styled from "styled-components"


export const TituloCliente = styled.main` 
  background-color: #fff;
  width: 0 auto;
  height: 0 auto;
  margin: 18px; 
  font-size: 12px;  
  font-weight: bold;
  display:flex;
  flex-direction: row;    
  justify-content: space-around;
  border-bottom: solid black; 
  gap: 10px;
`

export const ClienteStyled = styled.main` 
  background-color: #fff;
  width: 0 auto;
  height: 0 auto;
  margin: 18px;    
  display: flex; 
  justify-content: space-around; 
  flex-direction: column;

  tr {
  width: 100%;
}

td, th {
  padding: 9px;
  text-align: center;
  font-size: 12px;   
  
} 
`;

export const Div = styled.div` 

button {
background-color: #fff;
color: #276328;
padding: 8px 18px;
margin: 15px 0 0;
border: 2px solid #276328;
border-radius: 10px;
font-family: "Raleway", sans-serif;
font-weight: 700;  
font-size: 12px;
display: flex;   
flex-direction: row;
text-decoration: none;
}
`;
