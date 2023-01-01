import { Navbar, Footer, Hero, Services, Transactions, Loader } from './components'

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
