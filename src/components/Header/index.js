import {Nav} from './style'
import Selected from '../Selected'
import { useEffect, useState } from 'react'


const Header = ({handleTheme}) => {

  const [valor, setValor] = useState(1)
  const [appTheme, setAppTheme] = useState('Dark')
  useEffect(() => {
    handleTheme(appTheme)
  },)
  

  


  const handleChange = (event) => {
    setValor(event.target.value)
    if(event.target.value === '1'){
      setAppTheme('Dark')
      const savetheme = {Tema: "Dark", Valor: 1}
      localStorage.setItem('Tema', JSON.stringify(savetheme))
    }  
    if(event.target.value === '2'){
      setAppTheme('White')
      const savetheme = {Tema: "White", Valor: 2}
      localStorage.setItem('Tema', JSON.stringify(savetheme))
    }
  }

  useEffect(() =>{
    const loadTheme = localStorage.getItem('Tema')
    if(!loadTheme) return
    const Tema = JSON.parse(loadTheme)
    setAppTheme(Tema.Tema)
    setValor(Tema.Valor)
  },[])
  return (
    
    <Nav>
      <a href="https://www.linkedin.com/in/oliveiraster/" target="_blank" rel="noreferrer">
        <h1> <span className="material-symbols-outlined">
            badge
            </span> Raphael <span>Oliveira</span></h1>
      </a>
      {/* <ul>
        <li><a href="#"><span className="material-symbols-outlined">house</span>  Home </a></li>
        <li><a href=''><span className="material-symbols-outlined">perm_media</span> Projetos</a></li>
      </ul> */}
      <Selected valor={valor} Change={handleChange}  option={appTheme}/>
    </Nav>
  )
}
export default Header;
