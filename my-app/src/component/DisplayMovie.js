import React from 'react';
import { Link } from 'react-router-dom';
function DisplayMovie (props){
    return (
        <div className='container-fluid'>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>DURATION</th>
                        <th>VIEW</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        props.mlist.map((m, index) => (
                            <tr key={index}>
                                <td> {m.id}</td>
                                <td>  {m.title}</td>
                                <td>  {m.duration}</td>
                                <td><Link to ={`/Details/${m.id}`}>EDIT</Link></td>
                                
                                
                            </tr>
                        )
                        )

                    }

                </tbody>
            </table>

        </div>
    )
}






export default DisplayMovie;