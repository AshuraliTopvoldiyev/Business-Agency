
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './companents/navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Projectdetal from './pages/projectdetal/Projectdetal'
import Project from './pages/project/Project'
import Footer from './companents/footer/Footer'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/projectdetal' element={<Projectdetal />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
