// for NavBar, include:
// Links:
  // Home
  //  Characters
  //  spells
  //  Hogwarts Houses

  const NavBar = ({ navLinks }) => {

    return ( 
      <header className="NavBar">
        <div>
          <h1>Harry Potter App</h1>
        </div>
        {navLinks.map((navLink, idx) => 
          <a 
            key={idx} 
            href={navLink.url}
            >
              {navLink.name}
            </a>
        )}
      </header>
     );
  }
   
  export default NavBar;
