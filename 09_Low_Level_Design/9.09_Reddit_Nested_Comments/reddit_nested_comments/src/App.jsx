import { useState } from 'react';
import './App.css'
import About from './componenets/About';
import Body from './componenets/Body';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Team from './componenets/Team';
import Login from './componenets/Login';
import ProtectedRoute from './componenets/ProtectedRoute';
import Comments from './componenets/reddit_comments/comments';
import Accordion from './componenets/accordion/Accordion';

function App() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en')

  const handleChangeLanguage = (e) => {
    setLang(e.target.value)
    localStorage.setItem('lang', e.target.value)
  }

  return (
    <div>
      <BrowserRouter>
        <header className='text-xl font-bold h-16 bg-black text-white flex justify-end pr-10 sticky top-0 right-0 z-2 left-0'>
          <nav className='p-2 m-2 flex space-x-10'>
            <Link to="/" className='hover:border-b hover:border-white'>Home</Link>
            <Link to="/about" className='hover:border-b hover:border-white'>About</Link>
            <Link to="/team" className='hover:border-b hover:border-white'>Team</Link>
            <Link to="/accordion" className='hover:border-b hover:border-white'>Accordion</Link>
            <Link to="/comments" className='hover:border-b hover:border-white'>Nested Comments</Link>

            <select value={lang} onChange={handleChangeLanguage} className='text-black text-[18px] px-2 rounded-[5px] font-[400]'>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="mr">Marathi</option>
              <option value="gu">Gujarati</option>
            </select>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Body />} />

          {/*//? Protected routes */}
          <Route element={<ProtectedRoute />} >
            <Route path="/about" element={<About lang={lang} />} />
            <Route path="/team" element={<Team />} />
            <Route path="/accordion" element={<Accordion />} />
            <Route path="/comments" element={<Comments />} />
          </Route>
          
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
