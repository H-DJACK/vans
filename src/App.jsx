import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import './index.css'

function App() {
  return  (
  <BrowserRouter>
    <header>
      <h1 className='site-logo'>#VANLIF</h1>
      <nav>
        <Link to='/about'>About</Link>
      </nav>
    </header>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About/>} />
    </Routes>
  </BrowserRouter>
)
}

export default App
