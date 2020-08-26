import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

import DownloadIcon from "../../../assets/download.svg";

import { PdfWrapper, PdfLink } from "./Pdf.style";
import { Download } from "../Audio/Audio.style";

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
    <PdfWrapper key={media.title}>
      <PdfLink type="button" onClick={handleOpen}>
        {media.title}
      </PdfLink>
      <Modal
        media={media}
        open={open}
        onClose={handleClose}
        aria-labelledby={`pdf: ${media.title}`}>
        <div className={classes.paper}>
          <embed src={media.url} width="100%" height="100%"></embed>
        </div>
      </Modal>
      <a download target="_blank" rel="noopener noreferrer" href={media.url}>
        <Download src={DownloadIcon} />
      </a>
    </PdfWrapper>
  );
};

export default Pdf;
