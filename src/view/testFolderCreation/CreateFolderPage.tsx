import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  MenuItem,
  Select,
  Grow,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Folder from "../../view/testFolderCreation/folder/Folder";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import * as Yup from "yup";
import { error } from "console";
import ShareIcon from "@mui/icons-material/Share";
import DataTable from "../../components/table/DataTable";
import Chips from "../../components/chip/Chip";
import { ActionButton } from "../../components/buttons/ActionButtons";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// import IosShareIcon from "@mui/icons-material/IosShare";
import GetAppIcon from "@mui/icons-material/GetApp";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { FormDropdown } from "../../components/input/FormDropdown";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormTextField } from "../../components/input/FormTextField";
import ArticleIcon from "@mui/icons-material/Article";
import FolderIcon from "@mui/icons-material/Folder";
import AlertDialogSlide from "../../components/modal/DeleteModalT";
import FileModal from "../../components/modal/FInaleModal";
import ShareModal from "../../components/modal/ShareModal";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// modal component

// modal component

const CreateFolderPage: React.FC<any> = ({ fld }: any) => {
  const [newFolderName, setNewFolderName] = useState<string>("");
  const [folderType, setFolderType] = useState<string>("");
  const [folders, setFolders] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [fileText, setFileText] = useState<string | null>(null);

  const validationSchema = Yup.object().shape({
    documentname: Yup.string().required("Folder Name is required"),
    folderType: Yup.string().required("Folder Type is required"),
    foldertag: Yup.string().required("Folder Tag is required"),
  });

  const navigate = useNavigate();
  const {
    handleSubmit,
    setValue,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // const [isFile, setIsFile] = useState<boolean>(false);

  // const checkFile = () => {
  //   if (type == "file") {
  //     setIsFile(true);
  //   }
  // };

  // useEffect(() => {
  //   checkFile(data);
  // }, []);

  const testNav = (id: any) => {
    console.log(id);
    const testid = storededData.find((d: any) => d.id === id);
    console.log(testid.path);
    if (testid.type == "folder") {
      navigate(testid.path);
      setStorededData([]);
      setTableDataArray([]);
    } else {
      console.log("cannot navigate");
      navigateError();
    }

    // console.log(testid.type);
  };

  // const handleCreateFolder1 = () => {
  //   validationSchema
  //     .validate({ newFolderName, folderType }, { abortEarly: false })
  //     .then(() => {
  //       const folder = `${newFolderName} ${fileText || ""}`;
  //       setFolders((prevFolders) => [...prevFolders, folder]);
  //       setNewFolderName("");
  //       setFolderType("");
  //       setFileText(null);
  //       handleClose();
  //     })
  //     .catch((error) => {
  //       console.error(error.errors);
  //     });
  // };
  const [isCreate, setIsCreate] = useState<boolean>(true);
  const [documentId, setDocumentId] = useState();

  const handleCreateFolder = (data: any) => {
    if (isCreate) {
      const dataobj = {
        id: storededData.length + 1,
        name: data.documentname,
        type: data.folderType,
        size: "50MB",
        tag: data.foldertag,
      };
      setStorededData((stData: any[]) => {
        const newData = [...stData];
        newData.push(dataobj);
        return newData;
      });
      console.log(data);
      handleClose();
    } else {
      if (documentId) {
        console.log(documentId);
        const checkId = storededData.find((i: any) => i.id === documentId);
        const index = storededData.indexOf(checkId);
        const dataobjedit = {
          id: storededData.indexOf(checkId) + 1,
          name: data.documentname,
          type: data.folderType,
          size: "50MB",
          tag: data.foldertag,
        };
        let newArray = [...storededData];
        newArray[index] = dataobjedit;
        setStorededData(newArray);
      }

      // alert("updated");
      handleClose();
    }
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleEditOpenModal = (id: any) => {
    setDocumentId(id);
    setIsCreate(false);
    const testname = storededData.find((d: any) => d.id === id);
    setValue("documentname", testname.name);
    setValue("folderType", testname.type);
    setValue("foldertag", testname.tag);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleFolderTypeChange = (value: string) => {
    setFolderType(value);

    if (value === "File") {
      setFileText("This is a file");
    } else {
      setFileText(null);
    }
  };

  const notifySuccessful = () => {
    toast.success("Download Successfully");
  };
  const navigateError = () => {
    toast.warning("Cannot navigate in to a file");
  };
  const handleDeleteButtonClick = () => {
    setOpenModald(true);
  };
  const handleShareButtonClick = () => {
    setOpenModals(true);
  };
  const [openModald, setOpenModald] = useState<boolean>(false);
  const [openModals, setOpenModals] = useState<boolean>(false);
  const [tableDataArray, setTableDataArray] = useState<any[]>([]);
  const [storededData, setStorededData] = useState<any[]>([
    {
      id: 1,
      name: "Doc Name 1",
      type: "folder",
      size: "50MB",
      tag: "major",
      path: `../../mainlayout/folders/${"Doc Name 1"}`,
    },
    {
      id: 2,
      name: "Doc Name 2",
      type: "folder",
      size: "50MB",
      tag: "major",
      path: `../../mainlayout/folders/${"Doc Name 2"}`,
    },
    {
      id: 3,
      name: "Doc Name 3",
      type: "folder",
      size: "50MB",
      tag: "major",
      path: `../../mainlayout/folders/${"Doc Name 3"}`,
    },
    {
      id: 4,
      name: "Doc Name 4",
      type: "folder",
      size: "50MB",
      tag: "minor",
      path: `../../mainlayout/folders/${"Doc Name 4"}`,
    },
    {
      id: 5,
      name: "Doc Name 5",
      type: "folder",
      size: "50MB",
      tag: "normal",
      path: `../../mainlayout/folders/${"Doc Name 5"}`,
    },
    {
      id: 6,
      name: "Doc Name 6",
      type: "folder",
      size: "50MB",
      tag: "normal",
      path: `../../mainlayout/folders/${"Doc Name 6"}`,
    },
  ]);

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
  const [checked, setChecked] = React.useState(false);
  useEffect(() => {
    const animation = setTimeout(() => {
      setChecked(true);
    }, 0);
    return () => clearTimeout(animation);
  }, []);
  useEffect(() => {
    setTableDataArray(fomatData(storededData));
  }, [storededData]);

  const fileTypeDropDown = [
    { label: "Folder", value: "folder" },
    { label: "File", value: "file" },
  ];
  const fileTagDropDown = [
    { label: "Minor", value: "minor" },
    { label: "Normal", value: "normal" },
    { label: "Major", value: "major" },
  ];

  const tableHeaders = [
    "#Id",
    "Document Name",
    "Document Size",
    "Document Tag",
  ];
  const actionButtonArray = [
    {
      icon: <RemoveRedEyeIcon sx={{ color: "#000", fontSize: "exlarge" }} />,
      action: () => {},
      tooltip: "View",
    },

    {
      icon: <EditIcon sx={{ color: "#000", fontSize: "exlarge" }} />,
      action: handleEditOpenModal,

      tooltip: "Edit",
    },
    {
      icon: (
        <GetAppIcon
          sx={{
            color: "#000",
            fontSize: "exlarge",
          }}
        />
      ),
      action: () => {
        notifySuccessful();
      },
      tooltip: "Download",
    },
    {
      icon: <ShareIcon sx={{ color: "#000", fontSize: "exlarge" }} />,
      action: () => {
        handleShareButtonClick();
      },
      tooltip: "Share",
    },
    {
      icon: <DeleteIcon sx={{ color: "#000", fontSize: "exlarge" }} />,
      action: () => {
        handleDeleteButtonClick();
      },
      tooltip: "Delete",
    },
    {
      icon: <NavigateNextIcon sx={{ color: "#000", fontSize: "exlarge" }} />,
      action: testNav,
      tooltip: "Go to Document",
    },
  ];

  useEffect(() => {
    // setStorededData([]);
    // setTableDataArray([]);
    if (fld?.length == 0) {
      setStorededData([]);
    }
    // setFolders([]);
    console.log(folders);
  }, [fld]);

  return (
    <>
      <Container>
        {/* <h1 style={{ color: "gray" }}>Document Page2</h1> */}

        <Box
          sx={{
            position: "fixed",
            bottom: "400px",
            right: "20px",
            zIndex: 1000,
          }}
        >
          <IconButton onClick={handleOpenModal}>
            <AddCircleIcon
              sx={{ fontSize: "3rem", cursor: "pointer", color: "#026C45" }}
            />
          </IconButton>
        </Box>

        <Dialog open={openModal} onClose={handleClose}>
          <DialogTitle>Document Settings</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ marginTop: "5px" }}>
                <FormTextField
                  id="documentname"
                  type={"text"}
                  label={"Document Name"}
                  variant="outlined"
                  fullWidth
                  register={register("documentname")}
                  error={!!errors.documentname?.message}
                  helperText={
                    errors.documentname?.message
                      ? errors.documentname?.message?.toString()
                      : ""
                  }
                  required={true}
                  disabled={false}
                />
                {/* <TextField
                  label="Folder Name"
                  variant="outlined"
                  value={folderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                  fullWidth
                  size="small"
                  helperText={
                    errors?.folderName?.message
                      ? errors?.folderName?.message?.toString
                      : ""
                  }
                  error={!!errors.folderName?.message}
                  {...register("folderName")}
                /> */}
              </Grid>

              <Grid item xs={12}>
                <FormDropdown
                  name={"folderType"}
                  label={"Folder Type"}
                  options={fileTypeDropDown}
                  helperText={errors.folderType?.message}
                  control={control}
                  fullWidth
                  error={!!errors.folderType}
                  disabled={!isCreate ? true : false}
                />
                {/* <Select
                  label="Folder Type"
                  value={folderType}
                  onChange={(e) =>
                    handleFolderTypeChange(e.target.value as string)
                  }
                  variant="outlined"
                  fullWidth
                  error={Boolean()}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Folder Type
                  </MenuItem>
                  <MenuItem value="File">File</MenuItem>
                  <MenuItem value="Folder">Folder</MenuItem>
                </Select> */}
              </Grid>
              <Grid item xs={12}>
                <FormDropdown
                  name={"foldertag"}
                  label={"Folder Tag"}
                  options={fileTagDropDown}
                  error={!!errors.foldertag}
                  helperText={errors.foldertag?.message}
                  control={control}
                  fullWidth
                />
                {/* <Select
                  label="Folder Type"
                  value={folderType}
                  onChange={(e) =>
                    handleFolderTypeChange(e.target.value as string)
                  }
                  variant="outlined"
                  fullWidth
                  error={Boolean()}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Select Tag
                  </MenuItem>
                  <MenuItem value="Major">Major</MenuItem>
                  <MenuItem value="Normal">Normal</MenuItem>
                  <MenuItem value="Minor">Minor</MenuItem>
                </Select> */}
              </Grid>
            </Grid>

            {/* Conditionally render text based on selected folder type */}
            {folderType === "File" && (
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ marginTop: "8px" }}
              >
                {fileText}
              </Typography>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            {/* create a new folder */}
            <Button onClick={handleSubmit(handleCreateFolder)} color="primary">
              Create Document
            </Button>
          </DialogActions>
        </Dialog>

        <div style={{ marginTop: "16px" }}>
          {folders.map((folder, index) => (
            <Link key={index} to={`../../mainlayout/folders/${folder}`}>
              <Folder name={folder} />
            </Link>
          ))}
        </div>
        <Grow
          in={checked}
          style={{ transformOrigin: "0 0 0" }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          <Grid container sx={{}}>
            <Grid
              item
              md={12}
              sm={12}
              sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
            >
              <DataTable
                rows={tableDataArray}
                headers={tableHeaders}
                actionButton={actionButtonArray}
                id={"id"}
              />
            </Grid>
          </Grid>
        </Grow>
      </Container>
      <FileModal open={openModald} setOpen={setOpenModald} />
      <ShareModal open={openModals} setOpen={setOpenModals} />
    </>
  );
};

export default CreateFolderPage;
