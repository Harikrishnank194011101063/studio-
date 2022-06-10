import React from 'react'
import Table from 'react-bootstrap/Table'



function occupiedtiming(props) {
  console.log(props)
  return (
    <div>
      {/* this will be showed in a table  
      and it will add the limited information
      about their registering 
      like name email and timing they gave 
    */}
       
      <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>NAME</th>
      <th>MOBILE</th>
      <th>GMAIL</th>
      <th>OCCUPIED TIME(on railway time)</th>
      <th>date</th>
    </tr>
  </thead>
  <tbody>
{props.value.occupied.map((e,i)=>{
    
    return <tr>
      <td >{i+1}</td>
      <td>{e.name}</td>
      <td>{e.mobile}</td>
      <td>{e.email}</td>
      <td>{e.time}-{e.endtime}</td>
     <td>{e.date}</td>
      
    </tr>
})
}   
  </tbody>
</Table>
   
   
   
   
   
   
   
   
    </div>
  )
}

export default occupiedtiming
