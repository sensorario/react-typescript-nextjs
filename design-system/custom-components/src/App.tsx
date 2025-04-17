import { useState } from 'react';
import './App.css'
import { FormGroup, Switch, FormControlLabel } from '@mui/material'

function App() {
  type SwitchState = {
    name: string;
    checked: boolean;
  };

  const initialState: SwitchState[] = [
    { name: 'good', checked: false },
    { name: 'fast', checked: false },
    { name: 'cheap', checked: false }
  ];

  const [switches, setSwitches] = useState(initialState);

  const numOfActiveCheckboxes = switches.filter(item => item.checked).length;

  const CheckBoxes = () => {

    const clickCheckboxHandler = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
      let nameToBeRemoved: string = '';

      if (switches.filter(item => item.checked).length === 2) {
        nameToBeRemoved = switches.filter(item => item.checked)[Math.round(Math.random())].name;
      }

      const newState = switches.map((item: SwitchState) => {

        if (item.name !== name) {
          return nameToBeRemoved === item.name ? { ...item, checked: false } : item;
        }

        return {
          ...item,
          checked: event.target.checked
        };
      });

      setSwitches(newState);
    };

    return switches.map((item, key) => (
      <FormControlLabel
        key={key}
        control={
          <Switch
            checked={item.checked}
            onChange={(event) => clickCheckboxHandler(event, item.name)}
          />
        }
        label={item.name}
      />
    ))
  }

  return (
    <>
      <h1>Custom components</h1>
      <FormGroup>
        <CheckBoxes />
      </FormGroup>
      <p>Active switch number: {numOfActiveCheckboxes}</p>
    </>
  )
}

export default App
