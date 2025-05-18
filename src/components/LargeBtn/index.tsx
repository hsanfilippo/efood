import { ButtonBody } from './styles'

type Props = {
  text: string
}

const LargeBtn = ({ text }: Props) => <ButtonBody>{text}</ButtonBody>

export default LargeBtn
