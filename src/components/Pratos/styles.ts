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

export const ModalBody = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    z-index: 9;
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.coral};
  display: flex;
  padding: 32px;
  max-width: 1024px;
  width: 100%;
  z-index: 10;
  position: relative;
  color: ${cores.branco};

  header {
    position: absolute;
    top: 8px;
    right: 8px;

    img {
      cursor: pointer;
      width: 16px;
      height: 16px;
    }
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  .conteudo {
    display: flex;
    gap: 24px;
    align-items: flex-start;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      margin: 16px 0;
    }

    button {
      cursor: pointer;
    }
  }
`
