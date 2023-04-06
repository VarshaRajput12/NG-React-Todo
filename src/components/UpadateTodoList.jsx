import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";

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

export default function BasicModal({
  editBtn,
  updateListById,
  currCheckedList,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{editBtn}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="newTodoListBox">
          <div className="h2-cross">
            <h2>Update todo list</h2>
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
              //   value={item.title}
              //   onChange={handleItem}
            />
            <br />
            <br />
            <label htmlFor="date">Due Date</label>
            <br />
            <input type="text" name="date" placeholder="Select Due date" />
            <button
              className="createBtn btn"
              onClick={() => {
                // handleAddList();
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
}
