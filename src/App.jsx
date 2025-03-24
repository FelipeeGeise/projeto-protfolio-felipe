
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Projetos from './pages/Projetos'
import Tecnologia from './pages/Tecnologias'
import Sobre from './pages/Sobre'


function App() {
 

  return (
    <Router>
      <Routes>    
        <Route path="/" element={<Projetos/>}/>
        <Route path="/tecnologia" element={<Tecnologia/>}/>
        <Route path="/sobre" element={<Sobre/>}/> 
      </Routes>
    </Router>
  )
}

export default App
