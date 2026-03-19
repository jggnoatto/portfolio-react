import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Componentes/Home/home';
import ProjectPage from './Componentes/ProjectPage/projectPage';


function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
