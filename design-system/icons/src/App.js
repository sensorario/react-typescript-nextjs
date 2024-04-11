import './App.css';
import { Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import {AddAPhoto, AddHome, AddHomeWorkRounded, HomeIcon} from '@mui/icons-material'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Container>
      <AddHome /> home
      <AddAPhoto /> photo
      <AddHomeWorkRounded /> home work
    </Container>
  );
}

export default App;
