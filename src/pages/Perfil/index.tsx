import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import HeaderPerfil from '../../components/HeaderPerfil'
import Pratos from '../../components/Pratos'
import Restaurante from '../../models/Restaurante'

const Perfil = () => {
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
    <>
      <HeaderPerfil
        cover={restaurante.capa}
        title={restaurante.titulo}
        type={restaurante.tipo}
      />
      <Pratos />
    </>
  )
}

export default Perfil
