import React from 'react'
import Employee from './components/Employee'
/*
const App = () => {
  return (
    <div>
        <h1>Company Director</h1>
        <Employee firstName="Jack" lastName="smith" age={22}/>
        <Employee firstName="Marco" lastName="eg" age={22}/>
        <Employee firstName="Marge" lastName="roben" age={22}/>
        <Employee firstName="Homero" lastName="stephen" age={22}/>
    </div>
  )
}
*/
const employeeInfo = [
    {
        firstName: 'Jack',
        lastName: 'Smith',
        age: '22',
        employeeId: '1'
    },
    {
        firstName: 'Marco',
        lastName: 'Estrello',
        age: '22',
        employeeId: '2'
    },
    {
        firstName: 'Samantha',
        lastName: 'John',
        age: '20',
        employeeId: '3'
    },
]
/*
const App = () => {
   
    return (
      <div>
          <h1>Company Director</h1>
          {employeeInfo.map((employee)=>{
              const {firstName, lastName, age} = employee;
              return(
                  <Employee firstName={firstName} lastName={lastName} age={age}/>
              )
          })}
      </div>
    )
  }
  */
 /*
  const App = () => {
   
    return (
      <div>
          <h1>Company Director</h1>
          {employeeInfo.map((employee)=>(
                  <Employee firstName={employee.firstName} lastName={employee.lastName} age={employee.age}/>
              )
          )}
      </div>
    )
  }*/
  const App = () => {
   
    return (
      <div>
          <h1>Company Director</h1>
          {employeeInfo.map((employee)=>{
              return(
                  <Employee key={employee.employeeId} {...employee}/>
              )
          })}
      </div>
    )
  }
export default App