import { Logo } from '../../styles'

import {
  FooterContainer,
  InfoContainer,
  LogosContainer,
  SocialMedia
} from './styles'

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
          <img src={logoInstagram} alt="Instagram" />
          <img src={logoFacebook} alt="Facebok" />
          <img src={logoTwitter} alt="Twitter" />
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
