import styled from "styled-components";

export const Nav = styled.nav `
overflow: hidden;
font-size:min(18px, 2.5vw );
width: 100%;
display: flex;
background-color:${props => props.theme.color_bg_emphasis} ;
padding-bottom: 10px;
justify-content: space-evenly;
border-radius: 0px 0px 80% 80%;


& a{
    text-decoration: none;
}

& ul li a span {
    vertical-align: text-bottom;
}

& h1 span{
    color:  ${props => props.theme.color_primary};
}

&  ul {
    display: flex;
    cursor:pointer;
}

& ul li { 
    margin: auto;
    margin-left: 5px;
    list-style: none;
    padding: 4px; 
    border-radius: 10px;
    transition: .5s; 
    color: ${props => props.theme.color_bg_darkhome} ;
   
}

& ul li a{
    color: ${props => props.theme.color_primary} ;
}

& ul li:hover{
    background-color: ${props => props.theme.color_bg_darkhome};
    box-shadow:  0px 0px 10px ${props => props.theme.color_primary} ;   
    border-radius: 5px;
    transition: .5s;
}

& h1{
    text-align: center;
    padding: 10px;
    color: ${props => props.theme.color_title}; 
    
}

`