import React from "react";
import SingleMatch from "./SingleMatch";
import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import MatchService from "../../services/MatchesService";
import userService from "../../services/UserService";
const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Matches = (props) => {
  const [matches, setProducts] = React.useState([]);
  const classes = useStyles();
  const page = props.match.params.page ? props.match.params.page : 1;
  const [total, setTotal] = React.useState(0);
  const [perPage, setPerPage] = React.useState(10);
  const getData = () => {
    MatchService.getProducts(page, perPage)
      .then((data) => {
        setProducts(data.matches);
        setTotal(data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // getData();
  React.useEffect(getData, [page, perPage]);
  const handleNewProductClick = () => {
    console.log(props);
    props.history.push("/matches/new");
  };
  return (
    <div>
      <h1>Matches</h1>
      Records Per Page:{" "}
      <select
        value={perPage}
        onChange={(e) => setPerPage(e.target.value)}
        style={{ width: "100px", height: "30px" }}
      >
        <option value="2">Two</option>
        <option value="10">Ten</option>
      </select>
      {userService.isLoggedIn() && (
        <Fab
          color="primary"
          aria-label="add"
          className={classes.addBtn}
          onClick={handleNewProductClick}
        >
          <AddIcon />
        </Fab>
      )}
      {matchs.length == 0 ? (
        <p>There are no products</p>
      ) : (
        <Grid container spacing={3}>
          {matches.map((match, index) => (
            <SingleMatch key={index} match={match} onDelete={getData} />
          ))}
        </Grid>
      )}
      <Grid item xs={12}>
        <Pagination
          count={Math.ceil(total / perPage)}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => {
            console.log(value);
            props.history.push("/matches/" + value);
          }}
        />{" "}
        Total: {total} Showing {(page - 1) * perPage} to{" "}
        {(page - 1) * perPage + matches.length}
      </Grid>
    </div>
  );
};

export default Matches;
