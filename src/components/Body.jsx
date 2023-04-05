import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Footer from "./Footer";
import Cards from "./Cards";

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
// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

function Body() {
  const [todoList, setTodoList] = useState([]);
  const [currCheckedList, setCurrCheckedList] = useState(null);
  const [item, setItem] = useState({
    title: "",
    id: Math.floor(Math.random() * 1000),
    subTask: [],
    delete: false,
    checked: false,
  });
  console.log(currCheckedList)
  console.log(todoList)

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleItem = (e) => setItem({ ...item, title: e.target.value });
  const handleAddList = () => {
    if (!item.title === "") {
      alert("fill the empty fields");
    }
    setTodoList([...todoList, item]);
    setItem("");
  };

  const updateCurrCheckedList = (id, boolean) => {
    const updatedList = todoList.map((list) => {
      if (list.id === id) {
        if (list.checked === false) {
          setCurrCheckedList(list);
        }else{
          setCurrCheckedList(null)
        }
        return {
          ...list,
          checked: boolean,
        };
      }
      return {
        ...list,
        checked: false,

      };
    });
    setTodoList(updatedList)
  };

  const updateListById = (id, object) => {
    const updatedList = todoList.map((list) => {
      if (list.id === id) {
        setCurrCheckedList({ ...list, ...object });
        return { ...list, ...object };
      }
      return list;
    });
    setTodoList(updatedList);
  };

  const handleDelete = (id) => {
    const newtodoList = todoList.filter((ele, index) => {
      return id !== index;
    });
    setTodoList(newtodoList);
  };

  return (
    <div className="Body">
      <div className="container">
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
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
                  handleAddList();
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

      <br />
      <br />
      <div
        // style={{ color: "black", display: "flex", gap: "2rem" }}
        className="data"
      >
        {todoList.map((todo) => {
          return (
            <>
              <Cards
                key={todo.id}
                todo={todo}
                todolist={todoList}
                setTodoList={setTodoList}
                updateCurrCheckedList={updateCurrCheckedList}
                updateListById={updateListById}
                currCheckedList={currCheckedList}
              />
            </>
          );
        })}
      </div>
      <Footer handleOpen={handleOpen} />
    </div>
  );
}

export default Body;
