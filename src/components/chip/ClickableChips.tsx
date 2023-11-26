import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

interface ClickableLinkChipsProps {
  label: any;
  href?: any;
  click: any;
}
export default function ClickableLinkChips({
  label,
  href,
  click,
}: ClickableLinkChipsProps) {
  return (
    <Stack direction="row" spacing={1}>
      {/* <Chip label="Clickable Link" component="a" href="#basic-chip" clickable /> */}
      <Chip label={label} component="a" href={href} clickable onClick={click} />
    </Stack>
  );
}
