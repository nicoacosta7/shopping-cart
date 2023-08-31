import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Shop from './pages/shop/shop'
import Cart from './pages/cart/Cart'
import { ShopContextProvider } from './context/Shop-context'
import AddItem from './pages/add-item/AddItem'

function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          <NavBar/>
          <Routes>
              <Route path='/' element={<Shop/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='/add-item' element={<AddItem/>}></Route>
          </Routes>
        </Router>
      </ShopContextProvider>
  </div>
  )
}

export default App
