import React from 'react'
import MaterialTable from 'material-table'

 export const Table = () => {
     const data=[
        {name:'archana',age:20,phonenumber:8905437124},
        {name:'prasanna',age:25,phonenumber:9867435210},
        {name:'suresh',age:30,phonenumber:6450976231},
        {name:'nani',age:40,phonenumber:9876453210},
    
    ]
    const columns=[
        {
            tittle:'Name',field:'name'
        },
        {
            tittle:'Age',field:'age'
        },
        {
            tittle:'Phone Number',field:'phonenumber'
        }
]

  return (
    <div>
        <MaterialTable tittle="Material Table"
        data={data}
        columns={columnssss}
        />
        </div>
  )
}

