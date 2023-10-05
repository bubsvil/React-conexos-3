import styled from "styled-components";

export const Form = styled.form`
  width: 450px;
  background-color: #fff;
  padding: 30px 35px;
  margin: 50px 0;
  border: 1px solid #b4b4b4;
  border-radius: 15px;

  input {
    width: 100%;  
    display: flex;
    margin-bottom: 15px;
  } 

  label { 
    font-weight: bold; 
  } 

  button { 
    width: 100%; 
    color: #276328; 
    border: 2px solid #276328; 
  background-color: #276328;
  color: #fff;
  padding: 10px 20px;
  margin: 15px 0 0;
  border: none;
  border-radius: 5px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  }
`;

export const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
`;
