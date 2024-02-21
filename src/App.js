import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { orginals,Action } from "./urls";






function App() {
 
  return (

    <div >
      <Navbar/>
      <Banner  />
      <RowPost  url={orginals} title='Netflix Orginals' />
      <RowPost  url={Action} title='Action' isSmall/>
 
 
    
    
      
    </div>
  );
}

export default App;
