import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import Photos from './Photos';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),    
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  }  
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


//Funcion principal que contiene el dialog para editar productos 
 function DetailDialog(props) {  
  const [open, setOpen] = useState(false);  
  
  const showDetail = () => { 
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  return (    
    <div>
        <Button size="small" color="primary"
            onClick={showDetail} >
            Details
        </Button>      
        <Dialog 
            onClose={handleClose} 
            aria-labelledby="detailDialog" 
            open={open}
        >
            <DialogTitle id="detailDialog" onClose={handleClose} >   
                <Typography color="primary">{props.item.name}</Typography>        
            </DialogTitle>
            
            <DialogContent>
                <Photos photoList={props.item.photos}/>
            </DialogContent>
            
            <DialogActions >        
            <Button 
                autoFocus
                onClick={handleClose}
                color="primary"
            >
                Close
            </Button>                
            </DialogActions>
      </Dialog>   
    </div>
  );
}


export default DetailDialog;
