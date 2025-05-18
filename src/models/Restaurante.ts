class Restaurante {
  image: string
  title: string
  description: string
  rate: number
  tags: string[]
  id: number

  constructor(
    image: string,
    title: string,
    description: string,
    rate: number,
    tags: string[],
    id: number
  ) {
    this.image = image
    this.title = title
    this.description = description
    this.rate = rate
    this.tags = tags
    this.id = id
  }
}

export default Restaurante
