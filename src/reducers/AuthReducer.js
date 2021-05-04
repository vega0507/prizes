export default (state = { usuarioLogueado: false } , action) =>{    

    switch(action.type){
        case 'VALIDAR_LOGIN':    
        console.log("en el reducer "+action.payload);
            return { usuarioLogueado: action.payload };    
            //return { ...state, limiteSeleccionado: action.payload }; validar dif      
        default:
            return state;
    }
}