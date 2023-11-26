import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import { Controller } from "react-hook-form";

interface FormDropdownProps extends SelectProps {
  name: string;
  options: Array<any>;
  helperText: any;
  control: any;
}

export const FormDropdown = ({
  name,
  label,
  labelId,
  id,
  options,
  error,
  helperText,
  required,
  control,
  defaultValue,
  disabled,
  fullWidth,
}: FormDropdownProps) => {
  const handleChange = (event: any, onChange: any) => {
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth={fullWidth} size={"small"} error={error}>
      <InputLabel required={required} id={labelId}>
        {label}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue ? defaultValue : ""}
        render={({ field: { onChange, value } }) => (
          <Select
            disabled={disabled}
            size={"small"}
            label={label}
            labelId={labelId}
            id={id}
            value={value}
            onChange={(event) => handleChange(event, onChange)}
          >
            {options?.map((opt: any, index) => (
              <MenuItem key={index} value={opt?.value}>
                {opt?.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
