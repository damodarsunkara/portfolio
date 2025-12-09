import Navbar from './component/Navbar';
import About from './component/about';
import Project from './component/projects'
import Contact from './component/contact';
import Home from './home';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path='/about' Component={About} />
          <Route path='/projects' Component={Project}/>
          <Route path='/contact' Component={Contact}/>
        </Routes>
      </BrowserRouter>
    
    
    </>
  );
}

export default App;
