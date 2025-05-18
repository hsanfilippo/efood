import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'
import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
