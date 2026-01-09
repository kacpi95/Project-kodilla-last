import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
