import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  const miniProjects = {
    title: "Projectnp1"

  }
  return (
    <div className="App">
      <Navbar brand="Vaibhav" />
      <About />
      <Projects project={miniProjects} />
      <Contact email="" phoneNo="" linkedin="" />
    </div>
  );
}

export default App;
