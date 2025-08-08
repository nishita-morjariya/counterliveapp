import React, { useState } from 'react'

function Counter() 
{
  const [data, setData]= useState(0)
  function Update() 
  {
    setData(data+1);
  }
  
  return (
    <div className='App'>
      <h1>{data}</h1>
      <button onClick={Update}>Update Data</button>
    </div>
  );
}
export default Counter;



