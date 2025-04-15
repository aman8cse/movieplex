import './App.css';
import Navbar from './Components/Navbar';
import MovieCard from './Components/MovieCard';
import Home from './Pages/Home';
import Favourites from './Pages/Favourites';
import {Routes, Route} from "react-router-dom";


function App() {

  return (
    <div>
      <Navbar></Navbar>
      <main className='maincontent'>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/favourites" element={<Favourites></Favourites>}></Route>
      </Routes>
    </main>
    </div>
  );
}

export default App;
