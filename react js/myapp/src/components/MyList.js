import React, { useState, useEffect } from 'react'
import axios from 'axios'

const MyList = () => {
  const [rowData,setRowData] = useState([])
  useEffect(()=>{
   axios.get(`https://jsonplaceholder.typicode.com/table`).then(res=>settable(res.data))   
  })
  return (
    <div>
        <h1>Basic table</h1>
        
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection 
          
    </div>
  )
}

export default MyList