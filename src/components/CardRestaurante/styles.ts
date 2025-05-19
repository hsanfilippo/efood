import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 472px;
  position: relative;
  color: ${cores.coral};

  > img {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`

export const CardContainer = styled.div`
  padding: 8px;
`

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;

  div {
    margin-left: 8px;
  }
`

export const TitleRateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 8px;
  }

  img {
    height: 21px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px auto;
`
