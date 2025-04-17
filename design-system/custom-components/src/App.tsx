import './App.css'
import { useState } from 'react';
import { FormGroup } from '@mui/material'
import { CheckBoxes } from './components/CheckBoxes';
import { SwitchState } from './types/SwitchState';

function App() {
  const initialState: SwitchState[] = [
    { name: 'good', checked: false },
    { name: 'fast', checked: false },
    { name: 'cheap', checked: false },
  ];

  const [switches, setSwitches] = useState(initialState);
  const numOfActiveCheckboxes = switches.filter(item => item.checked).length

  return (
    <>
      <h1>Custom components</h1>
      <FormGroup>
        <CheckBoxes switches={switches} setSwitches={setSwitches} />
      </FormGroup>
      <p>Active switch number: {numOfActiveCheckboxes}</p>
    </>
  )
}

export default App
