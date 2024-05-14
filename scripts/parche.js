let notasParche = [
    {nombre : "hayabusa",
    estado: "ajuste", 
    descripcion :"aumento su velocidad en la junla y revirtió el ajuste del costo de energia de su habilidad 2.",
    cambios :[
        "1ra Habilidad (buff): Daño base: 190-260 >> 200-260", 
        "2da Habilidad (nerf): Costo de Energia: 0 >> 25",
    ]
    },

    {nombre : "masha",
    estado: "nerf", 
    descripcion :"Se redujo ligeramente su dao a mitad y final del juego",
    cambios :[
        "1ra habilidad (nerf): Bonificacion de dao activo: 3% de ataque fisico adicional  >> 2% de ataque fisico adicional", 
        "Ulti (nerf): Daño base: 400-600 >> 350-550", 
    ]
    },

    {nombre : "lolita" ,
    estado: "nerf", 
    descripcion :"Segun su desempeño real,hemos reducido ligeramente la fuerza de su escudo pasiva",
    cambios :[
        "Pasiva (nerf): Escudo de cada pila: 100 + 20*Nivel de heroe + 80% del poder magico total >> 80 + 16*Nivel de heroe + 60% del poder magico total ", 
    ]
    },

    {nombre : "silvanna"
    ,estado: "buff", 
    descripcion :"Se redujo el costo de maná de algunas habilidades para que coincidan con el ajuste del buff morado (blue)",
    cambios :[
        "1ra Habilidad: Costo de maná: 95-145 >> 70-110", 
        "2da Habilidad: Costo de maná: 50-70 >> 35-60", 
    ]
    },
];

let contenedor = document.getElementById("contenedor-noticias");

for (let i = 0; i < notasParche.length; i++) {
    let img = document.createElement("img");
    img.src = `imagenes/${notasParche[i].nombre}.webp`;

    let h1 = document.createElement("h1");
    h1.textContent = notasParche[i].nombre;
    h1.id = ("titulo-heroe")
    h1.style.margin = "0px"

    let stat = document.createElement("h2");
    stat.textContent = notasParche[i].estado

    if( stat.textContent == "ajuste"){
        stat.style.color = "yellow"
    }else if( stat.textContent == "buff"){
        stat.style.color = "rgb(93, 253, 0)"
    }else if( stat.textContent == "nerf"){
        stat.style.color = "red"
    }   
    
    

    let descrip = document.createElement("p");
    descrip.className = ("descripcion")
    descrip.textContent = notasParche[i].descripcion;



    let cambios = notasParche[i].cambios;
    
    let ul = document.createElement("div"); // Crear la lista de cambios

    for (let e = 0; e < cambios.length; e++) { // Corrección del bucle y la variable
        let li = document.createElement("p");
        li.className = "cara"
        li.textContent = "★" + cambios[e]; // Asignar el texto al elemento li
        ul.appendChild(li); // Agregar el elemento li a la lista ul
    }

    

    let art = document.createElement("section");
    art.className = "articulo";


    let contenedorImagen = document.createElement("div");
    contenedorImagen.className = "imagen";

    let contentHeroe = document.createElement("div");
    contentHeroe.className = "contenido";

    art.appendChild(contenedorImagen);
    contenedorImagen.appendChild(img);
    art.appendChild(contentHeroe);
    contentHeroe.appendChild(h1);
    contentHeroe.appendChild(stat)
    contentHeroe.appendChild(descrip);
    contentHeroe.appendChild(ul); // Agregar la lista de cambios
    contenedor.appendChild(art);
}



//intentar arreglar mañana




