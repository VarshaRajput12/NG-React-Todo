import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import RemoveIcon from "@mui/icons-material/Remove";

const Footer = ({ handleOpen }) => {
  return (
    <div className="footer">
      <AddBoxIcon className="add icon" onClick={handleOpen} />
      <BorderColorIcon className="edit icon" />
      <RemoveIcon className="remove icon" />
    </div>
  );
};

export default Footer;
