import TopDetail from './components/TopDetail'
import Header from './layouts/Header'
import Base from './layouts/Base'
import Footer from './layouts/Footer'

const App = () => {
  return (
    <div className='flex flex-col items-center'>
      <TopDetail />
      <Header />
      <Base />
      <Footer />
    </div>
  )
}

export default App
