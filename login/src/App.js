import React,{ Component } from 'react'
import Navbar from './components/Navbar'
import More from './components/More'
import Login_Signup from './components/Login_Signup'
import './App.css'

import { BrowserRouter,Route,Routes } from 'react-router-dom'


class App extends Component{
  render(){
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />
    <Routes>
    <Route exact path="/" element={<More />}/>
    <Route path="/login_signup" element={<Login_Signup />}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
