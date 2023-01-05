const formVenta = document.getElementById("form-venta");
const date=document.getElementById("date");
const selectWorker = document.getElementById("trabajadora");
const cliente = document.getElementById("cliente");
const selectorServices = document.getElementById("servicio");
const inputPago=document.getElementById("pago-recibido");
const pagoWorker=document.getElementById("pago-trabajadoras");
const pagoEmpresa=document.getElementById("pago-empresa");
const medioPago= document.getElementById("medios_pago");
const btnCalcular = document.getElementById("btn-calcular");
const btnForm = document.getElementById("btn-submit");


const tabla = document.getElementById("tabla-ventas");
let ventas=[
    {
        fecha:"01/01/2023",
        trabajadora: "Femenia Gisel",
        cliente:"Martinez Sofia",
        servicio:"Manicura",
        totalRecibido:"1200",
        pagoWorker:"480",
        pagoEmpresa:"720",
        medioPago:"Tarjeta de Debito"
    },
    {
        fecha:"02/01/2023",
        trabajadora: "Figueredo Wanda",
        cliente:"Gomez Agustina",
        servicio:"Pedicura",
        totalRecibido:"1300",
        pagoWorker:"520",
        pagoEmpresa:"780",
        medioPago:"Tarjeta de Credito"
    },
    {
        fecha:"03/01/2023",
        trabajadora: "Leguizamon Carla",
        cliente:"Esquivel Ludmila",
        servicio:"Masaje",
        totalRecibido:"2300",
        pagoWorker:"920",
        pagoEmpresa:"1380",
        medioPago: "Mercado Pago"
    },
    {
        fecha:"04/01/2023",
        trabajadora: "Gomez Estefania",
        cliente:"Lopez Maria",
        servicio:"Uñas de Acrilico",
        totalRecibido:"1100",
        pagoWorker:"440",
        pagoEmpresa:"660",
        medioPago: "Efectivo"
    }
];

addEventListener("load",()=>{
    cargarTabla();
})

let precio = 0;
let porcentajeWorker=0;
let porcentajeEmpresa=0;

selectorServices.addEventListener("change",(e)=>{
    // let servicio =  e.target.options[e.target.options.selectedIndex].text;
    let servicio = e.target.value;
    // console.log(servicio);

    if(servicio==1){
        precio=1200;

    }else if(servicio==2){
        precio=1300
    }
    else if
    (servicio==3){
        precio=2300;
    }
    else if
    (servicio==4){
        precio=1100;
    }
    else{
        precio=null;
    }
    
    inputPago.value=precio;
    porcentajeEmpresa=precio*60/100;
    porcentajeWorker=precio*40/100;
    
    pagoWorker.value=porcentajeWorker;
    pagoEmpresa.value=porcentajeEmpresa;

    // console.log(porcentajeEmpresa);
    // console.log(porcentajeWorker);
})

let venta;
btnForm.addEventListener("click",(e)=>{
    e.preventDefault();
    venta={
        fecha:date.value,
        trabajadora: selectWorker.options[selectWorker.selectedIndex].text,
        cliente:cliente.value,
        servicio: selectorServices.options[selectorServices.selectedIndex].text,
        totalRecibido:inputPago.value,
        pagoWorker:pagoWorker.value,
        pagoEmpresa:pagoEmpresa.value,
        medioPago:medioPago.options[medioPago.selectedIndex].text
    }
    ventas.unshift(venta);
    cargarTabla();
    // date.reset();
    // selectWorker.reset();
});

// btnCalcular.addEventListener("click",(e)=>{
//     console.log(selectWorker.options[selectWorker.selectedIndex].text);
//     e.preventDefault();
// })

let contenidoTabla = "";

const cargarTabla = ()=>{
    contenidoTabla = "";
    contenidoTabla = `<thead class="bg-pp text-center"><tr>
    <th>Fecha</th>
    <th>Trabajadora</th>
    <th>Cliente</th>
    <th>Servicio</th>
    <th>Total Recibido</th>
    <th>Pago Trabajadoras</th>
    <th>Pago Empresa</th>
    <th>Medio de Pago</th></tr></thead><tbody>`;
    ventas.forEach(vnt=>{

        contenidoTabla = `${contenidoTabla} <tr> 
          <td> ${vnt.fecha}</td>
          <td>${vnt.trabajadora}</td>
          <td>${vnt.cliente}</td>
          <td>${vnt.servicio}</td>
          <td class="bg-sp border border-secondary">$${vnt.totalRecibido}</td>
          <td class="bg-rp border border-secondary">$${vnt.pagoWorker}</td>
          <td class="bg-ip border border-secondary">$${vnt.pagoEmpresa}</td>
           <td>${vnt.medioPago}</td></tr>`;
    
    })
    contenidoTabla=`${contenidoTabla}</tbody>`;
    tabla.innerHTML=contenidoTabla;
}


