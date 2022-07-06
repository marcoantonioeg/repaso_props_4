import React from 'react'

const Employee = ({firstName, lastName, age: EmployeeAge}) => {
  return (
    <h2> Employee Name: {firstName} {lastName} who's age {EmployeeAge}</h2>
  )
}

export default Employee