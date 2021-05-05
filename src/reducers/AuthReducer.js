const authReducer =  (state = { usuarioLogueado: false } , action) =>{    

    switch(action.type){
        case 'VALIDAR_LOGIN':    
            return { usuarioLogueado: action.payload };    
        default:
            return state;
    }
}

export default authReducer; 