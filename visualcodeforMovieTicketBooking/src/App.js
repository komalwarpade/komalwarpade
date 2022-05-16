
import './App.css';
import Dashboard from './components/Dashboard';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import FetchAllMovies from './components/FetchAllMovies';
import FetchMovie from './components/FetchMovie';
import CreateMovie from './components/CreateMovie';
import EditMovie from './components/EditMovie';
import Navbar from './util/navbar';
import CustomerMovies from './components/CustomerMovies';
import Login from './components/Login';
import AdminMenuBar from './components/AdminMenuBar';
import FetchAllShows from './components/FetchAllShows';
import FetchShow from './components/FetchShow';
import DeleteShow from './components/DeleteShow';
import UpdateShow from './components/UpdateShow';
import AddShow from './components/AddShow';
import FetchAllTheaters from './components/FetchAllTheaters';
import FetchTheater from './components/FetchTheater';
import AddTheater from './components/AddTheater';
import UpdateTheater from './components/UpdateTheater';
import DeleteTheater from './components/DeleteTheater';
import FetchAllTheaterMovies from './components/FetchAllTheaterMovies';
import FetchTheaterMovie from './components/FetchTheaterMovie';
import AddTheaterMovie from './components/AddTheaterMovie';
import UpdateTheaterMovie from './components/UpdateTheaterMovie';
import DeleteTheaterMovie from './components/DeleteTheaterMovie';
import FetchAllCustomer from './components/FetchAllCustomer';
import CustomerMenuBar from './components/CustomerMenuBar';
import CustomerTheater from './components/CustomerTheater';
import CustomerTimings from './components/CustomerTimings';
import CustomerShows from './components/CustomerShows';
import CreateCustomer from './components/CreateCustomer';
import FetchCustomer from './components/FetchCustomer';
import UpdateCustomer from './components/UpdateCustomer';
import DeleteCustomer from './components/DeleteCustomer';
import GetAllBooking from './components/GetAllBooking';
import FetchBookings from './components/FetchBookings';
import AddBooking from './components/AddBooking';


function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
        {/* <Route path ="/" element={<FetchAllMovies/>}/> */}
        <Route path="/" element ={<Login/>}/>
           <Route path ="/movies" element={<FetchAllMovies/>}/> 
          <Route path='/Details/:movieId' element={<FetchMovie/>}/>
          <Route path="/movie/add"  element={<CreateMovie/>}/>
          <Route path='/Details/edit/:movieId' element={<EditMovie/>}/>
          <Route path='/CustomerMovies' element={<CustomerMovies/>}/>
          <Route path="/AdminMenuBar" element={<AdminMenuBar/>}/>


          <Route path="/show/get" element={<FetchAllShows/>} />
          <Route path="/show/get/:id" element={<FetchShow/>} />
          <Route path="/show/update/:id" element={<UpdateShow/>} />
          <Route path="/show/delete/:id" element={<DeleteShow/>} />
          <Route path="/show/add" element={<AddShow/>} />

          <Route path="/theater/get" element={<FetchAllTheaters/>} />
        <Route path="/theater/get/:id" element= {<FetchTheater/>} />
        <Route path="/theater/add" element={<AddTheater/>} />
        <Route path="/theater/update/:id" element={<UpdateTheater/>} />
        <Route path="/theater/delete/:id" element={<DeleteTheater/>} />

        <Route path="/theatermovie/get" element={<FetchAllTheaterMovies/>} />
        <Route path="/theatermovie/get/:id" element= {<FetchTheaterMovie/>} />
        <Route path="/theatermovie/add" element={<AddTheaterMovie/>} />
        <Route path="/theatermovie/update/:id" element={<UpdateTheaterMovie/>} />
        <Route path="/theatermovie/delete/:id" element={<DeleteTheaterMovie/>} />

        <Route path="/allCustomer" element ={<FetchAllCustomer/>}/>
        <Route path="/CustomerMenuBar" element={<CustomerMenuBar/>}/>
        <Route path="/customermovies" element={<CustomerMovies/>}/>
        <Route path="/customertheater" element={<CustomerTheater/>}/>
        <Route path="/customertimings" element={<CustomerTimings/>}/>
        <Route path="/customershows" element={<CustomerShows/>}/>


        <Route path="/createCustomer" element ={<CreateCustomer/>}/>
        <Route path="/fetchCustomer/:id" element ={<FetchCustomer/>}/>
       <Route path="/updateCustomer/:id" element ={<UpdateCustomer/>}/>
      <Route path="/deleteCustomer/:id" element ={<DeleteCustomer/>}/>


      <Route path="/allbookings" element ={<GetAllBooking/>}/>
      <Route path="/fetchbooking/:bookingid" element ={<FetchBookings/>}/>
      <Route path="/addbooking" element ={<AddBooking/>}/>





          
           </Routes>
      </Router>
    
     
      
    </div>
  );
}

export default App;
