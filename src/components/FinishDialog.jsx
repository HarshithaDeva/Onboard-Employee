import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import dialogImage from "../assets/images/dialogImage.svg";

const FinishDialog = ({ dialogOpen, handleClose }) => {
  return (
    <>
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        className="finishDialogContainer"
      >
        <DialogContent>
          <Box component="img" src={dialogImage} />
          <Typography className="dialogText">Congratulations</Typography>
          <Typography className="dialogConfirmText">
            Invite Link Successfully Sent to Rahul Raj
          </Typography>
        </DialogContent>
        <DialogActions className="dialogAction">
          <Button
            className="dialogButton"
            onClick={handleClose}
            variant="contained"
          >
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FinishDialog;
