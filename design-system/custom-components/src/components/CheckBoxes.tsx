import { FormControlLabel, Switch } from "@mui/material";
import { SwitchState } from "../types/SwitchState";

type CheckBoxesProps = {
    switches: SwitchState[]
    setSwitches: (items: SwitchState[]) => void
}

export const CheckBoxes = (
    { switches: items, setSwitches }: CheckBoxesProps
) => {
    const handler = (
        event: React.ChangeEvent<HTMLInputElement>,
        name: string
    ) => {
        let removable: string = '';

        if (items.filter(item => item.checked).length > 1) {
            const index = Math.round(Math.random())
            removable = items
                .filter(item => item.checked)[index].name;
        }

        const ret = items.map((item: SwitchState) => {
            if (item.name !== name) {
                const val = {
                    ...item,
                    checked: !event.target.checked
                }

                return removable === item.name ? val : item;
            }

            return {
                ...item,
                checked: event.target.checked
            };
        });

        setSwitches(ret);
    };

    return items.map((item, key) => (
        <FormControlLabel
            key={key}
            control={
                <Switch
                    checked={item.checked}
                    onChange={
                        (event) => handler(event, item.name)
                    }
                />
            }
            label={item.name}
        />
    ))
}