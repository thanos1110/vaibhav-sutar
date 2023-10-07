import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import React, { useState } from 'react';
function App() {
  const miniProjects = {
    title: "Projectnp1"

  }
  const [myTheme, setMyTheme] = useState({
    color: "black",
    backgroundColor: "White",
    theme: "Light"
  })
  const changeTheme = () => {
    if (myTheme.color === "black") {
      setMyTheme({
        color: "white",
        backgroundColor: "black",
        theme: "Dark"
      })
    } else {
      setMyTheme({
        color: "black",
        backgroundColor: "White",
        theme: "Light"
      })
    }
  }
  return (
    <div className="App" style={myTheme}>
      <Navbar brand="Vaibhav" changeTheme={changeTheme} myTheme={myTheme} />
      <About myTheme={myTheme} />
      <Projects project={miniProjects} />
      <Contact email="" phoneNo="" linkedin="" />
    </div>
  );
}

export default App;
