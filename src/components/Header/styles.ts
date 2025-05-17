import styled from 'styled-components'
import { cores } from '../../styles'

export const Background = styled.div`
  background-size: cover;
  display: block;
  height: 384px;
  padding-top: 64px;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;

  .container {
    max-width: 539px;
  }

  .logo-container {
    display: flex;
    justify-content: space-around;
  }
`

export const Logo = styled.img`
  width: 125px;
  margin-bottom: 138px;
`

export const CtaBanner = styled.h2`
  font-size: 36px;
  font-weight: bolder;
  text-align: center;
  color: ${cores.coral};
`
