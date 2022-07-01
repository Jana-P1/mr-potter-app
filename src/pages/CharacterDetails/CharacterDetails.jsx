import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCharacterDetails } from "../../services/api-calls";

const CharacterDetails = (props) => {
  const [characterDetails, setCharacterDetails] = useState({})

  let location = useLocation()
  useEffect(() => {
    getCharacterDetails(location.state.character.url)
    .then(characterDetails => setCharacterDetails(characterDetails))
  }, [])

  return ( 
    <>
      <h2>Here are the deets on this character</h2>
    </>
   );
}
 
export default CharacterDetails;