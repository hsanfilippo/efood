import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.coral};
  color: ${cores.bege};
  max-width: 320px;
  height: 338px;
  width: 100%;
  padding: 8px;
  position: relative;

  > img {
    width: 100%;
    height: 167px;
    object-fit: cover;
  }

  button {
    position: absolute;
    bottom: 8px;
    left: 8px;
    cursor: pointer;
  }
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
