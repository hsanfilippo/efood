import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'
import Rotas from './routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
      </BrowserRouter>
    </div>
  )
}

export default App
