import styled from "styled-components";

export const Container = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
background-color: ${props => props.theme.color_bg_darkhome};
`

export const SectionProject = styled.section`
& h1{
    width: 100%;
    padding: 30px;
    text-align: center;
    color: red;
    margin: 50px;
    color: ${props => props.theme.color_primary};
    background-color: ${props => props.theme.color_bg_emphasis};
    border: 1px solid ${props => props.theme.color_primary};
    border-radius: 4em 0;
    
}
max-width: 1300px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
`