import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCharacters } from "../../services/api-calls";
import Character from "../../components/Character/Character";

const CharactersList = () => {
  const [characters, setCharacters] = useState([])
  
  useEffect(() => {
    getCharacters()
    .then(characterData => setCharacters(characterData))
  }, [])
  
  return ( 
    <>
      <h2>Harry Potter Characters</h2>
      <div>
        {characters.map(character => 
          <div key={character.id}>
            {character.character}
            <img src={character.image} alt="" />
          </div>
        )}
      </div>
    
    </>
   );
}
 
export default CharactersList ;