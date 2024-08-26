let datosCSV=[]
let posX=0
let posY=0
let cantCartas=0




const divResultado=document.getElementById('resultado')
const selectorArchivos = document.getElementById('inptArchivo');
  
function limpiarPantalla() {
    divResultado.innerHTML = ""
}

function procesarArchivo() {
    const archivo = selectorArchivos.files[0]
    leerArchivo(archivo)
}

function leerArchivo(archivo) {
    if (archivo.type && !archivo.type.startsWith("text/csv")) {
        alert("Archivo no válido")
        return
    }
    else{
        console.log("Archivo correcto")
    }
    
    const lector = new FileReader()
   
    lector.onload = function (evento) {
        const contenido = evento.target.result
        datosCSV = procesarCSV(contenido)
        datosCSV = datosCSV.slice(0,datosCSV.length-1)
        console.log(datosCSV)

        datosCSV.forEach(element => {
            console.log("Nombre: " +element.carta_nombre)
            crearCarta(element)
        });


    }
    lector.readAsText(archivo)
    
  }

  function procesarCSV(contenido) {
    const lineas = contenido.split('\n');
    const headers = lineas[0].split(';');
    const filas = lineas.slice(1);
    
    return filas.map(fila => {
        const valores = fila.split(';');
        let objeto = {};
        headers.forEach((header, index) => {
            objeto[header] = valores[index];
        });
        return objeto;
    });
}

function crearCarta(datos) {
    // Obtener el SVG original
    const svgOriginal = document.getElementById('carta_body');
    
    // Clonar el SVG
    const svgClonado = svgOriginal.cloneNode(true);
    
    // Cambiar la posición del clon si es necesario
    svgClonado.id = "carta"+cantCartas
    svgClonado.style.position = "relative";
    svgClonado.style.top = posY+"px";  // Ejemplo de desplazamiento horizontal
    svgClonado.style.left = posX+"px"
    //posX+=parseInt(svgClonado.style.left)+20
    svgClonado.querySelector('.carta_nombre').innerHTML=datos.carta_nombre
    //svgClonado.querySelector('.carta_componentes').innerHTML=datos.carta_nombre
    svgClonado.querySelector('.carta_duracion').innerHTML=datos.carta_duracion
    svgClonado.querySelector('.carta_escuela').innerHTML=datos.carta_escuela
    svgClonado.querySelector('.carta_nivel').innerHTML=datos.carta_nivel
    svgClonado.querySelector('.carta_alcance').innerHTML=datos.carta_alcance
    svgClonado.querySelector('.carta_tiempo').innerHTML=datos.carta_tiempo
    
    svgClonado.querySelector('.carta_comp_r').style.fill = "none"
    svgClonado.querySelector('.carta_comp_c').style.fill = "none"
    svgClonado.querySelector('.carta_comp_s').style.fill = "none"
    svgClonado.querySelector('.carta_comp_v').style.fill = "none"
    svgClonado.querySelector('.carta_comp_m').style.fill = "none"



    componentes = datos.carta_componentes
    if (componentes.includes('R')) {
        svgClonado.querySelector('.carta_comp_r').style.fill = "rgb(0,0,0)"
    }
    if (componentes.includes('C')) {
        svgClonado.querySelector('.carta_comp_c').style.fill = "rgb(0,0,0)"
    }
    if (componentes.includes('S')) {
        svgClonado.querySelector('.carta_comp_s').style.fill = "rgb(0,0,0)"
    }
    if (componentes.includes('V')) {
        svgClonado.querySelector('.carta_comp_v').style.fill = "rgb(0,0,0)"
    }
    if (componentes.includes('M')) {
        svgClonado.querySelector('.carta_comp_m').style.fill = "rgb(0,0,0)"
    }

    const carta_descripcion = svgClonado.querySelector('.carta_descripcion')
    
    //console.log(procesarDescripcion(datos.carta_descripcion))
    carta_descripcion.innerHTML = procesarDescripcion(datos.carta_descripcion)

    // Insertar el SVG clonado en el DOM
    divResultado.appendChild(svgClonado);
    cantCartas++
    ajustarPosiciones(svgClonado)
}

function ajustarPosiciones(clon){
    posX=parseInt(clon.style.left)+20
    if (cantCartas%2==0) {
        console.log("es par")
        posX=0
        posY=parseInt(clon.style.top)+20
    }
}

const wrap = (s, w) => s.replace(
    new RegExp(`(?![^\\n]{1,${w}}$)([^\\n]{1,${w}})\\s`, 'g'), '$1\n'
);

function procesarDescripcion(texto) {
    let palabras = wrap(texto,51)
    console.log(palabras)
    
    let x_descr=14.755859
    let y_descr=159.80535
    //let linea = "<tspan x='"+x_descr+"' y='"+y_descr+' style="text-align:justify">'+palabras+'</tspan>'
    let linea = "<tspan x=\""+x_descr+"\" y=\""+y_descr+"\" style=\"text-align:justify\" >"+palabras+'</tspan>'
    /*lineas.forEach(linea => {
        
        y_descr+=14.34
        tspans = tspans+linea
        //tspans.push(linea)
    });
    //console.log(tspans)*/
   return linea
}