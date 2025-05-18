import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  padding-top: 80px;
  padding-bottom: 120px;
  display: flex;
  justify-content: center;
  background-color: ${cores.begeClaro};
`

export const ListaRestaurantes = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;
`

export const RestauranteThumb = styled.li`
  background-color: ${cores.branco};
`
