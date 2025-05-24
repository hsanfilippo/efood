import Prato from '../models/Prato'

export const getTotalPrice = (items: Prato[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.preco) {
      return (accumulator += currentItem.preco)
    }
    return 0
  }, 0)
}
