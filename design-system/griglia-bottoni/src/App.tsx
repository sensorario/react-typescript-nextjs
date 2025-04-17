import './App.css';
import { Button } from '@mui/material';
import { AddAPhoto, AddHome, AddHomeWorkRounded } from '@mui/icons-material';


function App() {
  return (
    <div className="App">
      <br />
      <Button variant='contained' color='primary'>bottone di Material</Button>
      <button>bottone normale</button>
      <br />
      <AddHome /> home
      <AddAPhoto /> photo
      <AddHomeWorkRounded /> home work
      <br />
    </div>
  );
}

export default App;
