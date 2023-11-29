import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import '../components/styles/PokeInfo.css'

const PokeInfoPage = () => {
  const { id } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const [pokemon, getPokemon] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, []);
  console.log(pokemon);
  return (
    <article>
      <img className="poke_info_img"
        src={pokemon?.sprites.other["official-artwork"].front_default}
        alt=""
      />
      <h2 className="poke_info_h2">{pokemon?.name}</h2>
    </article>
  );
};

export default PokeInfoPage;
