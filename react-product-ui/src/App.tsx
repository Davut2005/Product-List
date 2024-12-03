import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from './pages/ProductDetail';
import CreateProduct from './pages/CreateProduct';

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
