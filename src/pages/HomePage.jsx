import { useRef } from "react";
import { setTrainerName } from "../store/slices/trainerName.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1>pokedex</h1>
      <h2>hi trainer</h2>
      <p>for init say your name</p>
      <form onSubmit={handleSubmit}>
        <input ref={inputName} type="text" />
        <button>chose anywhere pokemom</button>
      </form>
    </div>
  );
};

export default HomePage;
