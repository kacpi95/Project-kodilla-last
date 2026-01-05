import { Link, Route, BrowserRouter, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/cart'>Cart</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
