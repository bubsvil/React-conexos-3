import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: #79B07A;
`;

export const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  img {
    width: 150px;
    height: 50px; 
  }
`;



export const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    li {
      padding: 10px;
      a:any-link {
        color: black;
        text-decoration: none;
      }
    }
  }
`;
