import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    height: "85vh",
  },
});

function DialogVideo({ state }) {
  const { video, title, open, handleClose } = state;
  const styles = useStyles()
  return (
    <Dialog
      classes={{ paper: styles.paper }}
      fullWidth
      maxWidth={`xl`}
      onBackdropClick={handleClose}
      open={open}
      handleClose={handleClose}
    >
      <DialogContent>
        {title && <DialogTitle>{title}</DialogTitle>}

        <iframe
          style={{ width: "100%", height: "98%" }}
          src={video}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </DialogContent>
    </Dialog>
  );
}

export default DialogVideo;
