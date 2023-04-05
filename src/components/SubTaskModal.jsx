import React, { useState } from "react";
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

const SubTaskModal = ({ addBtn, editBtn, removeBtn }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
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
        <Box sx={style}>
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
            <input type="text" name="title" />
            <label htmlFor="title">Title</label>
            <br />
            <input type="text" name="title" />
            <br />
            <br />
            <label htmlFor="date">Due Date</label>
            <br />
            <input type="text" name="date" placeholder="Select Due date" />
            <button
              className="createBtn btn"
              onClick={() => {
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
  );
};
export default SubTaskModal;
