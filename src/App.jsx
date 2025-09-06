
import './App.css'
import NavBar from './Components/Navbar/NavBar'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Footer from './Components/Footer/Footer'
function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route  path='/' element={<Shop/>} />
          <Route  path='/mens' element={<ShopCategory banner='https://img.freepik.com/premium-vector/fashion-sale-web-banner-template-design_1033790-5999.jpg' category='mens' />} />
          <Route  path='/womens' element={<ShopCategory banner='https://img.freepik.com/free-vector/realistic-horizontal-sale-banner-template-with-photo_23-2149017940.jpg' category='womens' />} />
          <Route path='/kids' element={<ShopCategory banner='https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/60bb00fccf676_sample_image_1622868220.webp' category='kids' />} />
          <Route path='/product/:id' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
