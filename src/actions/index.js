export const validarLogIn = (usuarioLogueado) => {     
    return { 
        type: 'VALIDAR_LOGIN' , 
        payload: usuarioLogueado 
    };
};

export const mostrarRegistroPuntos = (mostrar) => {     
    return { 
        type: 'MOSTRAR_REGISTRO_PUNTOS' , 
        payload: mostrar 
    };
};

export const buscarProducto = (codigoProducto) => {     
    return { 
        type: 'BUSCAR_PRODUCTO' , 
        payload: codigoProducto 
    };
};