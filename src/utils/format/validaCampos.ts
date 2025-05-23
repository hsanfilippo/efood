export const confirmaEmail = (email: string, confirmacao: string) => {
  let isEqual = false

  if (email === confirmacao) {
    isEqual = true
    return isEqual
  }
  return isEqual
}
