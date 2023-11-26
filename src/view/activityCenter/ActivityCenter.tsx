import { Box, Grid, Grow, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputFieldNew from "../../components/input/NewTextField";
import { CustomTextField } from "../../components/input/CustomTextField ";
import DataTable from "../../components/table/DataTable";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IosShareIcon from "@mui/icons-material/IosShare";
import GetAppIcon from "@mui/icons-material/GetApp";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Chips from "../../components/chip/Chip";
import ArticleIcon from "@mui/icons-material/Article";
import FolderIcon from "@mui/icons-material/Folder";
import ClickableLinkChips from "../../components/chip/ClickableChips";
import { Filter2 } from "@mui/icons-material";

function ActivityCenter() {
  const [storededData, setStorededData] = useState<any[]>([
    {
      id: 1,
      name: "Doc Name 1",
      type: "folder",
      size: "50MB",
      tag: "major",
      // path: `../../mainlayout/folders/${"Doc Name 1"}`,
    },
    {
      id: 2,
      name: "Doc Name 2",
      type: "folder",
      size: "50MB",
      tag: "major",
      // path: `../../mainlayout/folders/${"Doc Name 2"}`,
    },
    {
      id: 3,
      name: "Doc Name 3",
      type: "file",
      size: "50MB",
      tag: "major",
      // path: `../../mainlayout/folders/${"Doc Name 3"}`,
    },
    {
      id: 4,
      name: "Doc Name 4",
      type: "folder",
      size: "50MB",
      tag: "minor",
      // path: `../../mainlayout/folders/${"Doc Name 4"}`,
    },
    {
      id: 5,
      name: "Doc Name 5",
      type: "file",
      size: "50MB",
      tag: "normal",
      // path: `../../mainlayout/folders/${"Doc Name 5"}`,
    },
    {
      id: 6,
      name: "Doc Name 6",
      type: "file",
      size: "50MB",
      tag: "normal",
      // path: `../../mainlayout/folders/${"Doc Name 6"}`,
    },
  ]);
  const [tableDataArray, setTableDataArray] = useState<any[]>([]);
  useEffect(() => {
    setTableDataArray(fomatData(storededData));
  }, [storededData]);
  const FileIcon = (name: string, fileType: any) => {
    return (
      <>
        <Box sx={{ display: "flex" }}>
          {fileType == "file" ? (
            <ArticleIcon sx={{ color: "#626567", marginRight: "5px" }} />
          ) : (
            <FolderIcon sx={{ color: "#F4D03F", marginRight: "5px" }} />
          )}
          <Typography>{name}</Typography>
        </Box>
      </>
    );
  };

  const click1 = () => {
    alert("clicked");
  };

  const fomatData = (data: any[]) => {
    return data.map((d: any) => ({
      id: d.id,
      name: FileIcon(d.name, d.type),
      size: d.size,
      tag:
        d.tag == "major" ? (
          <Chips chipcolor={"warning"} chipLabel={"Important"} />
        ) : d.tag == "normal" ? (
          <Chips chipcolor={"primary"} chipLabel={"Normal"} />
        ) : d.tag == "minor" ? (
          <Chips chipcolor={"success"} chipLabel={"Minor"} />
        ) : (
          ""
        ),
    }));
  };
  // folder filter
  const folderClick = () => {
    console.log("folderClick");
    const filteredData = storededData.filter((item) => {
      // const codematch = data.code ? item.code == data.code : true;
      const folder = item.type == "folder";
      return folder;
    });
    setTableDataArray(fomatData(filteredData));
    console.log(filteredData);
  };
  // important filter
  const important = () => {
    console.log("folderClick");
    const filteredData = storededData.filter((item) => {
      // const codematch = data.code ? item.code == data.code : true;
      const folder = item.tag == "important";
      return folder;
    });
    setTableDataArray(fomatData(filteredData));
    console.log(filteredData);
  };
  // normal filter
  const normal = () => {
    console.log("folderClick");
    const filteredData = storededData.filter((item) => {
      // const codematch = data.code ? item.code == data.code : true;
      const folder = item.tag == "normal";
      return folder;
    });
    setTableDataArray(fomatData(filteredData));
    console.log(filteredData);
  };
  // normal filter
  const minor = () => {
    console.log("folderClick");
    const filteredData = storededData.filter((item) => {
      // const codematch = data.code ? item.code == data.code : true;
      const folder = item.tag == "minor";
      return folder;
    });
    setTableDataArray(fomatData(filteredData));
    console.log(filteredData);
  };
  // file filter
  const fileClick = () => {
    console.log("folderClick");
    const filteredData = storededData.filter((item) => {
      // const codematch = data.code ? item.code == data.code : true;
      const folder = item.type == "file";
      return folder;
    });
    setTableDataArray(fomatData(filteredData));
    console.log(filteredData);
  };
  // All filter
  const AllClick = () => {
    setTableDataArray(fomatData(storededData));
  };

  const actionButtonArray = [
    {
      icon: <RemoveRedEyeIcon sx={{ color: "#000", fontSize: "exlarge" }} />,
      action: () => {},
      tooltip: "View",
    },
    {
      icon: <EditIcon sx={{ color: "#000", fontSize: "exlarge" }} />,
      action: () => {},
      tooltip: "Edit",
    },
    {
      icon: <GetAppIcon sx={{ color: "#000", fontSize: "exlarge" }} />,
      action: () => () => {},
      tooltip: "Download",
    },
    {
      icon: <IosShareIcon sx={{ color: "#000", fontSize: "exlarge" }} />,
      action: () => () => {},
      tooltip: "Share",
    },
    {
      icon: <DeleteIcon sx={{ color: "#000", fontSize: "exlarge" }} />,
      action: () => () => {},
      tooltip: "Delete",
    },
    {
      icon: <NavigateNextIcon sx={{ color: "#000", fontSize: "exlarge" }} />,
      action: () => {},
      tooltip: "Go to page",
    },
  ];
  const [checked, setChecked] = React.useState(false);
  useEffect(() => {
    const animation = setTimeout(() => {
      setChecked(true);
    }, 0);
    return () => clearTimeout(animation);
  }, []);
  const tableHeaders = [
    "#Id",
    "Document Name",
    "Document Size",
    "Document Tag",
  ];
  return (
    <>
      <Grow
        in={checked}
        style={{ transformOrigin: "0 0 0" }}
        {...(checked ? { timeout: 1000 } : {})}
      >
        <h1 style={{ color: "gray" }}>Activity Center</h1>
      </Grow>

      <Grow
        in={checked}
        style={{ transformOrigin: "0 0 0" }}
        {...(checked ? { timeout: 1500 } : {})}
      >
        <Stack
          useFlexGap={true}
          direction="row"
          spacing={3}
          flexWrap={"wrap"}
          justifyContent={"center"}
          sx={{ width: "100%", marginBottom: "20px" }}
        >
          <ClickableLinkChips label={"All Documents"} click={AllClick} />
          <ClickableLinkChips label={"Important Documents"} click={important} />
          <ClickableLinkChips label={"Normal Documents"} click={normal} />
          <ClickableLinkChips label={"Minor Documents"} click={minor} />
          <ClickableLinkChips label={"All Files"} click={fileClick} />
          <ClickableLinkChips label={"All Folders"} click={folderClick} />
        </Stack>
      </Grow>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          overflow: "auto",
        }}
      >
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 2000 } : {})}
        >
          <Grid
            item
            md={12}
            lg={12}
            sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
          >
            <DataTable
              rows={tableDataArray}
              headers={tableHeaders}
              actionButton={[]}
              id={"id"}
            />
          </Grid>
        </Grow>
      </Grid>
    </>
  );
}

export default ActivityCenter;
