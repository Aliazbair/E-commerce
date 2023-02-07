import { BrowserRouter, Route, Routes,useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import {Order, Shopping} from './pages';
import { Cart } from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import { Products } from './pages/Products';
import Register from './pages/Register';

function App() {
  return (
    <div className=''>
      <Navbar />

      <main className=''>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shopping' element={<Shopping />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
