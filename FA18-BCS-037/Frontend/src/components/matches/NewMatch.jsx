import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import MatchService from "../../services/MatchesService";
import Auth from "../auth/Auth";
const NewMatch = (props) => {
  console.log("new products props");
  console.log(props);
  const [name, setName] = React.useState("");
  const [tagline, settagline] = React.useState("");
  const [image_url, setimage_url] = React.useState("");
  const [date, setdate] = React.useState("");
  const [team1, setteam1] = React.useState("");
  const [team2, setteam2] = React.useState("");
  const [city, setcity] = React.useState("");
  return (
    <Auth>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Add New Match</h1>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField
            label="name"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            label="tagline"
            fullWidth
            value={tagline}
            onChange={(e) => {
              settagline(e.target.value);
            }}
          />
          <TextField
            label="image"
            fullWidth
            value={image_url}
            onChange={(e) => {
              setimage_url(e.target.value);
            }}
          />
          <TextField
            label="team1"
            fullWidth
            value={team1}
            onChange={(e) => {
              setteam1(e.target.value);
            }}
          />
          <TextField
            label="team2"
            fullWidth
            value={team2}
            onChange={(e) => {
              setteam2(e.target.value);
            }}
          />
          <TextField
            label="city"
            fullWidth
            value={city}
            onChange={(e) => {
              setcity(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              MatchService.addProduct({
                name,
                tagline,
                image_url,
                city,
                team1,
                team2,
              })
                .then((data) => {
                  console.log(data);
                  props.history.push("/matches");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Add New
          </Button>
        </Grid>
      </Grid>
    </Auth>
  );
};

export default NewMatch;
