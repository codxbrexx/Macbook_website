
import { Features } from 'tailwindcss'
import './App.css'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import Performance from './components/performance'
import Productviewer from './components/Productviewer'
import Showcase from './components/Showcase'
import Highlights from './components/Highlights'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Productviewer />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
    </>
  )
}

export default App
