import React from 'react'
// import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Mui from './Route/Mui'
import Todo from './Route/Todo'
import List from './Component/List'
import Count from './Route/Count'
function App() {
  return (
    <div>
      <BrowserRouter>
      <List/>
          <Routes>
            <Route path='/mui' element ={<Mui />}/>
            <Route path='/todo' element ={<Todo />}/>
            <Route path='/count' element ={<Count />}/>
          </Routes>
          </BrowserRouter>
    </div>
  )
}

export default App
