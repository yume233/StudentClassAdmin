import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { _detailsHid, setDetailsHid } from "../../../store/data";
import { deleteStudent } from "../../../store/network";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useStore } from "@nanostores/react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
// import { getStudent } from "../../../store/network";
export default (props: any) => {
  const { item, style, elId } = props;
  const [state, setState] = useState<number>(0);
  const [delDialog, setDelDialog] = useState<boolean>(false);
  const [editDialog, setEditDialog] = useState<boolean>(false);
  const editHid = useStore(_detailsHid);
  const [sex, setSex] = useState(item.sex) as any;
  const [name, setName] = useState(item.name) as any;
  const [userStatus, setStatus] = useState(item.status) as any;
  const [post, setPost] = useState(item.post) as any;
  const handleDelDialogClic = () => {
    setDelDialog(!delDialog);
  };
  const handleEditDialogClic = () => {
    setEditDialog(!editDialog);
  };
  const handleSexChange = (event: SelectChangeEvent) => {
    setSex(event.target.value);
  };
  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };
  const handlePostChange = (event: any) => {
    setPost(event.target.value);
  };
  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };
  const DelDialog = () => {
    return (
      <Dialog open={delDialog} onClose={handleDelDialogClic}>
        <DialogTitle>确定？</DialogTitle>
        <DialogContent>
          <DialogContentText>
            删除学员后不可恢复，是否确认删除？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelDialogClic}>取消</Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              handleDelDialogClic();
              deleteStudent(item.userId);
            }}
            autoFocus
          >
            确认
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  const EditDiaLog = () => {
    return (
      <Dialog open={editDialog} onClose={handleEditDialogClic}>
        <DialogTitle>编辑学员</DialogTitle>
        <div>
          <DialogContent>
            <div style={{ marginBottom: "10px" }}>
              <TextField
                label="姓名"
                variant="outlined"
                defaultValue={name}
                onChange={handleNameChange}
              />
              <FormControl>
                <InputLabel>性别</InputLabel>
                <Select
                  sx={{ minWidth: 120 }}
                  value={sex}
                  label="SEX"
                  onChange={handleSexChange}
                >
                  <MenuItem value={0}>男</MenuItem>
                  <MenuItem value={1}>女</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel>出勤</InputLabel>
                <Select
                  sx={{ minWidth: 120 }}
                  value={userStatus}
                  label="STATUS"
                  onChange={handleStatusChange}
                >
                  <MenuItem value={0}>正常</MenuItem>
                  <MenuItem value={1}>请假</MenuItem>
                  <MenuItem value={2}>迟到</MenuItem>
                  <MenuItem value={3}>早退</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <TextField
                label="职务"
                variant="outlined"
                defaultValue={item.post}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEditDialogClic}>取消修改</Button>
            <Button
              onClick={(e) => {
                handleEditDialogClic();
                console.log(name, sex, userStatus, post);
              }}
            >
              确认修改
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    );
  };
  const setDetails = () => {
    if (editHid[elId]) {
      setDetailsHid(elId, !editHid[elId]);
      setTimeout(() => {
        setState(150);
      }, 300);
    } else if (!editHid[elId]) {
      setState(0);
      setTimeout(() => {
        setDetailsHid(elId, !editHid[elId]);
      }, 400);
    }
  };

  return (
    <div>
      <Main
        style={style}
        // onClick={() => {
        //   setDetails();
        // }}
      >
        <Img>
          <Avatar
            alt={item.name}
            src={item.avatar}
            sx={{ width: 56, height: 56 }}
          />
        </Img>
        <Info>
          <div>
            <a>姓名：{item.name}</a>
          </div>
          <div>
            <a>职务：{item.post}</a>
          </div>
          <div>
            <a>学号：{item.userId}</a>
          </div>
        </Info>
        <Edit>
          <Button
            variant="contained"
            style={{ width: "100px", marginBottom: "4px" }}
            onClick={handleEditDialogClic}
          >
            编辑
          </Button>
          <Button
            variant="contained"
            color="error"
            style={{ width: "100px" }}
            onClick={handleDelDialogClic}
          >
            删除
          </Button>
          <DelDialog />
          <EditDiaLog />
        </Edit>
      </Main>
      {editHid[elId] ? null : <Menu style={{ height: state }}></Menu>}
    </div>
  );
};
const Main = styled.div`
  box-shadow: rgba(0, 0, 0, 0.45) 0 25px 20px -20px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;

  :hover {
    background-color: #ffffff;
  }

  //border-bottom: 1px solid #070707;
  p {
    text-align: center;
    line-height: 125px;
    border-radius: 5px;

    :hover {
      background-color: #468eb2;
      box-shadow: 0 0 10px #468eb2;
    }
  }
`;
const Img = styled.div`
  margin: 15px;
`;
const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  > div {
    max-width: 120px;
    height: 20px;
    margin-bottom: 3px;
  }
`;
const Edit = styled.div`
  position: relative;
  width: 80px;
  height: 100%;
  margin-right: 30px;
  > div {
    border-radius: 5px;
    background-color: #2196f3;
    color: white;
    height: 30px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const Menu = styled.div`
  background-color: rgb(255, 255, 255);
  width: 100%;
`;
