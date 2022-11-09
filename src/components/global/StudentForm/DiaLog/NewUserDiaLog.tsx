import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {useStore} from "@nanostores/react";
import {_newHide, setNewHide} from "store/data";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Avatar from "@mui/material/Avatar";
import Slider from "@mui/material/Slider";
import {addUser} from "../../../../store/network";

export default function () {
    const newHide = useStore(_newHide);
    const [user, setUser] = React.useState({sex: 0, status: 0, age: 25});
    const handleChange = (key, e) => {
        console.log(e.target.value);
        setUser({...user, [key]: e.target.value});
    };

    function valuetext(value: number) {
        return `${value}岁`;
    }

    return (
        <Dialog
            open={newHide}
            onClose={() => {
                setNewHide();
                setUser({sex: 0, status: 0, age: 25});
            }}
        >
            <DialogTitle>新增学员</DialogTitle>
            <div>
                <DialogContent>
                    <div style={{marginBottom: "10px"}}>
                        <AvaterAndId>
                            <Avatar sx={{width: 56, height: 56}}/>
                        </AvaterAndId>
                        <Info1>
                            <TextField
                                label="姓名"
                                variant="outlined"
                                onChange={(e) => {
                                    handleChange("name", e);
                                }}
                            />
                            <FormControl>
                                <InputLabel>性别</InputLabel>
                                <Select
                                    sx={{minWidth: 120}}
                                    label="SEX"
                                    defaultValue={user.sex}
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
                                    defaultValue={user.status}
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
                            onChange={(e) => {
                                handleChange("age", e);
                            }}
                            style={{maxWidth: "40%"}}
                        />
                    </Info1>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setNewHide();
                            setUser({sex: 0, status: 0, age: 25});
                        }}
                    >
                        取消
                    </Button>
                    <Button
                        onClick={() => {
                            console.log("触发了");
                            setNewHide();
                            setUser({sex: 0, status: 0, age: 25});
                            addUser(user);
                        }}
                    >
                        确认
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
