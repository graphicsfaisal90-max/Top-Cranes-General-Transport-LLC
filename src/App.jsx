import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Equipment from './pages/Equipment'
import ForkLift from './pages/ForkLift'
import Telehandler from './pages/Telehandler'
import Excavators from './pages/Excavators'
import JCB3CX from './pages/JCB3CX'
import Bobcat from './pages/Bobcat'
import SkidSteer from './pages/SkidSteer'
import LowBedTrailers from './pages/LowBedTrailers'
import MobileCraneRental from './pages/MobileCraneRental'
import RoughTerrainCranes from './pages/RoughTerrainCranes'
import Crane from './pages/Crane'
import Shovel from './pages/Shovel'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="equipment" element={<Equipment />} />
        <Route path="equipment/fork-lift" element={<ForkLift />} />
        <Route path="equipment/telehandler" element={<Telehandler />} />
        <Route path="equipment/excavators" element={<Excavators />} />
        <Route path="equipment/jcb-3cx" element={<JCB3CX />} />
        <Route path="equipment/bobcat" element={<Bobcat />} />
        <Route path="equipment/skid-steer" element={<SkidSteer />} />
        <Route path="equipment/low-bed-trailers" element={<LowBedTrailers />} />
        <Route path="equipment/crane" element={<Crane />} />
        <Route path="equipment/mobile-cranes" element={<MobileCraneRental />} />
        <Route path="equipment/rough-terrain-cranes" element={<RoughTerrainCranes />} />
        <Route path="equipment/shovel" element={<Shovel />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
      </Route>
    </Routes>
  )
}
