import styled from 'styled-components'

export const Select = styled.input`
width: 40px;

&[type=range] {
    -webkit-appearance: none;
    appearance: none;
    display: inline-block;
    height: 12px;
    width: 30px;
    border-radius: 10px;
    background-color:${props => props.theme.color_primary} ;
    outline: none;
    padding: 1px;
    cursor: pointer;
    
}

&[type=range]::-webkit-slider-thumb{
    border-radius: 50%;
}

&::-webkit-slider-thumb{

    all:unset; 
    -webkit-appearance: none; 
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${props => props.theme.color_bg_darkhome};
}

`

export const Fieldset = styled.fieldset`

border: none;
color: ${props => props.theme.text};
font-size: 10px;

legend{
    width: 40px;
    margin-bottom: 2px;
    padding: 2px;
    color: ${props => props.theme.color_text};
}


`