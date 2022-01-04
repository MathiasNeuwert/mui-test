import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(MuiButton)(({ theme }) => ({
  textTransform: 'none',
  color: '#fff',
  fontWeight: 'bold',
  padding: 20,
  borderRadius: 20
}));
