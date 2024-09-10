import styled from "styled-components"

export const FooterInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    border: 1px solid #ff0000;

`

export const FooterList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row; 
    justify-content: center; 
    align-items: center;    
    padding: 0;
`

export const FooterItem = styled.li`
  padding: 5px;
    margin: 5px 12px;
    display: flex;
    flex-direction: column; /* Coloca o conteúdo na vertical */
    align-items: center;

    span {
        font-size: 0.8rem; 
        color: #7f8c8d; 
        margin-top: 4px; 
    }
`
export const Link = styled.a`

    text-decoration: none;
    color: white;
   
    &:hover{

        color: #ff0000;
    
    }


`