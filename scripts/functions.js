// Función para crear una tabla genérica y retornarla como HTML
function crearTabla(headers, rows) {
    let table = `
        <div class="table-container">
            <table class="table table-bordered table-hover inventory__table">
                <thead class="table-dark">
                    <tr>
                        ${headers.map(header => `<th>${header}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
                </tbody>
            </table>
        </div>
    `;
    return table;
}

// Función para mostrar todos los productos disponibles
function mostrarProductos() {
    const $inventoryList = $('.inventory__list');
    $inventoryList.empty();
    const headers = ['ID', 'Nombre', 'Categoría', 'Precio', 'Stock'];
    const rows = productos.map(producto => [
        producto.id,
        producto.nombre,
        producto.categoria,
        `$${producto.precio.toLocaleString('es-CL')}`,
        producto.stock
    ]);
    $inventoryList.append(crearTabla(headers, rows));
}

// Función para mostrar los productos más vendidos
function productosMasVendidos() {
    const $inventoryList = $('.inventory__list');
    $inventoryList.empty();
    const ventasPorProducto = ventas.reduce((acc, venta) => {
        acc[venta.idProducto] = (acc[venta.idProducto] || 0) + venta.cantidadVendida;
        return acc;
    }, {});

    const productosMasVendidos = productos
        .map(producto => ({ ...producto, cantidadVendida: ventasPorProducto[producto.id] || 0 }))
        .sort((a, b) => b.cantidadVendida - a.cantidadVendida)
        .slice(0, 3);

    const headers = ['ID', 'Nombre', 'Categoría', 'Precio', 'Cantidad Vendida'];
    const rows = productosMasVendidos.map(producto => [
        producto.id,
        producto.nombre,
        producto.categoria,
        `$${producto.precio.toLocaleString('es-CL')}`,
        producto.cantidadVendida
    ]);
    $inventoryList.append(crearTabla(headers, rows));
}

// Función para calcular e imprimir los ingresos por cada categoría
function ingresosPorCategoria() {
    const $inventoryList = $('.inventory__list');
    $inventoryList.empty();
    const ingresos = ventas.reduce((acc, venta) => {
        const producto = productos.find(prod => prod.id === venta.idProducto);
        if (producto) {
            acc[producto.categoria] = (acc[producto.categoria] || 0) + (producto.precio * venta.cantidadVendida);
        }
        return acc;
    }, {});

    const headers = ['Categoría', 'Ingresos'];
    const rows = Object.keys(ingresos).map(categoria => [
        categoria,
        `$${ingresos[categoria].toLocaleString('es-CL')}`
    ]);
    $inventoryList.append(crearTabla(headers, rows));
}

// Función para identificar a los clientes VIP (que han gastado más de $1.000.000)
function clientesVIP() {
    const $inventoryList = $('.inventory__list');
    $inventoryList.empty();
    const gastosPorCliente = ventas.reduce((acc, venta) => {
        const producto = productos.find(prod => prod.id === venta.idProducto);
        if (producto) {
            acc[venta.idCliente] = (acc[venta.idCliente] || 0) + (producto.precio * venta.cantidadVendida);
        }
        return acc;
    }, {});

    const clientesVIP = clientes
        .map(cliente => ({ ...cliente, totalGastado: gastosPorCliente[cliente.idCliente] || 0 }))
        .filter(cliente => cliente.totalGastado > 1000000);

    const headers = ['ID Cliente', 'Nombre', 'Email', 'Total Gastado'];
    const rows = clientesVIP.map(cliente => [
        cliente.idCliente,
        cliente.nombre,
        cliente.email,
        `$${cliente.totalGastado.toLocaleString('es-CL')}`
    ]);
    $inventoryList.append(crearTabla(headers, rows));
}

// Función para generar un reporte de inventario con el estado del stock
function reporteInventario() {
    const $inventoryList = $('.inventory__list');
    $inventoryList.empty();
    const headers = ['ID', 'Nombre', 'Categoría', 'Stock', 'Estado'];
    const rows = productos.map(producto => {
        const estado = producto.stock < 10 ? 'Bajo Stock' : producto.stock <= 20 ? 'En Stock' : 'Stock Suficiente';
        return [
            producto.id,
            producto.nombre,
            producto.categoria,
            producto.stock,
            estado
        ];
    });
    $inventoryList.append(crearTabla(headers, rows));
}

// Función para mostrar todas las ventas realizadas
function mostrarVentas() {
    const $inventoryList = $('.inventory__list');
    $inventoryList.empty();
    const headers = ['ID Venta', 'ID Producto', 'Cantidad Vendida', 'Fecha de Venta', 'ID Cliente'];
    const rows = ventas.map(venta => [
        venta.idVenta,
        venta.idProducto,
        venta.cantidadVendida,
        venta.fechaVenta,
        venta.idCliente
    ]);
    $inventoryList.append(crearTabla(headers, rows));
}
