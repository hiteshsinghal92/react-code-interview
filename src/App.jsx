
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import CheckError from './Components/CheckError';
import Todo from './Components/Pages/Todo';
import DataList from './Components/Pages/DataList';
import HighOrder from './Components/Pages/HighOrder';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='/dataList' element={<DataList/>}/>
      <Route path='/highorder' element={<HighOrder/>}/>
      <Route path='/check-error' element={<CheckError/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
