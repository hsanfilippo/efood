import { useEffect, useState } from 'react'
import { ModalBody, ModalContent } from './styles'
import Restaurante from '../../models/Restaurante'

import fechar from '../../assets/images/fechar.png'

type ModalState = {
  isVisible: boolean
  image: ''
}

const Modal = () => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: true,
    image: ''
  })
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
    console.log(restaurantes)
  }, [])

  const closeModal = () => {
    setModal({
      isVisible: false,
      image: ''
    })
  }

  return (
    <ModalBody className={modal.isVisible ? 'visivel' : ''}>
      <ModalContent className="container">
        <header>
          <img
            src={fechar}
            alt="Ícone de fechar"
            onClick={() => closeModal()}
          />
        </header>
        <img src="#" alt="" />
      </ModalContent>
      <div className="overlay" onClick={() => closeModal()}></div>
    </ModalBody>
  )
}

export default Modal
