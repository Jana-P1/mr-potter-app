// for NavBar, include:
// Links:
  // Home
  //  Characters
  //  spells
  //  Hogwarts Houses

  const NavBar = ({ navLinks }) => {

    return ( 
      <header className="NavBar">
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
