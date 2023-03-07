import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
   <div>
    <Navbar />
    <ItemListContainer text={'Catalogo de productos'} />
   </div>
  )
}

export default App
