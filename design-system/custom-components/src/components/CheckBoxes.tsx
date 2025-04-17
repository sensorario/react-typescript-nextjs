import { FormControlLabel, Switch } from "@mui/material";
import { SwitchState } from "../types/SwitchState";

type CheckBoxesProps = {
    switches: SwitchState[]
    setSwitches: (items: SwitchState[]) => void
}

export const CheckBoxes = ({ switches, setSwitches }: CheckBoxesProps) => {
    const clickCheckboxHandler = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
        let nameToBeRemoved: string = '';

        if (switches.filter(item => item.checked).length > 1) {
            nameToBeRemoved = switches.filter(item => item.checked)[Math.round(Math.random())].name;
        }

        const newState = switches.map((item: SwitchState) => {
            if (item.name !== name) {
                return nameToBeRemoved === item.name ? { ...item, checked: !event.target.checked } : item;
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