import { useEffect, useState } from "react"
import { Control, Controller } from "react-hook-form"
import { Checkbox as MuiCheckbox, FormControl, FormControlLabel, FormLabel } from "@mui/material"

type Props = {
  name: string
  control: Control<any,any>
  label: string
}


function Checkbox({ name, control, label }: Props) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <FormControlLabel
                    control={
                        <MuiCheckbox {...field} />
                    }
                    label={label}
                    key={label}
                />

            )}
        />
      )
}

export default Checkbox