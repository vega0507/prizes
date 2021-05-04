export const validarLogIn = (usuarioLogueado) => { 
    console.log("en el action "+usuarioLogueado);
    return { 
        type: 'VALIDAR_LOGIN' , 
        payload: usuarioLogueado 
    };
};