import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import InsertForm from './component/InsertForm';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/form' element={<InsertForm/>}/>
     </Routes>
    </div>
  );
}

export default App;
