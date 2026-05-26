import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Equipment from './pages/Equipment'
import ForkLift from './pages/ForkLift'
import Telehandler from './pages/Telehandler'
import Excavators from './pages/Excavators'
import JCB3CX from './pages/JCB3CX'
import Bobcat from './pages/Bobcat'
import Crane from './pages/Crane'
import Shovel from './pages/Shovel'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="equipment" element={<Equipment />} />
        <Route path="equipment/fork-lift" element={<ForkLift />} />
        <Route path="equipment/telehandler" element={<Telehandler />} />
        <Route path="equipment/excavators" element={<Excavators />} />
        <Route path="equipment/jcb-3cx" element={<JCB3CX />} />
        <Route path="equipment/bobcat" element={<Bobcat />} />
        <Route path="equipment/crane" element={<Crane />} />
        <Route path="equipment/shovel" element={<Shovel />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
