import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import "../styles/PokeCard.css"


const PokeCard = ({url}) => {

  const [infoPoke, getInfoPoke]= useFetch(url)
useEffect(()=>{
 getInfoPoke()
},[])

const navigate= useNavigate()

const handleNavigate =() => {
  navigate(`/pokedex/${infoPoke?.id}`)
}
  return (
    <article className="pokekard" onClick={handleNavigate}>
      <header className="pokekard_header">
        <img className="pokekard_image" 
        src={infoPoke?.sprites.other["official-artwork"].front_default} alt="" />
      </header>
      <section className="pokekard_body">
        <h3 className="pokekard_name">{infoPoke?.name}</h3>
        <ul className="pokekard_types">
          {
            infoPoke?.types.map((infoType)=>(
              <li className="pokekard_typesname" key={infoType.type.url}>{infoType.type.name}</li>
            ))
          }
        </ul>
        
        <hr className="pokekard_hr" />
        <ul className="pokekard_stats">
          {

            infoPoke?.stats.map((infoStat) =>(
              <li className="pokekard_stat" key={infoStat.stat.url}>   
                <h4 className="pokekard_stat_name">{infoStat.stat.name}</h4>
                <span className="pokekard_stat_value">{infoStat.base_stat}</span>
                </li> 
            ))
          }
        </ul>
      </section>
    </article>
  )
}

export default PokeCard