import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import moment from "moment";
import { Link } from "react-router-dom";
import { CardActions } from "@mui/material";

function BasicChips({ tags }) {
  const tageArray = tags.split(",");
  console.log(tageArray);
  return (
    <Stack direction="row" spacing={1}>
      {tageArray.map((name) => (
        <div>
          {name && (
            <Chip
              component={Link}
              to={`/home/${name}`}
              key={name}
              label={name}
            />
          )}
        </div>
      ))}
    </Stack>
  );
}

export default function CardComponent({ blogDetail }) {
  return (
    <Card sx={{ mt: 3 }} variant="outlined">
      <React.Fragment>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {blogDetail.author_name[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <EditIcon />
            </IconButton>
          }
          title={blogDetail.author_name}
          subheader={moment(blogDetail.date).format("MM/DD/YYYY HH:MM")}
        />

        <CardContent>
          <Typography variant="h5" component="div">
            {blogDetail.title}
          </Typography>
          <Typography variant="body2">{blogDetail.body}</Typography>
        </CardContent>
        <CardActions>{<BasicChips tags={blogDetail.tags} />} </CardActions>
      </React.Fragment>
    </Card>
  );
}
