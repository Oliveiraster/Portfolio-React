import styled from "styled-components";

export const Rodape = styled.footer`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.color_bg_emphasis};
padding: 10px 0px;
width: 100%;

& p {
    color: ${props => props.theme.color_title};
}
& a{
    text-decoration: none;  
}
`