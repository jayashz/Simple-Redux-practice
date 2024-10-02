import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css'
import Hero from './component/Hero';
import Nav from './component/Nav';
import Home from '../pages/Home';
import CartPage from '../pages/CartPage';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/cart' element={<CartPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
