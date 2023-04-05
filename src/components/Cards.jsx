import React,{useState} from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { Card } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";

const Cards = ({fruit}) => {
  const [shouldDelete, setShouldDelete] = useState(false)
  console.log(fruit)
  return (
    <div>
      <div
        // key={index}
        className="single-card"
        style={{ display: "flex", gap: "2rem", alignItems: "center" }}
      >
        <Card sx={{ display: "flex", flexDirection: "column" }}>
          <div className="title">
            <FormControlLabel control={<Checkbox defaultUnChecked />} />
            <p>{fruit.title}</p>
            <FormControlLabel
              sx={{
                display: "block",
              }}
              control={
                <Switch checked={false} name="loading" color="primary" />
              }
            />
          </div>
          <CardActions>
            {/* <Button size="small" onClick={handleDelete}>
              Learn More
            </Button> */}
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default Cards