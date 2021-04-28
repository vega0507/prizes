import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import {Route, Switch, Link} from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import EcoIcon from '@material-ui/icons/Eco';

import StarIcon from '@material-ui/icons/Star';
import InputAdornment from '@material-ui/core/InputAdornment';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

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

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorAppMenu, setAnchorAppMenu] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isAppMenuOpen = Boolean(anchorAppMenu);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);



  
  const [open, setOpen] = useState(false);  
  const [desde,setDesde] = useState(0);
  const [hasta,setHasta] = useState(0);


  //funcion que valida si debe mostrar el dialog para editar o mostrar mensaje 
  const validarMostrarDialog = () => { 
    if(props.limiteSeleccionado.producto === ''){     
      props.mostrarSnackBar(true);
    }else{
      setOpen(true);
      setDesde(props.limiteSeleccionado.desde);
      setHasta(props.limiteSeleccionado.hasta);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAppMenuOpen = (event) => {
    setAnchorAppMenu(event.currentTarget);
  };


  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setAnchorAppMenu(null)
    handleMobileMenuClose();
  };

  const handleRegistrar = () =>{
    setAnchorAppMenu(null)
      setOpen(!open);
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );


  const appMenu = (
    <Menu
      anchorEl={anchorAppMenu}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id="appMenu"
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isAppMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleRegistrar}>Registrar puntos</MenuItem>
      <MenuItem onClick={handleMenuClose}>Redimir puntos</MenuItem>
      <Link to='/products' style={{ textDecoration: 'none' }}>
        <MenuItem>Notifications</MenuItem>
        </Link>
    </Menu>
  );



  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
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

  const dialog = (
    <div>
      {/*icono para edicion*/}
      <IconButton 
        aria-label="edit" onClick={validarMostrarDialog} 
        style={{ color: "white" }}>
        <EditIcon fontSize="small"/>
      </IconButton>      
     
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose} className={classes.root}>
            Registro de puntos
        </DialogTitle>
        <DialogContent dividers>        
            <Grid container spacing={1}>
            <Grid item xs={1}/>                 
            <Grid item xs={4}>                
                <TextField 
                    autoFocus
                    color="primary"                    
                    id="idLimite"
                    label="Código"
                    type="text"
                    fullWidth 
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CameraAltIcon color="secondary" />
                          </InputAdornment>
                        ),
                      }}
                    />
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" color="primary" 
                    startIcon={<ArrowUpwardIcon color="secondary" />}>
                  Cargar 
                </Button>
            </Grid>           
            </Grid>
            <br/>
            <Divider/>
            
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="h6" color="primary">Detalle de producto</Typography>
                </Grid>                 
                <Grid item xs={4}/>                 
                <Grid item xs={8}> 
                    <Grid container>
                        <Grid item xs={12}>Producto:</Grid>
                        <Grid item xs={12}>Puntos: </Grid>
                      </Grid>               
                </Grid>
            
            </Grid>         
        {/*</div>*/}
        </DialogContent>

        <DialogActions >        
          <Button 
            autoFocus
            onClick={handleClose}
            color="primary"
          >
            Cargar Puntos
          </Button>                
        </DialogActions>

      </Dialog>
      
    </div>


);



  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleAppMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <IconButton aria-label="show 4 new mails" color="secondary">
          
            <EcoIcon />
          
        </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            GreenProd
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={34} color="secondary">
                <StarIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {appMenu}
      {dialog}
    </div>
  );
}

