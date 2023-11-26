import React from "react";
import MiniDrawer from "../components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import { Box, CssBaseline, Grid, styled } from "@mui/material";
import DocumentPage from "./documentPage/DocumentPage";
import ActivityCenter from "./activityCenter/ActivityCenter";
import { Login } from "@mui/icons-material";
import Settings from "./settings/Settings";
import FolderContentPage from "./testFolderCreation/folder/FolderContentPage";
import CreateFolderPage from "./testFolderCreation/CreateFolderPage";
import UserForm from "./settings/UserForm";
import { Breadcrumb } from "../components/breadCrumb/BreadCrumb";
import Footer from "../components/footer/Footer";

type Props = {};

function MainLayout({}: Props) {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  return (
    <>
      {/* <MiniDrawer /> */}
      <Box sx={{ display: "flex", backgroundColor: "#EEF0F3" }}>
        <CssBaseline />
        <MiniDrawer />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 2,
            overflow: "auto",
            height: "100vh",
            // display: "flex",
            // flexDirection: "column",
          }}
        >
          <DrawerHeader />
          <Routes>
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<DocumentPage />} path="/document" />
            <Route element={<ActivityCenter />} path="/activity" />
            <Route element={<UserForm />} path="/settings" />
            <Route element={<Login />} path="/" />
            {/* ////////// */}
            <Route
              element={<FolderContentPage />}
              path="/folders/:folderName"
            />
            <Route element={<CreateFolderPage />} path="/create" />
          </Routes>

          {/* <Footer /> */}
        </Box>
      </Box>
    </>
  );
}

export default MainLayout;
