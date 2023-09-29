import styled from "styled-components";

export const Form_soli = styled.form`
    background-color: #fff;
    color: #276328;
    width: 400px;
    height: 430px;  
    margin: 18px;
    border-radius: 15px; 
    display: flex; 
    flex-direction: column;   
    justify-items: center; 
    font-size: 12px;

    label {
    font-weight: bold; 
    display: flex; 
    flex-direction: column;   
    margin-left: 25px;
    margin-top: 5px; 
    margin-bottom: 5px;
    } 

    input { 
      width: 350px;  
      height: 25px; 
      margin-left: 25px;
      margin-top: 5px; 
      margin-bottom: 5px;
      border-radius: 5px;  
      border: 1px solid #000; 
      
    }
   
    select { 
      width: 350px;  
      height: 25px; 
      margin-left: 25px;
      margin-top: 5px; 
      margin-bottom: 5px;
      border-radius: 5px; 
      border: 1px solid #000;
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
margin-top: 15px; 
margin: 22px;
width: 350px; 
border: 1px solid #276328;
border-radius: 10px;
font-family: "Raleway", sans-serif;
font-weight: 700; 
display: flex;   
flex-direction: row;
text-decoration: none; 
text-align: center; 
justify-content: center;
align-items: center;
}

`;

export const Container_soli = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
`;

