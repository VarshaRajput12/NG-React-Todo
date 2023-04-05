import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";

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

const Modal = ({ item, handleItem, handleFruit }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="newTodoListBox">
          <div className="h2-cross">
            <h2>New Todo List</h2>
            <CloseIcon
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleClose();
              }}
            />
          </div>
          <div className="innerBox">
            <label htmlFor="title">Title</label>
            <br />
            <input
              type="text"
              name="title"
              value={item.title}
              onChange={handleItem}
            />
            <br />
            <br />
            <label htmlFor="date">Due Date</label>
            <br />
            <input type="text" name="date" placeholder="Select Due date" />
            <button
              className="createBtn btn"
              onClick={() => {
                handleFruit();
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

export default Modal;
