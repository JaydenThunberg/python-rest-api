import React, { useState, useEffect } from 'react';
import './App.css';
import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import Manage from '../Manage/Manage';

function App() {

  //this.state = initialPetData, useState = setState(state empty object)
  const [initialPetData, setInitialPetData] = useState({})

  //useEffect similar to componentDidMount
  useEffect(() => {
    getPets()
  }, [])
  //the [] makes it not fire off repeatedly. useEffect is essentially component did mount

  const getPets = () => {
    fetch('/pets').then(
      response => response.json()
    ).then(data => {
      console.log(data)
      setInitialPetData(data)
    })
  }
  return (
    <div className="App">
      <Home />
      <Dashboard />
      <Manage />
      <p>hello</p>
      <h1>{initialPetData.title}</h1>
    </div>
  );
}

export default App;
