import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Jokes } from './pages/Jokes'
import Login from './pages/Login';
import { Products } from './pages/Products'
import Register from './pages/Register';


function App() {

  return (
    <div className='bg-gray-700  overflow-hidden text-white'>
      <Navbar />

      <main className='max-w-7xl mx-auto pt-6'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/jokes' element={<Jokes />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
