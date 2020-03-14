import React, { useState } from 'react';
import fakeInfo from '../../fakeInfo';
import './Employee.css'
import Person from '../Person/Person'
import Expense from '../Expense/Expense';



const Employee = () => {
    const first15= fakeInfo.slice(0,15);
    const [person, setPerson]= useState(first15);

    const [member, setMember]= useState([])

    const handleAddEmployee= (person)=>{
        console.log("employeeAdded", person);
        const newMember= member + 1;
        setMember(newMember);
    }
    
    
    return (
        <div className="employee-container">
            <div className= "person-container">
             
                {
                    person.map(personnel=> <Person  handleAddEmployee={handleAddEmployee} person={personnel}></Person>)
                }
              
            </div>

            <div className="salary-container">
               
                
                <Expense member={member}></Expense>

            </div>
        
            
        </div>
    );
};

export default Employee;