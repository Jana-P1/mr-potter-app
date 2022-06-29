import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCharacters } from "../../services/api-calls";
import CharacterCard from "../../components/CharacterCard/CharacterCard";

const CharactersList = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharacters()
    .then(characterData => setCharacters(characterData))
  }, [])
  return ( 
    <>
      <h2>Characters of Harry Potter</h2>
      <div className="character-container">


      </div>
    </>
   );
}
 
export default CharactersList ;