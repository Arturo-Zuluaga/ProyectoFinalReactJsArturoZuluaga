import { BrowserRouter, Routes, Route } from "react-router-dom"

import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/Navbar"
import Cart from "./components/Cart"



const App = () => {
  return (
    <BrowserRouter>



  <Navbar/>
  
  <Routes>
    
    
    <Route exact path="/" element={<ItemListContainer/>}/>
    <Route exact path="/categoria/:categoria" element={<ItemListContainer/>}/>
    <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
    <Route exact path="/cart" element={<Cart/>}/>
     
  </Routes>
    </BrowserRouter>
    
    
  )
}

export default App
