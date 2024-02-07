import styled from "styled-components";

export const SectionCard = styled.aside`

display: flex;
align-items: center;
flex-direction: column;
overflow: hidden;
height: 350px;
width: 200px;
margin: 15px;

background-color:${props => props.theme.card_background} ;
border: 1px solid ${props => props.theme.card_border};

border-radius: 20px;
padding: 25px;
padding-bottom: 5px;
transition: .5s;

&:hover{
    transition: .5s;
    box-shadow:0px 0px 5px 5px ${props => props.theme.card_shadow}, 0px 0px 5px 15px  ${props => props.theme.card_shadow2};
}
div.img{
    overflow: hidden;
    width: 100%;
    height: 70%;
    border-radius: 10px;
}

div.img img{
    width: 100%;
    height: 100%;
    transition: .5s;
}
div.img img:hover{
    cursor: pointer;
    transform: scale(1.1);
    
}

.text{
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 15px;
}
a{
    text-decoration: none;
}
.text h2{
    color: ${props => props.theme.card_title} ;
}

p.info{
    height: 30%;
    color: ${props => props.theme.card_text} ;
    font-size: 18px;
    font-weight: 300;   
}
hr{
    border-color:${props => props.theme.card_border};
}
.link{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.link a {
    width: 40%;
    padding: 5px;
    text-align: center;
    background-color:${props => props.theme.card_btn};;
    border-radius: 10px;
}
.link a p{
    color: white;
}
.link a:hover{
    
    box-shadow: 0px 0px 10px 5px ${props => props.theme.card_btn_hover} ;
}
`