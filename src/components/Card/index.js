import { useState } from 'react'
import {SectionCard} from './style'
import NotFound from '../../assets/pc_oliver.jpg'
const Card = ({name, repo, user, description}) => {
    
    const [resultImg, setResultImg] = useState()
    const [resultSite, setResultSite] = useState()


    const image = `https://raw.githubusercontent.com/Oliveiraster/${name}/main/image.png`
    const site = `https://${user}.github.io/${name}/`

    const checkOnlineStatus = async (check, ret) => {
        try {
          const online = await fetch(check);
          if(online.status >= 200 && online.status < 300){
            ret(true)
          }else {
            ret(false)
          }
        } catch (e) {
        
        }
      };
      checkOnlineStatus(site, setResultSite)
      checkOnlineStatus(image, setResultImg)
    if(name === user){
        return 
    }
    
    
    return (
      <SectionCard>

        {resultImg && resultSite ? (
                       
          <div className="img">
            <a href={site} target="_blank" rel="noreferrer">
             <img src={image} alt={name}/>             
              <div className="sobre"></div>
            </a>
          </div>
        ): ( 

          <div className="img">
            <img src={NotFound} alt={name}/>
            <div className="sobre"></div>
                  
          </div>
            )}
          <div className="text" >
            <h2>{name}</h2>
            <p className="info">{description}</p>
            <hr/>
            <div className="link">
              {resultSite ?  (
                  <a href={site} target="_blank" rel="noreferrer">
                  <p className="info">Site</p>
              </a>
              ): null}
              <a href={repo} target="_blank" rel="noreferrer">
                  <p className="info">Code</p>
              </a>
            </div>
          </div>
        
      </SectionCard>
    )
  }
  export default Card;