import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';

import { makeStyles, withTheme } from '@material-ui/core/styles';

import Registro from '../Registro';

const useStyles = makeStyles( theme => ({
    root: {
      //maxWidth: 800,
      width: "40%",      
      height:"60%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      
      /* glass*/
      color: '#ecf0f1',
      borderRadius: '8px',
      padding: '20px',
      background: 'rgba( 255, 255, 255, 0.2 )',
      border: 'solid 1px rgba(255,255,255,0.3)',
      backgroudClip: 'padding-box',
      backdropFilter: 'blur(10px )'

    },
    media: {
        height: 310,
        paddingTop: '56.25%', // 16:9
        marginTop:'50'
    },
    fondo: {      
      //background: '#00124d',
      height: '100vh',display: "flex",
      alignItems: "center",
        justifyContent: "center",
        

      
    }
    
}));



const Login = (props)=>{
    const classes = useStyles();

    function loguear(){
        //window.location.href = "/limites";
        props.validarLogIn(true);
    }
    


    return (
        <div align="center" className={classes.fondo} >
            <Card className={classes.root} raised={true}>
               
                <CardContent>
                    <br/>
                <Grid container spacing={1}>
                <Grid item xs={12}>    
                    <br/><br/><br/>
                </Grid>
                <Grid item xs={2}/>                 
                <Grid item xs={8}>                
                    <TextField                         
                        color="primary"                    
                        id="usuario"
                        label="Usuario"
                        type="text"
                        fullWidth       
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircle color="secondary"/>
                              </InputAdornment>
                            ),
                            color: "secondary"
                          }}             
                        />
                </Grid>
                <Grid item xs={2}/>
                <Grid item xs={2}/>                 
                <Grid item xs={8}>        
                    <TextField
                        color="primary"                    
                        id="clave"
                        label="Clave" 
                        type="password"
                        fullWidth        
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <VpnKeyRoundedIcon color="secondary"/>
                              </InputAdornment>
                            ),
                          }}                     
                    />
                </Grid>
                <Grid item xs={12}>    
                    <br/><br/>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"     
                        onClick={loguear}                 
                    >
                    Entrar
                </Button>
                </Grid>
                <Grid item xs={12}> 
                   <Registro />
                </Grid>
                <Grid item xs={12}>    
                    <br/><br/><br/>
                </Grid>
                </Grid>
                </CardContent>
                        </Card>
        </div>
    );
}

export default Login;