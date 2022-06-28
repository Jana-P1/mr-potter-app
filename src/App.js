import { useState } from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [navLinks, setNavLinks] = useState([
    {url: "/characters", name: " Characters"},
    {url: "/spells", name: "Spells"},
    {url: "/books", name: "Books"}
  ])
  return (
    <>
      <NavBar navLinks={navLinks} />
    </>
  );
}

export default App;
