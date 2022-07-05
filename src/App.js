import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Thankfull from './components/greatfull'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

AOS.init()

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Thnkfull" element={<Thankfull />}></Route>
      </Routes>
    </>
  )
}

export default App
