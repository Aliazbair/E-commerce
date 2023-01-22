import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Cart } from './pages/Cart';
import Home from './pages/Home';
import { Jokes } from './pages/Jokes';
import Login from './pages/Login';
import { Products } from './pages/Products';
import Register from './pages/Register';

function App() {
  return (
    <div className=''>
      <Navbar />

      <main className=' container max-w-7xl mx-auto py-20 px-10'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/jokes' element={<Jokes />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
