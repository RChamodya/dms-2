import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { Clear } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

interface Option {
  label: any;
  value: any;
}

interface FormInputDropdownFieldProps {
  defaultValue?: string | number;
  label: string;
  required: boolean;
  labelId: string;
  name: string;
  errorMessage?: any;
  control: any;
  optionList: any;
  disabled: boolean;
}

const FormInputDropdownField = (props: FormInputDropdownFieldProps) => {
  const handleClear = (onChange: any) => {
    onChange("");
  };

  const handleChange = (event: any, onChange: any) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <FormControl
      fullWidth
      className="custom_select"
      variant="outlined"
      size="small"
      error={!!props.errorMessage}
    >
      <InputLabel
        id="loc-based-label"
        className="mb-2"
        shrink={false}
        required={props.required}
      >
        {props.label}
      </InputLabel>
      <Controller
        name={props.name}
        control={props.control}
        defaultValue={props.defaultValue ? props.defaultValue : ""}
        render={({ field: { onChange, value } }) => (
          <Select
            defaultValue={""}
            labelId={props.labelId}
            className="input-container"
            id={props.name}
            size="small"
            disabled={props.disabled}
            value={props.optionList?.length > 0 && value ? value : ""}
            onChange={(event) => handleChange(event, onChange)}
            sx={{
              "& .MuiSelect-iconOutlined": { display: value ? "none" : "" },
            }}
            endAdornment={
              value && !props.disabled ? (
                <InputAdornment position="end">
                  <IconButton
                    size={"small"}
                    onClick={() => handleClear(onChange)}
                    edge="end"
                  >
                    <Clear fontSize={"small"} />
                  </IconButton>
                </InputAdornment>
              ) : (
                <></>
              )
            }
          >
            {props.optionList.map((c: Option, i: number) => (
              <MenuItem key={`c-${i}`} value={c.value}>
                {c.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      <FormHelperText>{props.errorMessage?.toString()}</FormHelperText>
    </FormControl>
  );
};

export default FormInputDropdownField;
