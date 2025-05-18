import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.coral};
  color: ${cores.bege};
  max-width: 320px;
  width: 100%;
  padding: 8px;
`

export const TitlePrato = styled.h3`
  font-size: 16px;
  font-weight: bolder;
  margin: 8px 0;
`

export const DescriptionPrato = styled.p`
  font-size: 14px;
  line-height: 22px;
`
