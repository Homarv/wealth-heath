import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from "./pages/Home"
import EmployeeList from "./pages/EmployeeList"
import PageError from './pages/PageError';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* path="*" fonctionne si jamais l'url ne correspond à rien de dééclaré au dessus  */}
          <Route path="*" element={<PageError />} />
          <Route path="/employee-list" element={<EmployeeList/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
