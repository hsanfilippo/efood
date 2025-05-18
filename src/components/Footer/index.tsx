import { Logo } from '../../styles'

import logoVector from '../../assets/images/logo_vector.svg'
import logoInstagram from '../../assets/images/logo_instagram.svg'
import logoFacebook from '../../assets/images/logo_facebook.svg'
import logoTwitter from '../../assets/images/logo_twitter.svg'

const Footer = () => (
  <footer>
    <Logo src={logoVector} />
    <div>
      <img src={logoInstagram} alt="Instagram" />
      <img src={logoFacebook} alt="Facebok" />
      <img src={logoTwitter} alt="Twitter" />
    </div>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </footer>
)

export default Footer
