import styled from "styled-components";

export const Form_soli = styled.form`
    background-color: #fff;
    color: black;
    width: 400px;
    height: 450px;  
    margin: 18px;
    border-radius: 10px; 
    display: flex; 
    flex-direction: column;   
    justify-items: center; 
    font-size: 12px;

    label {
    font-weight: bold; 
    display: flex; 
    flex-direction: column;   
    margin: 15px 0px 0px 20px;
    } 

    input { 
      width: 350px; 
      margin: 10px 20px 5px 20px;
    }
   
    select { 
      width: 350px; 
      margin: 10px 20px 5px 20px;
    }

    div {
      display: flex; 
      flex-direction: row;     
      align-items: center; 
      gap: 10px; 
    } 

    button {
background-color: #fff;
color: #276328;
padding: 8px 18px;
margin: 15px 0 0;
border: 1px solid #276328;
border-radius: 10px;
font-family: "Raleway", sans-serif;
font-weight: 700; 
display: flex;   
flex-direction: row;
text-decoration: none; 
width: 350px; 
text-align: center; 
margin: 10px 20px 5px 20px; 
justify-content: center;
align-items: center;
}

`;

export const Container_soli = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
`;

