
import {  Link } from "react-router-dom";
import React, { Component } from 'react'
export default class Navbar extends Component {

    constructor(){
        super();
        this.state={
            show: true,
        }
    }
    render() {
        return (
            <div>
          
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                   {/* <link className="navbar-brand text-info" to ="localhost:3000/">Movie Project</link> */}
                    <button className="navbar-toggler border border-info text-info" 
                    onClick={ ()=>{ this.setState({show: !this.state.show}) } } >
                       {/* {this.state.show ? <MenuIcon /> : <CloseIcon />} */}
                    </button>
                        <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active' }style={{paddingLeft:"800px"}}>
                        <ul className="navbar-nav ms-auto">
                            
     <li className="nav-item" style={{float:"right"}} >

       <Link className="nav-link text-light" to="/movie/add">ADD MOVIE</Link>
     </li>
    
    
      <li  className='nav-item' style={{float:"right"}}>
       <Link className="nav-link text-light" to="/movies">MOVIE LIST</Link>
     </li>
     <li  className='nav-item' style={{float:"right"}}>
       <Link className="nav-link text-light" to="/AdminMenuBar">ADMIN</Link>
     </li>
                        </ul>
                    </div>
                </div>
            </nav>

           


            </div>
          
        )
    }
    }

   
//   return (
    
    
//   <div className="navbar navbar-expand-lg navbar-dark bg-dark">

//     <li className="nav-item" >

//       <Link to="/movie/add">ADD MOVIE</Link>
//     </li>
    
    
//      <li  className='nav-item'>
//       <Link to="/movies">MOVIE LIST</Link>
//     </li>
//      {/* <li></li>
//     <li  className='nav-item'>
//       <Link to="/abt">About Us</Link>
//     </li>
//     <li></li>  */}
//   </div>
//   );
// }
// export default Navbar;