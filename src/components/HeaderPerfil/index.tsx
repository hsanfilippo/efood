import { Link } from 'react-router-dom'
import {
  BannerBg,
  HeroBg,
  HeaderContainer,
  TagRestaurante,
  TitleRestaurante
} from './styles'
import { Logo, GlobalContainer } from '../../styles'

import bannerVector from '../../assets/images/banner_vector.svg'
import logoVector from '../../assets/images/logo_vector.svg'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type Props = {
  cover: string
  title: string
  type: string
}

const HeaderPerfil = ({ cover, title, type }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <>
      <HeaderContainer>
        <BannerBg style={{ backgroundImage: `url(${bannerVector})` }}>
          <GlobalContainer className="container">
            <Link to="/">Restaurantes</Link>
            <Link to="/">
              <Logo src={logoVector} alt="" />
            </Link>
            <h3>{items.length} produto(s) no carrinho</h3>
          </GlobalContainer>
        </BannerBg>
        <HeroBg style={{ backgroundImage: `url(${cover})` }}>
          <GlobalContainer>
            <TagRestaurante>{type}</TagRestaurante>
            <TitleRestaurante>{title}</TitleRestaurante>
          </GlobalContainer>
        </HeroBg>
      </HeaderContainer>
    </>
  )
}

export default HeaderPerfil
