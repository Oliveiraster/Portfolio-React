import styled from "styled-components";

export const SectionMe = styled.section`

display: flex;
align-items: center; 
justify-content: space-between;
max-width: 900px;
margin: 5em;

& > div#foto > img{
    width: min(35vw, 300px);
    height: min(35vw, 300px);
    border-radius: 50%; 
}

#texto{
    max-width: 60%;
}

#texto > h1{
    color: ${props => props.theme.color_title};
    font-size: min(4.5vw, 45px);
}

#texto > p{
    
    color: ${props => props.theme.color_text};
    font-size: min(3.1vw, 25px) ;
    margin-top: 20px;
}


`