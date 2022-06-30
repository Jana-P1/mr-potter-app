import { Link } from "react-router-dom";
const Character = ({ character }) => {
  
  return ( 
    <>
    <Link
      to={"/characters" + character._id}
      state={{ character }}
      className='character-link'
    >
    <div>
      <img src={character.image} alt=""
      className="character-image"
      />
      <p>{character.character}</p>
    </div>
    </Link>
    
    </>
   );
}
 
export default Character;

