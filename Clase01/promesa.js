const empleados = [
    {
        id:1,
        nombre: 'Carlos'
    },
    {
        id:2,
        nombre: 'Juan'
    },
    {
        id:3,
        nombre:'Jose'
    },
]; 

const getEmpleado = (id) => {
    return new Promise (( resolve, reject) => {
        const empleado = empleados.find( e => e.id === id) ?.nombre;
        (empleado)
               ? resolve (empleado)
               : reject (`No Existe empleado con id ${ id }`)
    });
}

const id=3;
getEmpleado (id) 
    .then( empleado => console.log(empleado))
    .catch (err => console.log(err) );
