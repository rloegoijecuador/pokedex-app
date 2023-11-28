import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import PokeCard from "../components/pokedexpage/PokeCard";
import SelectType from "../components/pokedexpage/SelectType";
import '../components/styles/PokedexPage.css'

const PokedexPage = () => {
  const [inputValue, setinputValue] = useState('')
  const [selectValue, setSelectValue] = useState('allPoquemons')

  const trainerName = useSelector((store) => store.trainerName)
  const url = " https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  const [ pokemons, getPokemons ,getByTyPokemons] = useFetch(url)
  useEffect(() => {
    if(selectValue === 'allPoquemons'){
      getPokemons()
    }else{
      getByTyPokemons(selectValue)
    }
    getPokemons()
  }, [selectValue]);
  

   const inputSearch= useRef()
   const handleSubmit = e => {
    e.preventDefault()
  setinputValue( inputSearch.current.value.toLowerCase().trim())
  inputSearch.current.value=''
   }
   const cbFilter = (poke)=>{
    //filtro por nombre por el input
    const nameFiltered = poke.name.includes(inputValue)
      return nameFiltered
    //filtro por tipo con el select
    const typeFiltered=poke.type
    return nameFiltered

   }
  return (
    <div className="div">
      <p className="p">
        welcome <span>{trainerName}</span> , here choose yuor favorit pokemons 
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <input className="input" ref={inputSearch} type="text" />
        <button className="search">search</button>
      </form>
      <SelectType 
      setSelectValue={setSelectValue } 
     
      />
      <div>
        {
          pokemons?.results.filter(cbFilter).map(poke =>(
            <PokeCard
            key={poke.url}
            url={poke.url}
            />
          ))
        }
      </div>
    </div>
  );
};
//https://pokeapi.co/api/v2/pokemon/1/
export default PokedexPage;
