const deadpool = {
    nombre : 'Carlos',
    paterno: 'Balcazar',
    poder: 'Regeneracion',
    estavivo:true,
    getNombre: function(){
        return `${this.nombre} ${this.paterno}`;
    } 
}

const {nombre,paterno,poder} = deadpool;
console.log('nombre:' +nombre);
console.log('paterno:' +paterno);
console.log('poder:' +poder);