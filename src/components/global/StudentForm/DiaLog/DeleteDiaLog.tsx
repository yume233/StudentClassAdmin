import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import {deleteStudent} from "../../../../store/network";
import {useStore} from "@nanostores/react";
import {_delHide, _editValue, setDelHide} from "../../../../store/data";

export default function () {
    const delHide = useStore(_delHide);
    const editValue = useStore(_editValue);
    return (
        <Dialog open={delHide} onClose={setDelHide}>
            <DialogTitle>确定？</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    删除学员后不可恢复，是否确认删除？
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={setDelHide}>取消</Button>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={() => {
                        setDelHide();
                        deleteStudent(editValue.userId);
                    }}
                    autoFocus
                >
                    确认
                </Button>
            </DialogActions>
        </Dialog>
    );
}
