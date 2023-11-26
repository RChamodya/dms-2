import React from "react";
import {
  Modal,
  Backdrop,
  Fade,
  makeStyles,
  Theme,
  createStyles,
} from "@mui/material";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

const MyModal: React.FC<ModalProps> = ({ open, handleClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div>{children}</div>
      </Fade>
    </Modal>
  );
};

export default MyModal;
