import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import NextPage from './components/Nextpageafterhome'
import {BrowserRouter,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Route exact path="/"><Home/></Route>
    <Route path="/login"><NextPage/></Route>
    </BrowserRouter>
  );
}

export default App;
