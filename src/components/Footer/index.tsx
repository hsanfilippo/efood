import { Link } from 'react-router-dom'

import {
  FooterContainer,
  InfoContainer,
  LogosContainer,
  SocialMedia
} from './styles'

import { Logo } from '../../styles'
import logoVector from '../../assets/images/logo_vector.svg'
import logoInstagram from '../../assets/images/logo_instagram.png'
import logoFacebook from '../../assets/images/logo_facebook.svg'
import logoTwitter from '../../assets/images/logo_twitter.svg'

const Footer = () => (
  <FooterContainer>
    <InfoContainer>
      <LogosContainer>
        <Logo src={logoVector} />
        <SocialMedia>
          <Link to="#">
            <img src={logoInstagram} alt="Instagram" />
          </Link>
          <Link to="#">
            <img src={logoFacebook} alt="Facebok" />
          </Link>
          <Link to="#">
            <img src={logoTwitter} alt="Twitter" />
          </Link>
        </SocialMedia>
      </LogosContainer>
    </InfoContainer>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </FooterContainer>
)

export default Footer
