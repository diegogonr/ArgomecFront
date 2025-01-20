import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Preloader from './components/Loaders/Preloader'
import Wrapper from './components/Wrapper'

function App() {

  return (
    <>
    <Preloader/>
    <div className="bg">
      <Header />
      <Wrapper />
    </div>
    <Footer></Footer>
  </>
  )
}

export default App
