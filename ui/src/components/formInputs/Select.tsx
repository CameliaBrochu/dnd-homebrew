import { Control, Controller } from "react-hook-form";
import { Select as MuiSelect, FormControl, InputLabel, MenuItem } from "@mui/material";

type Option = {
    label: any,
    value: any
}

type Props = {
    name: string
    control: Control<any,any>
    label: string
    options: Option[]
    value: any
}

function Select({ name, control, label, options}: Props) {

    const generateOptions = () => {
        return options.map((o: Option) => {
            return (
                <MenuItem key={o.value} value={o.value}>
                    {o.label}
                </MenuItem>
            )
        })
    }



  return (
    <FormControl>
        <InputLabel>{label}</InputLabel>
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <MuiSelect  onChange={field.onChange} value={field.value}>
                    <MenuItem value={""}>-</MenuItem>
                    {generateOptions()}
                </MuiSelect>
            )}
    />
    </FormControl>
    
  )
}

export default Select