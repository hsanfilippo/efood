import { Button, Tag } from './styles'

type Props = {
  text: string
  isButton: boolean
  to?: string
}

const ButtonTag = ({ isButton, text, to }: Props) => {
  return isButton ? <Button>{text}</Button> : <Tag>{text}</Tag>
}

export default ButtonTag
