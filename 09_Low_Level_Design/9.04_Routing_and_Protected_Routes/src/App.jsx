import './App.css'
import About from './componenets/About';
import Body from './componenets/Body';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Team from './componenets/Team';
import Login from './componenets/Login';
import ProtectedRoute from './componenets/ProtectedRoute';

function App() {

  return (
    <div>
      <BrowserRouter>
        <header className='text-2xl font-bold h-16 bg-black text-white flex justify-end pr-10'>
          <nav className='p-2 m-2 flex space-x-10'>
            <Link to="/" className='hover:border-b hover:border-white'>Home</Link>
            <Link to="/about" className='hover:border-b hover:border-white'>About</Link>
            <Link to="/team" className='hover:border-b hover:border-white'>Team</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Body />} />

          {/*//? Protected routes */}
          <Route element={<ProtectedRoute />} >
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
          </Route>
          
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
