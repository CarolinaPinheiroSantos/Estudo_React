import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReservaAmbiente } from './paginas/ReservaAmbiente'
import { Professor } from './paginas/professor';
import { Disciplina } from './paginas/Disciplina';
import { Sala } from './paginas/Sala';


export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Professor />} />
        <Route path="/reservaAmbiente" element={<ReservaAmbiente />} />
        <Route path="/disciplina" element={<Disciplina />} />
        <Route path='/sala' element= {<Sala/>}/>
      </Routes>
    </Router>
  )
}