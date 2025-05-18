import styled from 'styled-components'
import { cores } from '../../styles'

export const PratosContainer = styled.div`
  background-color: ${cores.begeClaro};
`

export const PratosList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
  padding-top: 56px;
  padding-bottom: 120px;
`
