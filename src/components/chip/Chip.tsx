import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

interface ChipsProps {
  chipcolor: "primary" | "success" | "warning";
  chipLabel: "Minor" | "Normal" | "Important";
}

export default function Chips({ chipcolor, chipLabel }: ChipsProps) {
  return (
    <Stack spacing={1}>
      {/* <Stack direction="row" spacing={1}>
        <Chip label="success" color="success" />
      </Stack> */}
      <Stack direction="row" spacing={1}>
        <Chip label={chipLabel} color={chipcolor} />
      </Stack>
    </Stack>
  );
}
