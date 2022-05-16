import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import MainBody from './component/MainBody';
import Counter from './component/Counter';
import Employees from './component/Employees';
import FetchMovies from './component/FetchMovies';
import DisplayMovie from './component/DisplayMovie';
import { Link } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MovieDetails from './component/MovieDetails';
import AddMovie from './component/AddMovie';

 

function App() {
  return(
    <Router>
      <Routes>
        <Route path ="/" element={<Dashboard/>}/>
        <Route path='/counter' element={<Counter />} />
        <Route path='/Employees' element={<Employees/>} />
        <Route path='/FetchMovie' element={<FetchMovies/>}/>
        <Route path='/Details/:id' element={<MovieDetails/>}/>
        <Route path= "/movie/add" element ={<AddMovie/>} />
        
      </Routes>


    </Router>
  // <div className="App" />
  // <Header />
  // <MainBody />
  // <Counter />
  // <Employees />
  //  <Footer />
  //   <FetchMovies />
  //  <DisplayMovie /> 
   
   
   
  
  );

  

  
}

export default App;
