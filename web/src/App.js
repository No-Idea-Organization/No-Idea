import { Routes, Route } from 'react-router-dom';
import { CustomNavbar } from './components/Navbar/CustomNavbar';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
