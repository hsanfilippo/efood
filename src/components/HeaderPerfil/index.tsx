import {
  BannerBg,
  HeroBg,
  HeaderContainer,
  TagRestaurante,
  TitleRestaurante
} from './styles'
import { Logo } from '../../styles'

import bannerVector from '../../assets/images/banner_vector.svg'
import logoVector from '../../assets/images/logo_vector.svg'
import heroPerfil from '../../assets/images/hero_macarraum.png'

const HeaderPerfil = () => (
  <>
    <HeaderContainer>
      <BannerBg style={{ backgroundImage: `url(${bannerVector})` }}>
        <div className="container">
          <h3>Restaurantes</h3>
          <div>
            <Logo src={logoVector} alt="" />
          </div>
          <h3>0 produto(s) no carrinho</h3>
        </div>
      </BannerBg>
      <HeroBg style={{ backgroundImage: `url(${heroPerfil})` }}>
        <TagRestaurante>Italiana</TagRestaurante>
        <TitleRestaurante>La Dolce Vita Trattoria</TitleRestaurante>
      </HeroBg>
    </HeaderContainer>
  </>
)

export default HeaderPerfil
