import styled from 'styled-components'
import { cores } from '../../styles'

import lixeira from '../../assets/images/lixeira_vector.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  content: '';
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.coral};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  button {
    width: 100%;
  }

  .empty-cart {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 220px;
      margin-bottom: 16px;
      opacity: 0.7;
    }

    p {
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      color: ${cores.bege};
    }
  }
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px 8px 12px 8px;
  position: relative;
  background-color: ${cores.bege};
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${cores.coral};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    color: ${cores.coral};
    font-size: 14px;
    line-height: 22px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

export const Total = styled.div`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  color: ${cores.bege};
  margin-bottom: 8px;
`
