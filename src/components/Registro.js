import { useState } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Grid from '@material-ui/core/Grid';
import { fade, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import InputAdornment from '@material-ui/core/InputAdornment';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import PinDropIcon from '@material-ui/icons/PinDrop';
import TodayIcon from '@material-ui/icons/Today';



const useStyles = makeStyles(theme => ({
    dialogPaper: {
        minHeight: '70%',
        maxHeight: '70%',
        minWidth: '80%',
        maxWidth: '80%',
    },
}));


export default function Registro(){    
    const classes = useStyles();
    const [mostrarForm, setMostrarForm] = useState(false);

    function mostrarFormRegistro(event){
        event.preventDefault();
        setMostrarForm(!mostrarForm);
    }

    return(
        <div>
            <Link href="#" onClick={mostrarFormRegistro}>
                Registrarse
            </Link>
     
            <Dialog onClose={mostrarFormRegistro} 
                aria-labelledby="registro-clientes"   
                classes={{ paper: classes.dialogPaper }}   
                    
                open={mostrarForm}>
                <DialogTitle id="registro-clientes-titulo" 
                    onClose={mostrarFormRegistro} 
                    
                >
                    Registro de Cliente
                </DialogTitle>
                
                <DialogContent dividers>        
                    <Grid container spacing={1}>
                    <Grid item xs={1}/>                 
                    <Grid item xs={5}>                
                        <TextField 
                            autoFocus
                            color="primary"                    
                            id="primerNombre"
                            label="Primer Nombre"
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
                    <Grid item xs={5}>                
                        <TextField 
                            autoFocus
                            color="primary"                    
                            id="segundoNombre"
                            label="Segundo Nombre"
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
                    <Grid item xs={1}/>  
                    <Grid item xs={1}/>                 
                    <Grid item xs={5}>                
                        <TextField 
                            autoFocus
                            color="primary"                    
                            id="primerApellido"
                            label="Primer Apellido"
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
                    <Grid item xs={5}>                
                        <TextField 
                            autoFocus
                            color="primary"                    
                            id="segundoApellido"
                            label="Segundo Apellido"
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
                    <Grid item xs={1}/>  
                    <Grid item xs={1}/>                 
                    <Grid item xs={10}>                
                        <TextField 
                            autoFocus
                            color="primary"                    
                            id="correo"
                            label="Correo"
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
                    <Grid item xs={1}/> 
                    
                    <Grid item xs={1}/>                 
                    <Grid item xs={5}>                
                        <TextField 
                            autoFocus
                            color="primary"                    
                            id="departamentoResidencia"
                            label="Departamento "
                            type="text"
                            fullWidth 
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <PinDropIcon color="secondary" />
                                </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>                                   
                    <Grid item xs={5}>                
                        <TextField 
                            autoFocus
                            color="primary"                    
                            id="fechaNacimiento"
                            label="Fecha de nacimiento "
                            type="text"
                            fullWidth 
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <TodayIcon color="secondary" />
                                </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>    
                    <Grid item xs={1}/>     
                    </Grid>             
        </DialogContent>

        <DialogActions >        
          <Button 
            autoFocus
            onClick={mostrarFormRegistro}
            color="primary"
          >
            Registrar
          </Button>                
        </DialogActions>

      </Dialog>
      
    </div>
    );
}