import { Controller } from "react-hook-form";
import { TextField as MuiTextField } from "@mui/material";

type Props = {
    name: string
    control: any
    label: string
    rows: number
}

function TextArea({ name, control, label, rows }: Props) {
  return (
    <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <MuiTextField {...field} label={label} multiline rows={rows} />
        )}
    />
  )
}

export default TextArea