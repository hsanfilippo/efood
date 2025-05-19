import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'
import Rotas from './routes'
import Footer from './components/Footer'
import Modal from './components/Modal'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        {/* <Modal /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
