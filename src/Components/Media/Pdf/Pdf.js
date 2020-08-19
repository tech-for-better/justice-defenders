import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const Pdf = ({ title, src }) => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: "80%",
      height: "90%",
      border: "2px solid black",
      boxShadow: theme.shadows[5],
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <embed src={src} width="100%" height="100%"></embed>
    </div>
  );
};

export default Pdf;
