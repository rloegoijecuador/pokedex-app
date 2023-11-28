import { useRef } from "react";
import { setTrainerName } from "../store/slices/trainerName.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../components/styles/HomePage.css'

const HomePage = () => {
  const inputName = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerName(inputName.current.value.trim()));
    navigate("/pokedex");
  };
  return (
    <div className="Home__div">
      <h1 className="Home__h1">pokedex</h1>
      <h2 className="Home__h2">hi trainer</h2>
      <p className="Home__p">for init say your name</p>
      <form onSubmit={handleSubmit}>
        <input ref={inputName} type="text" />
        <button>chose anywhere pokemom</button>
      </form>
    </div>
  );
};

export default HomePage;
