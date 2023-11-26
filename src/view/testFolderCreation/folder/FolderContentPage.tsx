import { Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import CreateFolderPage from "../CreateFolderPage";

const FolderContentPage: React.FC = () => {
  const { folderName } = useParams<{ folderName: string }>();
  console.log(folderName);
  return (
    <>
      {" "}
      <Grid container>
        <Grid item md={12}>
          <div>
            <h1 style={{ color: "gray", marginLeft: "139px" }}>
              Folder Content
            </h1>
            <p style={{ color: "gray", marginLeft: "139px" }}>
              {folderName ? `Content ${folderName}` : "Default Text"}

              {/* <CreateFolderPage fld={[]} /> */}
            </p>
            <CreateFolderPage fld={[]} />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default FolderContentPage;
