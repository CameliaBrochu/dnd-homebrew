import { Control, Controller } from "react-hook-form";
import { TextField as MuiTextField } from "@mui/material";

type Props = {
    name: string
    control: Control<any,any>
    label: string
}

function TextField({ name, control, label }: Props) {
  return (
    <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <MuiTextField {...field} label={label} />
        )}
    />
  )
}

export default TextField