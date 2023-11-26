import { Button, Grid, Popover, Typography } from "@mui/material";

import CreateFolderPage from "../testFolderCreation/CreateFolderPage";
import BasicPopover from "../../components/popover/BasicPopover";
import React from "react";
import DataTable from "../../components/table/DataTable";
import { FileTable } from "../../components/table/FileTable";

const tableDataArray = [
  {
    1: "Frozen yoghurt",
    2: "Frozen yoghurt",
    3: "Frozen yoghurt",
    4: "Frozen yoghurt",
  },
  {
    1: "Frozen yoghurt",
    2: "Frozen yoghurt",
    3: "Frozen yoghurt",
    4: "Frozen yoghurt",
  },
  {
    1: "Frozen yoghurt",
    2: "Frozen yoghurt",
    3: "Frozen yoghurt",
    4: "Frozen yoghurt",
  },
  {
    1: "Frozen yoghurt",
    2: "Frozen yoghurt",
    3: "Frozen yoghurt",
    4: "Frozen yoghurt",
  },
  {
    1: "Frozen yoghurt",
    2: "Frozen yoghurt",
    3: "Frozen yoghurt",
    4: "Frozen yoghurt",
  },
  {
    1: "Frozen yoghurt",
    2: "Frozen yoghurt",
    3: "Frozen yoghurt",
    4: "Frozen yoghurt",
  },
];
const tableHeaders = ["header1", "header2", "header3", "header4"];

function DocumentPage() {
  // popover

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // popover
  return (
    <>
      <Grid container sx={{ overflow: "auto" }}>
        <Grid item md={11.1} sm={10.5}>
          <h1 style={{ color: "gray" }}>Document Page</h1>

          {/* <div>
            <Button
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
            >
              Open Popover
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
            </Popover>
          </div> */}

          <CreateFolderPage />

          {/* <FileTable columnHeaders={[]} tableData={rows} /> */}
        </Grid>
      </Grid>
    </>
  );
}

export default DocumentPage;
