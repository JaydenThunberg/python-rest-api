import React, {useState,useEffect} from 'react';
import './App.css';

function App() {
  const [initialPetData, setInitialPetData] = useState({})

  useEffect(()=>{
    fetch('/pets').then(
      response => response.json()
      ).then(data => {
        console.log(data)
        setInitialPetData(data)
      })
  },[])
  return (
    <div className="App">
      <p>hello</p>
    <h1>{initialPetData.title}</h1>
    </div>
  );
}

export default App;
