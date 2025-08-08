import React, { useState } from 'react'

function App() 
{
  const [data, setData]= useState("Nishita")
  function Update() 
  {
    setData("morjaria");
  }
  
  return (
    <div className='App'>
      <h1>{data}</h1>
      <button onClick={Update}>Update Data</button>
    </div>
  );
}
export default App;



