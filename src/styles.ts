import { createGlobalStyle } from 'styled-components'

export const cores = {
  coral: '#E66767',
  bege: '#FFEBD9',
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
