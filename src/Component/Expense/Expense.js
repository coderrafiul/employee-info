import React from 'react';
import users from '../../fakeInfo/user';

const Expense = (props) => {
    const member= props.member;
    console.log(member);
    // const totalExpense= member.reduce((totalExpense, element)=> totalExpense + element.salary,0);

    let totalExpense= 0;
    for(let i= 0; i<member.length; i++){
        const person= member[i];
        totalExpense= totalExpense + users.salary;
    }

    return (
        <div>
            <h1>Expenses on employees</h1>
            <h3>Considered Number: {member.length}</h3>
            <h3>Total Expense: {totalExpense} </h3>
        </div>
    );
};

export default Expense;