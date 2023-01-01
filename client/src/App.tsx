import { Navbar, Footer, Hero, Services, Transactions, Loader } from './components'

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Navbar />
        <Hero />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
