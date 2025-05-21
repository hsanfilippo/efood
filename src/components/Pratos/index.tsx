import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

import CardPrato from '../CardPrato'
import { PratosContainer, PratosList, ModalBody, ModalContent } from './styles'
import { GlobalContainer } from '../../styles'
import fechar from '../../assets/images/fechar.png'
import LargeBtn from '../LargeBtn'

import { useGetRestauranteByIdQuery } from '../../services/api'
import { add, open } from '../../store/reducers/cart'

type Prato = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type ModalState = {
  isVisible: boolean
}

const Pratos = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const { data: restaurante } = useGetRestauranteByIdQuery(id!)

  const [pratoSelecionado, setPratoSelecionado] = useState<Prato | null>(null)
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const addToCart = (pratoSelecionado: Prato) => {
    dispatch(add(pratoSelecionado!))
    dispatch(open())
  }

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <PratosContainer>
      <GlobalContainer>
        <PratosList>
          {restaurante.cardapio.map((prato) => (
            <li key={id}>
              <CardPrato
                image={prato.foto}
                title={prato.nome}
                description={prato.descricao}
                id={prato.id}
                onClick={() => {
                  setPratoSelecionado(prato)
                  setModal({ isVisible: true })
                }}
              />
            </li>
          ))}
        </PratosList>
        <ModalBody className={modal.isVisible ? 'visivel' : ''}>
          <ModalContent className="container">
            {pratoSelecionado && (
              <>
                <header>
                  <img
                    src={fechar}
                    alt="Ícone de fechar"
                    onClick={() => closeModal()}
                  />
                </header>
                <div className="conteudo">
                  <img
                    src={pratoSelecionado.foto}
                    alt={pratoSelecionado.nome}
                  />
                  <div className="info">
                    <h3>{pratoSelecionado.nome}</h3>
                    <p>{pratoSelecionado.descricao}</p>
                    <p>Serve: {pratoSelecionado.porcao}</p>
                    <div onClick={() => addToCart(pratoSelecionado)}>
                      <LargeBtn
                        text={`Adicionar ao carrinho - R$ ${pratoSelecionado.preco.toFixed(
                          2
                        )}`}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </ModalContent>
          <div className="overlay" onClick={() => closeModal()}></div>
        </ModalBody>
      </GlobalContainer>
    </PratosContainer>
  )
}

export default Pratos
