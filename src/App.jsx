
import './App.css'
import NavBar from './Components/Navbar/NavBar'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route  path='/' element={<Shop/>} />
          <Route  path='/mens' element={<ShopCategory category='mens' />} />
          <Route  path='/womens' element={<ShopCategory category='womens' />} />
          <Route path='/kids' element={<ShopCategory category='kids' />} />
          <Route path='/product/:id' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
