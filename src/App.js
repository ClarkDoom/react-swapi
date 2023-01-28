import './App.css';
import Starships from './pages/Starships/Starships';
import { Route, Routes } from 'react-router-dom';
import StarshipDetails from './pages/Starship/StarshipDetails';
import NavBar from './components/Nav/Nav';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/starship' element={<StarshipDetails />}/>
        <Route path='/starships' element={<Starships/>}/>
      </Routes>
    </div>
  );
}

export default App;
