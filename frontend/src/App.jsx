import { Link, Route, BrowserRouter, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
