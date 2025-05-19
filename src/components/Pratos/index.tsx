import CardPrato from '../CardPrato'

import { PratosContainer, PratosList } from './styles'
import { GlobalContainer } from '../../styles'

import Restaurante from '../../models/Restaurante'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Pratos = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurante>()
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

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
              />
            </li>
          ))}
        </PratosList>
      </GlobalContainer>
    </PratosContainer>
  )
}

export default Pratos
