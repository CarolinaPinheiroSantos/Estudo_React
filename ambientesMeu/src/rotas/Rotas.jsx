import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReservaAmbiente } from '../paginas/ReservaAmbiente'
import { Professor } from '../paginas/professor';
import { Disciplina } from '../paginas/Disciplina';
import { Sala } from '../paginas/Sala';
import { Login } from '../paginas/Login';
import { Inicial } from '../paginas/Inicial';


export function Rotas() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Inicial/>} />
        </Routes>
      </Router>
    )
}