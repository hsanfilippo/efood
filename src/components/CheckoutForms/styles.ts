import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonBody } from '../LargeBtn/styles'

type InputGroupProps = {
  maxWidth?: string
}

export const TabTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 16px;
  color: ${cores.bege};
`

export const Container = styled.div`
  padding: 8px;

  .input-flex {
    display: flex;
    justify-content: space-between;
    column-gap: 32px;
    max-width: 100%;
    width: 100%;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  margin-top: 8px;
  max-width: ${(props) => props.maxWidth || 'auto'};
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    color: ${cores.bege};
    margin-bottom: 8px;
    font-weight: bold;
  }

  input {
    background-color: ${cores.bege};
    color: ${cores.cinza};
    font-size: 14px;
    font-weight: bold;
    padding: 8px;
    border: 1px solid ${cores.bege};
    height: 32px;
  }
`

export const TextoConcluir = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.bege};
`

export const ButtonsContainer = styled.div`
  margin-top: 24px;
`

export const LargeBtnSubmit = styled(ButtonBody)``
