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

  a {
    font-weight: bold;
    text-decoration: none;
    color: ${cores.coral};
    font-size: 18px;

    &:hover {
      color: ${cores.amarelo};
    }
  }

  h3 {
    cursor: pointer;

    &:hover {
      color: ${cores.amarelo};
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const HeroBg = styled.div`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  height: 280px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 0;
  }
`

export const TagRestaurante = styled.h3`
  font-size: 32px;
  font-weight: 100;
  color: ${cores.branco};
  position: absolute;
  top: 24px;
`

export const TitleRestaurante = styled.h2`
  font-size: 32px;
  font-weight: bolder;
  color: ${cores.branco};
  position: absolute;
  bottom: 32px;
`
