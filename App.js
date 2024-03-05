import { duckFetch } from "./Api/duckFetch.js";
import './App/webComponents/sideBar.js'
class device {
  constructor(id, CodigoTransaccion, Formulario, PEmpresa = null, FechaCompra, Nit, Proveedor, DescripcionItem, Serial, Categoria, Cantidad, Ubicacion = null) {
    this.id = id || null;
    this.CodigoTransaccion = CodigoTransaccion || null;
    this.Formulario = Formulario || null;
    this.PEmpresa = PEmpresa || null;
    this.FechaCompra = FechaCompra ? new Date(FechaCompra) : null;
    this.Nit = Nit || null;
    this.Proveedor = Proveedor || null;
    this.DescripcionItem = DescripcionItem || null;
    this.Serial = Serial || null;
    this.Categoria = Categoria || null;
    this.Cantidad = Cantidad || null;
    this.Ubicacion = Ubicacion || null;
  }
}


let data = await duckFetch('InventarioCampuslands', 1, 'GET', null);


let arrayDevices = data.map(item => {
  return new device(item.id,
    item.CodigoTransaccion,
    item.Formulario,
    item.PEmpresa, item.FechaCompra,
    item.Nit,
    item.Proveedor,
    item.DescripcionItem,
    item.Serial,
    item.Categoria,
    item.Cantidad,
    item.Ubicacion)
});

console.log(arrayDevices);




