import Header from './components/Header'
import Restaurantes from './components/Restaurantes'
import { GlobalCss } from './styles'

function App() {
  return (
    <div className="App">
      <GlobalCss />
      <Header />

      <Restaurantes />
    </div>
  )
}

export default App
