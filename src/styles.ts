import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const cores = {
  coral: '#E66767',
  bege: '#FFEBD9',
  begeClaro: '#FFF8F2',
  amarelo: '#FFB930',
  branco: '#FFFFFF'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }
`

export const GlobalContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const Logo = styled.img`
  width: 125px;
`
