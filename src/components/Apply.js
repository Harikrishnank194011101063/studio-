import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';




function Apply(props) {
  let navigate = useNavigate();
console.log(props);


let[name,setname]=useState("");
let[mobile,setmobile]=useState("");
let[email,setemail]=useState("");
let[time,settime]=useState("");
let[endtime,setendtime]=useState("")

let[date,setdate]=useState("")









console.log(props.value.occupied)
const arrraypusher=()=>{
  
let occupieddata={name,mobile,email,time,date,endtime}
let addtodata=[...props.value.occupied]
addtodata.push(occupieddata)
props.value.setoccupied(addtodata)




navigate("/occupied")
}





  return (
    <div>
      {/* <ul><li>this page will have a form with timing optioner</li>
      <li>name mobile number alternative mobile number,your timing ,what you need this studio for</li> */}
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <center><Form.Label>NAME</Form.Label></center>
    <Form.Control type="text" placeholder="Enter NAME" onChange={(e)=>setname(e.target.value)} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
   <center> <Form.Label>MOBILE</Form.Label></center>
    <Form.Control type="number" placeholder="Enter contact number" onChange={(e)=>setmobile(e.target.value)} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
   <center> <Form.Label>GMAIL</Form.Label></center>
    <Form.Control type="email" placeholder="Enter gmail" onChange={(e)=>setemail(e.target.value)} />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <center><Form.Label>TIME</Form.Label></center>
    <Form.Control type="time" placeholder="Enter start  time" onChange={(e)=>settime(e.target.value)}/>
    <Form.Control type="time" placeholder="Enter end time" onChange={(e)=>setendtime(e.target.value)}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <center><Form.Label>date</Form.Label></center>
    <Form.Control type="date" placeholder="Enter start  time" onChange={(e)=>setdate(e.target.value)}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>



  <Button variant="primary"   onClick={arrraypusher}>
    Submit
  </Button>
</Form>
      
      
      

    </div>
  )
}

export default Apply
