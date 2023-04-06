import React, { useState } from "react";
import { Card } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import RemoveIcon from "@mui/icons-material/Remove";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/style.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Cards = ({ todo, addBtn, editBtn, removeBtn, updateCurrCheckedList }) => {
  // const [shouldDelete, setShouldDelete] = useState(false);
  const [subtaskList, setSubTaskList] = useState(todo.subTask ?? []);
  const [subTaskItem, setSubTaskItem] = useState({
    title: "",
    id: Math.floor(Math.random() * 1000),
    delete: false,
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const hadlesubTaskItem = (e) =>
    setSubTaskItem({ ...hadlesubTaskItem, title: e.target.value });

  const handlesetSubTaskList = () => {
    setSubTaskList([...subtaskList, subTaskItem]);
    setSubTaskItem("");
  };

  const handleCheckboxChange = () =>{
    updateCurrCheckedList(todo.id, !todo.checked);
  }

  console.log(subtaskList);
  return (
    <div>
      <div>
        <div className="btns">
          <Button onClick={handleOpen}> {addBtn}</Button>
          <Button> {editBtn}</Button>
          <Button> {removeBtn}</Button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} key={subTaskItem.id}>
            <div className="h2-cross">
              <h2>Add todo item</h2>
              <CloseIcon
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleClose();
                }}
              />
            </div>
            <div className="innerBox">
              <label htmlFor="title">Todo Id</label>
              <br />
              <input type="text" name="title" value={subTaskItem.id} />
              <label htmlFor="title">Title</label>
              <br />
              <input
                type="text"
                name="title"
                value={subTaskItem.title}
                onChange={hadlesubTaskItem}
              />
              <br />
              <br />
              <label htmlFor="date">Due Date</label>
              <br />
              <input type="text" name="date" placeholder="Select Due date" />
              <button
                className="createBtn btn"
                onClick={() => {
                  handlesetSubTaskList();
                  handleClose();
                }}
              >
                Create
              </button>
              <button
                className="closeBtn btn"
                onClick={() => {
                  handleClose();
                }}
              >
                Close
              </button>
            </div>
          </Box>
        </Modal>
      </div>
      <div
        className="single-card"
        style={{ display: "flex", gap: "2rem", alignItems: "center" }}
      >
        <Card sx={{ display: "flex", flexDirection: "column" }}>
          <div className="title">
            <Checkbox
              checked={todo.checked}
              onChange={handleCheckboxChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <h4>{todo.title}</h4>
            <FormControlLabel
              className="slider"
              control={
                <Switch checked={false} name="loading" color="primary" />
              }
            />
          </div>
          <br />
          <br />

          {subtaskList &&
            subtaskList.map((task) => (
              <div className="subtask">
                <FormControlLabel
                  control={<Checkbox defaultUnChecked />}
                  className="checkbox"
                />
                <p className="">{task.title}</p>
                <FormControlLabel
                  className="slider"
                  control={
                    <Switch checked={false} name="loading" color="primary" />
                  }
                />
              </div>
            ))}

          {/* <SubTaskModal
            addBtn={<AddBoxIcon className="add icon" />}
            editBtn={<BorderColorIcon className="edit icon" />}
            removeBtn={<RemoveIcon className="remove icon" />}
          /> */}
          <div className="btns">
            <AddBoxIcon className="add icon" onClick={handleOpen} />
            <BorderColorIcon className="edit icon" />
            <RemoveIcon className="remove icon" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
