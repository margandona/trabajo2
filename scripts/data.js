// Datos de productos
const productos = [
    { id: 1, nombre: 'Producto A', precio: 100000, categoria: 'Electrónica', stock: 5 },
    { id: 2, nombre: 'Producto B', precio: 150000, categoria: 'Hogar', stock: 15 },
    { id: 3, nombre: 'Producto C', precio: 50000, categoria: 'Juguetes', stock: 25 },
    { id: 4, nombre: 'Producto D', precio: 200000, categoria: 'Electrónica', stock: 8 },
    { id: 5, nombre: 'Producto E', precio: 120000, categoria: 'Juguetes', stock: 12 },
    { id: 6, nombre: 'Producto F', precio: 90000, categoria: 'Hogar', stock: 18 },
    { id: 7, nombre: 'Producto G', precio: 70000, categoria: 'Electrónica', stock: 30 },
    { id: 8, nombre: 'Producto H', precio: 40000, categoria: 'Juguetes', stock: 3 },
    { id: 9, nombre: 'Producto I', precio: 300000, categoria: 'Hogar', stock: 6 },
    { id: 10, nombre: 'Producto J', precio: 80000, categoria: 'Electrónica', stock: 22 },
    { id: 11, nombre: 'Producto K', precio: 110000, categoria: 'Electrónica', stock: 10 },
    { id: 12, nombre: 'Producto L', precio: 130000, categoria: 'Hogar', stock: 14 },
    { id: 13, nombre: 'Producto M', precio: 75000, categoria: 'Juguetes', stock: 7 },
    { id: 14, nombre: 'Producto N', precio: 95000, categoria: 'Electrónica', stock: 5 },
    { id: 15, nombre: 'Producto O', precio: 145000, categoria: 'Hogar', stock: 9 },
    { id: 16, nombre: 'Producto P', precio: 120000, categoria: 'Juguetes', stock: 16 },
    { id: 17, nombre: 'Producto Q', precio: 85000, categoria: 'Electrónica', stock: 11 },
    { id: 18, nombre: 'Producto R', precio: 95000, categoria: 'Hogar', stock: 13 },
    { id: 19, nombre: 'Producto S', precio: 65000, categoria: 'Juguetes', stock: 18 },
    { id: 20, nombre: 'Producto T', precio: 160000, categoria: 'Electrónica', stock: 8 }
];

// Datos de ventas
const ventas = [
    { idVenta: 1, idProducto: 1, cantidadVendida: 3, fechaVenta: '2024-01-10', idCliente: 1 },
    { idVenta: 2, idProducto: 2, cantidadVendida: 5, fechaVenta: '2024-01-12', idCliente: 2 },
    { idVenta: 3, idProducto: 3, cantidadVendida: 10, fechaVenta: '2024-01-15', idCliente: 3 },
    { idVenta: 4, idProducto: 4, cantidadVendida: 7, fechaVenta: '2024-01-18', idCliente: 4 },
    { idVenta: 5, idProducto: 5, cantidadVendida: 8, fechaVenta: '2024-01-20', idCliente: 5 },
    { idVenta: 6, idProducto: 6, cantidadVendida: 15, fechaVenta: '2024-01-25', idCliente: 6 },
    { idVenta: 7, idProducto: 7, cantidadVendida: 5, fechaVenta: '2024-01-28', idCliente: 7 },
    { idVenta: 8, idProducto: 8, cantidadVendida: 12, fechaVenta: '2024-02-01', idCliente: 1 },
    { idVenta: 9, idProducto: 9, cantidadVendida: 4, fechaVenta: '2024-02-05', idCliente: 2 },
    { idVenta: 10, idProducto: 10, cantidadVendida: 6, fechaVenta: '2024-02-10', idCliente: 3 },
    { idVenta: 11, idProducto: 11, cantidadVendida: 2, fechaVenta: '2024-02-15', idCliente: 4 },
    { idVenta: 12, idProducto: 12, cantidadVendida: 9, fechaVenta: '2024-02-20', idCliente: 5 },
    { idVenta: 13, idProducto: 13, cantidadVendida: 11, fechaVenta: '2024-02-25', idCliente: 6 },
    { idVenta: 14, idProducto: 14, cantidadVendida: 3, fechaVenta: '2024-02-28', idCliente: 7 },
    { idVenta: 15, idProducto: 15, cantidadVendida: 7, fechaVenta: '2024-03-01', idCliente: 8 }
];

// Datos de clientes
const clientes = [
    { idCliente: 1, nombre: 'Juan Pérez', email: 'juan@example.com' },
    { idCliente: 2, nombre: 'Ana Gómez', email: 'ana@example.com' },
    { idCliente: 3, nombre: 'Carlos Sánchez', email: 'carlos@example.com' },
    { idCliente: 4, nombre: 'María López', email: 'maria@example.com' },
    { idCliente: 5, nombre: 'Luis Fernández', email: 'luis@example.com' },
    { idCliente: 6, nombre: 'Pedro Ruiz', email: 'pedro@example.com' },
    { idCliente: 7, nombre: 'Laura Ortiz', email: 'laura@example.com' },
    { idCliente: 8, nombre: 'Andrea Silva', email: 'andrea@example.com' },
    { idCliente: 9, nombre: 'Diego Núñez', email: 'diego@example.com' },
    { idCliente: 10, nombre: 'Sofía Ramírez', email: 'sofia@example.com' },
    { idCliente: 11, nombre: 'Martín Castro', email: 'martin@example.com' },
    { idCliente: 12, nombre: 'Valeria Martínez', email: 'valeria@example.com' },
    { idCliente: 13, nombre: 'Roberto Díaz', email: 'roberto@example.com' },
    { idCliente: 14, nombre: 'Camila Paredes', email: 'camila@example.com' },
    { idCliente: 15, nombre: 'Fernando López', email: 'fernando@example.com' }
];