import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { useState } from 'react';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Forms from './components/Forms'


function App() {
  const [currentPage, setCurrentPage] = useState('')
  return (
    <div className="App">
      <Nav currentPage={currentPage} setCurrentPage ={setCurrentPage}/>
      {currentPage===''? <AboutMe/>:''}
      {currentPage==='About Me'?<AboutMe/>:''}
      {currentPage==='Portfolio'? <Projects/>: ''}
      {currentPage==='Leave me a message'? <Forms/>: ''}
      <Footer/>
    
    </div>
  );
}

export default App;
