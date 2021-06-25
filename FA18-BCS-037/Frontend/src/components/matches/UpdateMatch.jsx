import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import MatchService from "../../services/ProductsService";
import Admin from "../auth/Admin";

const UpdateMatch = (props) => {
  const [name, setName] = React.useState("");
  const [tagline, settagline] = React.useState("");
  const [image_url, setimage_url] = React.useState("");
  const [date, setdate] = React.useState("");
  const [team1, setteam1] = React.useState("");
  const [team2, setteam2] = React.useState("");
  const [city, setcity] = React.useState("");
  const id = props.match.params.id;
  React.useEffect(() => {
    MatchService.getSingleProduct(id).then((data) => {
      setName(data.name);
      settagline(data.tagline);
      setimage_url(data.image_url);
      setdate(data.date);
      setteam1(data.team1);
      setteam2(data.team2);
      setcity(data.city);
    });
  }, []);
  return (
    <Admin>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Update Match</h1>
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
              productService
                .updateMatch(id, {
                  name,
                  tagline,
                  image_url,
                  date,
                  team1,
                  team2,
                  city,
                })
                .then((data) => {
                  console.log(data);
                  props.history.push("/matchess");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </Admin>
  );
};

export default UpdateMatch;
