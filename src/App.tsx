import Navbar from './components/Navbar.tsx'
import Hero from './pages/Hero.tsx'
import Footer from './components/Footer.tsx'

function App() {
  return (
    <div className="bg-surface text-on-surface min-h-screen font-['Manrope']">
      <Navbar />
      <main className="pt-20">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App