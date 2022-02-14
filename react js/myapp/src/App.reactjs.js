import React, { useState } from 'react';
import'./App.css';
import MaterialTable from 'material-table';
const App = () => {
  const[tableData,setTableData]=useState([
    {name:"prasanna",age:25,phonenumber:8907564361,city:"kkd"},
    {name:"prasad",age:20,phonenumber:9308458201,city:"vizag"},
    {name:"suresh",age:30,phonenumber:9567380264,city:"hyb"},
    {name:"archana",age:26,phonenumber:6369409673,city:"guntur"},
    {name:"lakshmi",age:22,phonenumber:8975430241,city:"vizag"}
   ])
  const columns=[
    {tittle:"Name",field:"name"},
    {tittle:"Age",field:"age"},
    {tittle:"PhoneNumber",field:"phonenumber"},
    {tittle:"Email",field:"email"},
    {tittle:"City",field:"city"}
]
  return ( 
    <div> 
      
      <MaterialTable columns={columns} data={tableData} />
      
    </div> 
    );
}

export default App;