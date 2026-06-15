import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Jewelry from './pages/Jewelry';
import Shop from './pages/Shop';
import Favorites from './pages/Favorites';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="jewelry" element={<Jewelry />} />
          <Route path="shop" element={<Shop />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="contact" element={<Contact />} />

          {/* This is your perfect catch-all route! */}
          <Route path="*" element={<div className="min-h-screen flex items-center justify-center pt-20">Coming Soon...</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;