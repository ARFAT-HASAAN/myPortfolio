import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Thankfull from './components/greatfull'

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
