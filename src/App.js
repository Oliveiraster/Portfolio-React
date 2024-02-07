import theme from './theme'
import {SectionProject ,Container} from './style'
import { ThemeProvider } from 'styled-components'

import Footer from './components/Footer';
import Header from './components/Header';
import SectionMe from './components/About'
import Card from './components/Card'



import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState('Oliveiraster')
  const [dataUser, setDataUser] = useState('')
  const [repos, setRepos] = useState('')
  const [Tema, setTema] = useState('Dark')

  const resultTheme = r => setTema(r)

  useEffect(() => {
    const handleGetData = async () => {
      const userData = await fetch(`https://api.github.com/users/${user}`)
      const newUser = await userData.json()
      setUser(newUser.login)
      const {avatar_url, name, bio, login} = newUser
      setDataUser({avatar_url, name, bio, login})

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
      const newRepos = await reposData.json()
      setRepos(newRepos)
    }
    handleGetData()
    console.log('foi consumiu API')
  },[user])

  return (

    
   <ThemeProvider theme={theme[Tema]} >
    <Container>
      <Header handleTheme={resultTheme}/>
      <SectionMe img={dataUser.avatar_url} description={dataUser.bio}/>
      <SectionProject >
        <h1>PROJETOS</h1>
        {repos?(
          
        repos.map(repo => <Card name={repo.name} user={user} description={repo.description} repo={repo.html_url}/>)
        ): null}
      </SectionProject>
     <Footer />
    </Container>
   </ThemeProvider>
  
  );
}

export default App;
