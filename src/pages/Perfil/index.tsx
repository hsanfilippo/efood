import { useParams } from 'react-router-dom'

import HeaderPerfil from '../../components/HeaderPerfil'
import Pratos from '../../components/Pratos'

import { useGetRestauranteByIdQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()

  const { data: restaurante } = useGetRestauranteByIdQuery(id!)

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
