
const juegos = [
    {id:1, nombre:"CS2", precio:10},
    {id:2, nombre:"Fifa", precio:6500},
    {id:3, nombre:"Pes", precio:3500},
    {id:4, nombre:"Age Of Empires", precio:1000},
]


class Productos {
    constructor(productos) {
        this.items = productos;
    }

    agregarProducto(nombreP, precioP) {
        const producto = {id:this.generarId(), nombre:nombreP, precio:precioP};
        this.items.push(producto);
        console.log("Producto Agregado!");
    }

    buscarProducto(id) {
        let producto = this.items.find(item => item.id == id)
    }

    obtenerProductos() {
        return this.items;
    }

    listarProductos() {
        let salida = "";
        for (const producto of this.items) {
            salida += `${producto.id} - ${producto.nombre} $${producto.precio}\n`;
        }
    
        alert(salida);
    }

    totalProductos() {
        return this.items.length;
    }

    generarId(){
        let max = 0;
        this.items.forEach(item => {
            if ( item.id > max){
                max = item.id;
            }
        });
        return max + 1;
    }
    
    eliminarProducto(id) {
        this.items = this.items.filter(item => item.id != id)
        console.log("Se elimino el Producto: #" + id);
    }
}

const catalogo = new Productos(juegos)

console.log(catalogo.obtenerProductos()); 

let nombreProducto = prompt ("Ingrese el nombre del juego: ");
let precioProducto = parseFloat(prompt ("Ingrese el Precio del juego: "));
catalogo.agregarProducto(nombreProducto, precioProducto);
console.log(catalogo.obtenerProductos()); 

catalogo.listarProductos();

console.log("Total Productos: " + catalogo.totalProductos());