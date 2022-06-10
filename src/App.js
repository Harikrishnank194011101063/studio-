import 'bootstrap/dist/css/bootstrap.min.css';
import Frontpage from "./components/Frontpage"
import Apply from "./components/Apply"
import Occupiedtiming from "./components/Occupiedtiming"
import Topbar from "./components/Topbar"
import Aboutus from './components/Aboutus';
import Login from './components/Login';
import Register from './components/Register';
import Cards from './components/Cards';

import './App.css';


import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState,useContext } from 'react';



function App() {


let[occupied,setoccupied]= useState([{name:"vikram",mobile:"98765432",email:"vikram@gmail.com" ,time:"10:00",endtime:"12:00",date:"2022-07-02"}
,{name:"raj",mobile:"987635332",email:"rajam@gmail.com",time:"14:00",endtime:"15:00",date:"2022-05-02"}
,{name:"dheeraj",mobile:"78235432",email:"dheeraj@gmail.com" ,time:"15:00" ,endtime:"17:00",date:"2022-04-02"}])
return <>

  <BrowserRouter>

       <Topbar/>
     
  <Routes>
<Route path="/frontpage" element={<Frontpage/>}/>
<Route path="/apply" element={<Apply value={{occupied,setoccupied}}/>}/>
<Route path="/occupied" element={<Occupiedtiming  value={{occupied,setoccupied}} />}/>
<Route path="/aboutus" element={<Aboutus/>}/>
<Route  path="/register" element={<Register />} />
<Route  path="/login" element={<Login />} />
<Route  path="/cards" element={<Cards />} />
  </Routes>
  </BrowserRouter>
  







  </>
}

export default App;

  
  
  
  
  
  
  
  
  