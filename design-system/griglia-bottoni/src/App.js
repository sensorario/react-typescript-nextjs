import './App.css';
import { Button, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material'

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
      <HomeIcon />
      <br />
      <Button variant='contained' color='primary'>bottone di Material</Button>
      <button>bottone normale</button>
      <br />
      <br />
      <br />
      <br />
      <Grid container spacing={2} color='primary'>
        <Grid xs={8}>
          <Item>Simone</Item>
        </Grid>
        <Grid xs={4}>
          <Item>@sensorario</Item>
        </Grid>
        <Grid xs={4}>
          <Item>Romagna mia</Item>
        </Grid>
        <Grid xs={8}>
          <Item>Bologna</Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
