import { CtaBanner, Background } from './styles'
import { Logo } from '../../styles'

import bannerVector from '../../assets/images/banner_vector.svg'
import logoVector from '../../assets/images/logo_vector.svg'

const Header = () => (
  <>
    <Background style={{ backgroundImage: `url(${bannerVector})` }}>
      <div className="container">
        <div className="logo-container">
          <Logo src={logoVector} alt="" />
        </div>
        <CtaBanner>
          Viva experiências gastronômicas no conforto da sua casa
        </CtaBanner>
      </div>
    </Background>
  </>
)

export default Header
