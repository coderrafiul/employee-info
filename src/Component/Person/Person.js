import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './Person.css';

const Person = (props) => {
    // console.log(props);
    const {img, name, salary} =props.person;
    return (
        <div className="single-person"> 
            <div >
                <img className="employee-image" src={img} alt=""/>
            </div>
            <div className="description">
                <h1 className="employeeName">{name}</h1>
                <br/>
                <h3>Salary: $ {salary} </h3>
                <button onClick={()=>props.handleAddEmployee(props.person)} className="addButton"><FontAwesomeIcon icon={faPlusSquare} /> add to consider</button>
            </div>
            
        </div>
    );
};

export default Person;