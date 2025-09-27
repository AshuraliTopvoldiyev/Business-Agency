
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './companents/navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Projectdetal from './pages/projectdetal/Projectdetal'
import Project from './pages/project/Project'
import Footer from './companents/footer/Footer'
import { useState } from 'react'


function App() {
  const [services, setServices] = useState([
    {
      id: 1,
      img: "fa-solid fa-pen",
      title: "Content Marketing   ",
      desc: "Our team creates engaging and shareable content that resonates with your audience, drives organic traffic",
    },
    {
      id: 2,
      img: "fa-solid fa-pen-nib",
      title: "Graphic Design   ",
      desc: "Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.",
    },
    {
      id: 3,
      img: "fa-solid fa-bullhorn",
      title: "Digital Marketing  ",
      desc: "Elevate your brand's online presence with our data-driven digital marketing strategies. From SEO and content marketing",
    },
    {
      id: 4,
      img: "fa-solid fa-palette",
      title: "Web Design  ",
      desc: "We specialize in creating visually stunning, user-friendly websites that align with your brand identity and deliver an exceptional.",
    },
    {
      id: 5,
      img: "fa-solid fa-user",
      title: "IT Consulting   ",
      desc: "IT consulting, or information technology consulting, refers to the practice of providing advisory and implementation services",
    },
    {
      id: 6,
      img: "fa-solid fa-gem",
      title: "Brand Identity   ",
      desc: "It involves creating a unique and recognizable identity that sets the brand apart from competitors and resonates with the target audience.",
    },
  ]);

  const [process, setProcess] = useState([
    {
      id: 1,
      img: "/img/cal1.svg",
      title: "Ideate",
      desc: "The ideation process is a crucial phase in the design process where creative thinking and brainstorming"
    },
    {
      id: 2,
      img: "/img/cal2.svg",
      title: "Reserach",
      desc: "Research is a critical component of the design process, helping designers understand the problem"
    },
    {
      id: 3,
      img: "/img/cal3.svg",
      title: "Create",
      desc: "Designing a process involves several key steps to ensure clarity, efficiency, successful implementation"
    },
    {
      id: 4,
      img: "/img/cal4.svg",
      title: "Testing",
      desc: "Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements"
    },

  ])
  
  const [product, setProduct]=useState([
    {
      id: 1,
      img: "/img/design1.png",
      title: "Web UI design",
      desc:"Creative  UI design"
    },
      {
      id: 2,
      img: "/img/design2.png",
      title: "UI Design",
      desc:"Creative Rebranding for logo"
    },
      {
      id: 3,
      img: "/img/design3.png",
      title: "To design Digital Strategy",
      desc:"Social Media Marketing"
    },
      {
      id: 4,
      img: "/img/design4.png",
      title: " UI Design",
      desc:"Creative Rebranding for logo"
    },
  ])


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home services={services} process={process} product={product} />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project product={product} />} />
          <Route path='/projectdetal' element={<Projectdetal product={product} />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}


export default App
