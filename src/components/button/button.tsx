import { StyledButton } from './button.styles';

interface IButton {
  title: string;
  action: () => void;
}
const Button = (props: IButton) => {
  const { title } = props;
  return <StyledButton variant="contained">{title}</StyledButton>;
};

export default Button;
