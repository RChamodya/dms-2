import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddBoxIcon from "@mui/icons-material/AddBox";
import "react-toastify/dist/ReactToastify.css";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
// import { TextField } from "../InputFields/TextField";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
// import ViewPfdDoc from "./ViewPdfModal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface ModalProps {
  open: any;
  handleOpen?: () => void;
  setOpen: any;
}

export default function FileModal({ open, setOpen, handleOpen }: ModalProps) {
  const notifySuccessful = () => {
    toast.success("Downloaded Successfully");
  };
  const deletedSuccessful = () => {
    toast.success("Deleted Successfully");
  };

  const ClickAllButtons = () => {
    alert("under development");
  };
  // const [pdf, setPdf] = React.useState<boolean>(false);
  const [pdfOpen, setPdfOpen] = React.useState<boolean>(false);

  const openPdfModal = () => {
    setPdfOpen(true);
  };

  const RenderDoc = () => {
    setPdfOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setPdfOpen(false);
    // deletedSuccessful();
  };
  const deleteBtn = () => {
    setOpen(false);
    setPdfOpen(false);
    deletedSuccessful();
  };

  const closeIcon = () => {
    setOpen(false);
    setPdfOpen(false);
  };
  const deleted = () => {
    deletedSuccessful();
    handleClose();
  };
  return (
    <>
      <div className="">
        {/* <div className="flex justify-start">
        <Button
          onClick={handleOpen}
          variant="contained"
          style={{ background: "#36363C" }}
        >
          <AddBoxIcon style={{ marginRight: "10px" }} /> Add Event
        </Button>
      </div> */}
        {/* <ViewPfdDoc pdfOpen={pdfOpen} setpdfOpen={setPdfOpen} /> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{ borderRadius: "50px" }}
        >
          <>
            <Tooltip title="Delete">
              <IconButton onClick={handleOpen}>
                <DeleteIcon sx={{ color: "#000", fontSize: "exlarge" }} />
              </IconButton>
            </Tooltip>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Delete Confirmation</DialogTitle>
              <DialogContent>Are you sure you want to delete?</DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={deleted} color="primary">
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
          </>
        </Modal>
      </div>
    </>
  );
}
