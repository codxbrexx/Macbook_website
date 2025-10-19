
import './App.css'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import Performance from './components/performance'
import Productviewer from './components/Productviewer'
import Showcase from './components/Showcase'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Productviewer />
      <Showcase />
      <Performance />
    </>
  )
}

export default App
