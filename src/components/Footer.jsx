import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import RemoveIcon from "@mui/icons-material/Remove";
import BasicModal from "./UpadateTodoList";

const Footer = ({
  handleOpen,
  handleListDelete,
  updateListById,
  currCheckedList,
}) => {
  return (
    <div className="footer">
      <AddBoxIcon className="add icon" onClick={handleOpen} />
      <BasicModal editBtn={<BorderColorIcon className="edit icon" />} />
      <RemoveIcon className="remove icon" onClick={handleListDelete} />
    </div>
  );
};

export default Footer;
