import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Drama from './Drama';
import axios from 'axios';
import List from './List';
import Edit from './Editpage';
// import KDrama from '../KDRAMA';
function App() {
  return (
    <Router>
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/drama">KDRAMA</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
          aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/add">Drama</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/list">List</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <Routes>
    {/* <Route
      exact path="/Krama" element={<KDrama/>}/> */}
    <Route
      exact path="/add" element={<Drama/>}/>
      <Route
      exact path="/list" element={<List/>}/>
     <Route
      exact path="/Edit/:id" element={<Edit/>}/>
  </Routes>
    </Router>
  );
}
export default App;
