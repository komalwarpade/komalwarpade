import React from "react";
import { Link } from "react-router-dom";

function Employees() {

    const companyName = "Capgemini"
    const manager = 
        {
            "empId" : 1,
            "name" : "komal",
            "salary" :20000
        }
        const employees = [
            {
                "empId" : 2,
                "name" : "dfg",
                "salary" :20000
            },
            {
                "empId" : 3,
                "name" : "kjhjj",
                "salary" :20000
            },
            {
                "empId" : 4,
                "name" : "bbhhh",
                "salary" :20000
            }

        ];
    
    return (
        <div>
            <h3>Company Name: {companyName} </h3>
            <h3>manager</h3>
            <p> Id : {manager.empId}</p>
            <p> Name : {manager.name}</p>
            <p> Salary : {manager.salary}</p>

            <h3>Employees:</h3>

            {
                employees.map(e =>
                    
                        <div>
                            <p>EmployeeId: {e.empId}</p>
                            <p>Name: {e.name}</p>
                            <p>Salary: {e.salary}</p>
                        </div>
                    )
            }
            <div>
                <Link to ="/">Back To DashBoard</Link>
            </div>
        </div>
    )
}
export default Employees;