import { Link } from "react-router-dom";
const Character = ({ character }) => {
  
  return ( 
    <>
      <Link 
        to={'/characters/' + character.id} 
        state={{ character }}>
          <div>
            <p>{character.character}</p>
            <img src={character.image} alt=''/>

          </div>
        </Link>
    
    </>
   );
}
 
export default Character;

