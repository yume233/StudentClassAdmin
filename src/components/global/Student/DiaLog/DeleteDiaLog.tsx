import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { deleteStudent } from "../../../../store/network";

export default function () {
  return (
    <Dialog
      open={dialog}
      onClose={handleDialogClic}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">确定？</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          删除学员后不可恢复，是否确认删除？
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClic}>取消</Button>
        <Button
          onClick={() => {
            handleDialogClic();
            deleteStudent(item.userId);
          }}
          autoFocus
        >
          确认
        </Button>
      </DialogActions>
    </Dialog>
  );
}
