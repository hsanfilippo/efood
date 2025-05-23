import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  BannerBg,
  HeroBg,
  HeaderContainer,
  TagRestaurante,
  TitleRestaurante
} from './styles'
import { Logo, GlobalContainer } from '../../styles'
import { open as openCart } from '../../store/reducers/cart'
import { close as closeCheckout } from '../../store/reducers/checkout'
import bannerVector from '../../assets/images/banner_vector.svg'
import logoVector from '../../assets/images/logo_vector.svg'
import { RootReducer } from '../../store'

type Props = {
  cover: string
  title: string
  type: string
}

const HeaderPerfil = ({ cover, title, type }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  return (
    <>
      <HeaderContainer>
        <BannerBg style={{ backgroundImage: `url(${bannerVector})` }}>
          <GlobalContainer className="container">
            <Link to="/">Restaurantes</Link>
            <Link to="/">
              <Logo src={logoVector} alt="" />
            </Link>
            <h3
              onClick={() => {
                dispatch(openCart())
                dispatch(closeCheckout())
              }}
            >
              {items.length} produto(s) no carrinho
            </h3>
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
