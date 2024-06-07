const getUsuarioID = (id, callback) => {

    const user = {
        id,
        nombre: 'MI Nombre'
    }

    setTimeout(()=> {
        callback(user)
    }, 3000)
}

getUsuarioID(10, (usuario) => {
    console.log( usuario.id);
    console.log( usuario.nombre.toUpperCase() );
});