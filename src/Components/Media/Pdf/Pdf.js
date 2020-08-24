import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

const Pdf = ({ media }) => {

  const [open, setOpen] = React.useState(false);

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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <li key={media.title}>
    <button type="button" onClick={handleOpen}>
      {media.title}
    </button>
    <Modal
      media={media}
      open={open}
      onClose={handleClose}
      aria-labelledby={`pdf: ${media.title}`}>
      <div className={classes.paper}>
      <embed src={media.url} width="100%" height="100%"></embed>
    </div>
    </Modal>
  </li>
    
    </>
  );
};

export default Pdf;
