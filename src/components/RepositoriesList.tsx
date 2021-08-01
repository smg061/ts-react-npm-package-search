import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { Button, TextField, CircularProgress, ListItemText, makeStyles } from "@material-ui/core";
import { useTypedSelector as useSelector } from "../hooks/usedTypedSelector";

const RepositoriesList: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  const classes = useStyles("black");


  const [search, setSearch] = useState<string>("");
  const { searchRepositories } = useActions(); // this version of search repos is already bound to dispatch
  const { data, error, loading } = useSelector((state) => state.repositories);
  console.log(data);
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(search);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField label="Search for a package" onChange={(e) => setSearch(e.target.value)} value={search} />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <CircularProgress />}
      {!error && !loading && data.map((datum) => <ListItemText className={classes.root} key={datum} primary={datum}></ListItemText>)}
    </div>
  );
};

export default RepositoriesList;
