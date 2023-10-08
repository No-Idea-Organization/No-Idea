import { Routes, Route } from 'react-router-dom';
import { CustomNavbar } from './components/Navbar/CustomNavbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Catagories } from './pages/Catagories';
import { NotFound } from './pages/NotFound';
import { SearchBar } from './components/SearchBar/SearchBar';

function App() {
  return (
    <>
      <CustomNavbar />
      <SearchBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/catagories" element={<Catagories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
