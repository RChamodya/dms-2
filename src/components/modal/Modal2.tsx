import React, { useState } from "react";
import Box from "@mui/material/Box";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const Modal2 = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
          zIndex: 1000,
          fontSize: "2rem",
          cursor: "pointer",
        }}
        onClick={handleOpen}
      >
        <AddCircleIcon />
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="div">
            Modal Title
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Modal content
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Modal2;
