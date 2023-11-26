import React from "react";
import TextField from "@mui/material/TextField";

interface TextInputProps {
  title?: string;
  inputType: "text" | "password" | "email" | "number" | "date" | "url" | "tel";
  label: string;
  placeholder?: string;
  defaultValue?: any;
  name?: string;
  id?: string;
}

function InputFieldNew({
  title,
  inputType,
  label,
  placeholder,
  defaultValue,
  name,
  id,
}: TextInputProps) {
  return (
    <>
      <TextField
        title={title}
        type={inputType}
        defaultValue={defaultValue}
        name={name}
        id={id}
        variant="standard"
        fullWidth
        sx={{
          "& .MuiInputBase-input": {
            py: 2.5,
            px: 0,
            fontSize: "0.875rem", // equivalent to Tailwind text-sm
            color: "#000", // Tailwind text-gray-900
            backgroundColor: "transparent", // Tailwind bg-transparent
            border: 0,
            borderBottom: "2px solid #ccc", // Tailwind border-b-2 border-gray-300
            outline: "none", // Tailwind focus:outline-none
            "&:focus": {
              borderBottomColor: "#007BFF", // Tailwind focus:border-blue-600
            },
          },
          "& .MuiInputLabel-root": {
            fontSize: "0.875rem", // equivalent to Tailwind text-sm
            color: "#808080", // Tailwind text-gray-500
            transform: "translate(0, 1.5px) scale(0.75)", // Equivalent to Tailwind transform -translate-y-6 scale-75
            "&.Mui-focused": {
              color: "#007BFF", // Equivalent to Tailwind text-blue-600
              transform: "translate(0, -6px) scale(0.75)", // Equivalent to Tailwind transform -translate-y-6 scale-75
            },
          },
        }}
        placeholder={placeholder}
        required
      />
    </>
  );
}

export default InputFieldNew;
