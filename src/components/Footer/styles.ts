import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.bege};
  height: 298px;
  padding-top: 40px;
  padding-bottom: 40px;

  p {
    font-size: 10px;
    color: ${cores.coral};
    text-align: center;
    max-width: 480px;
    margin: 0 auto;
  }
`
export const InfoContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

export const LogosContainer = styled.div`
  margin-bottom: 80px;
`

export const SocialMedia = styled.div`
  margin: 32px auto 0 auto;
  max-width: 88px;
  display: flex;
  justify-content: space-between;
`

export const TextContainer = styled.div``
