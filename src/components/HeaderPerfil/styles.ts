import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.div`
  background-color: #000000;
`

export const BannerBg = styled.header`
  background-size: cover;
  display: block;
  height: 186px;
  padding-top: 64px;
  padding-bottom: 40px;
  color: ${cores.coral};

  .container {
    max-width: 1024px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
  }
`

export const HeroBg = styled.header`
  background-size: cover;
  background-repeat: no-repeat;
  height: 280px;
  opacity: 60%;
`

export const TagRestaurante = styled.h3`
  font-size: 32px;
  font-weight: 100;
  color: ${cores.branco};
`

export const TitleRestaurante = styled.h3`
  font-size: 32px;
  font-weight: bolder;
  color: ${cores.branco};
`
