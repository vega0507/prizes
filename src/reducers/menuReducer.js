const mostrarRegistroPuntos =  (state = { mostrar: false } , action) =>{    

    switch(action.type){
        case 'MOSTRAR_REGISTRO_PUNTOS':            
            return { mostrar: action.payload };                
        default:
            return state;
    }
}

export default mostrarRegistroPuntos;

