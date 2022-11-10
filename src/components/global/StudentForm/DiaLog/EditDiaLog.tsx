import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {useStore} from "@nanostores/react";
import {_editHide, _editValue, addPostData, setEditHide} from "store/data";
import {editStudent} from "../../../../store/network";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

export default function () {
    const editHide = useStore(_editHide);
    const editValue = useStore(_editValue);
    const handleChange = (key, e) => {
        console.log(e.target.value);
        addPostData(key, e.target.value);
    };

    function valuetext(value: number) {
        return `${value}岁`;
    }

    return (
        <Dialog open={editHide} onClose={setEditHide}>
            <DialogTitle>编辑学员</DialogTitle>
            <div>
                <DialogContent>
                    <div style={{marginBottom: "10px"}}>
                        <AvaterAndId>
                            <Avatar src={editValue.avatar} sx={{width: 56, height: 56}}/>
                            <Typography
                                style={{marginBottom: "0"}}
                                variant="h3"
                                gutterBottom
                            >
                                {editValue.userId}
                            </Typography>
                        </AvaterAndId>
                        <Info1>
                            <TextField
                                label="姓名"
                                variant="outlined"
                                defaultValue={editValue.name}
                                onChange={(e) => {
                                    handleChange("name", e);
                                }}
                            />
                            <FormControl>
                                <InputLabel>性别</InputLabel>
                                <Select
                                    sx={{minWidth: 120}}
                                    defaultValue={editValue.sex}
                                    label="SEX"
                                    onChange={(e) => {
                                        handleChange("sex", e);
                                    }}
                                >
                                    <MenuItem value={0}>男</MenuItem>
                                    <MenuItem value={1}>女</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel>出勤</InputLabel>
                                <Select
                                    sx={{minWidth: 120}}
                                    defaultValue={editValue.status}
                                    label="STATUS"
                                    onChange={(e) => {
                                        handleChange("status", e);
                                    }}
                                >
                                    <MenuItem value={0}>正常</MenuItem>
                                    <MenuItem value={1}>请假</MenuItem>
                                    <MenuItem value={2}>迟到</MenuItem>
                                    <MenuItem value={3}>早退</MenuItem>
                                </Select>
                            </FormControl>
                        </Info1>
                    </div>
                    <Info1>
                        <TextField
                            label="职务"
                            variant="outlined"
                            defaultValue={editValue.post}
                            onChange={(e) => {
                                handleChange("post", e);
                            }}
                        />
                        年龄：
                        <Slider
                            defaultValue={30}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={12}
                            max={25}
                            style={{maxWidth: "40%"}}
                        />
                    </Info1>
                </DialogContent>
                <DialogActions>
                    <Button onClick={setEditHide}>取消修改</Button>
                    <Button
                        onClick={() => {
                            addPostData("class", editValue.class);
                            addPostData("userId", editValue.userId);
                            editStudent();
                            setEditHide();
                        }}
                    >
                        确认修改
                    </Button>
                </DialogActions>
            </div>
        </Dialog>
    );
}
const Info1 = styled.div`
  display: flex;
  align-items: center;

  div {
    :not(:last-child) {
      margin-right: 5px;
    }
  }
`;
const AvaterAndId = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
