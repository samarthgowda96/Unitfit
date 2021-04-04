import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { Icon } from 'semantic-ui-react';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button style={{backgroundColor:"white", float:"right", marginRight:"15px", cursor:"pointer"}} variant="contained" onClick={handleOpen}><Icon name='user outline' size='big' /></Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div style={{fontWeight:"bold"}} className={classes.paper}>
            <h2 id="transition-modal-title">My Plan </h2>
            <p id="transition-modal-description">Your are currently using Free features on our application. Free access to: </p>
            <p>- The list of videos</p>
            <p>- The level of intensity </p>
            <p>- Our recipes and recommendations for your healthy body</p>
            <p>- Track your body index</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
