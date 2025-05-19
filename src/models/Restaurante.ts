class Restaurante {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    id: number
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
  }

  constructor(
    id: number,
    titulo: string,
    destacado: boolean,
    tipo: string,
    avaliacao: number,
    descricao: string,
    capa: string,
    cardapio: {
      id: number
      foto: string
      preco: number
      nome: string
      descricao: string
      porcao: string
    }
  ) {
    this.id = id
    this.titulo = titulo
    this.destacado = destacado
    this.tipo = tipo
    this.avaliacao = avaliacao
    this.descricao = descricao
    this.capa = capa
    this.cardapio = cardapio
  }
}

export default Restaurante
