var hoteles=[
    {
    nombre:"Hotel Roma",
    precio1:20,
    precio2:40,
    precio3:60,
    ciudad:"Talavera de la Reina"
    },

    {
    nombre:"Hotel Perales",
    precio1:20,
    precio2:40,
    precio3:60,
    ciudad:"Talavera de la Reina"
    },

    {
    nombre:"Hotel Be Live",
    precio1:40,
    precio2:60,
    precio3:80,
    ciudad:"Talavera de la Reina"
    },

    {
    nombre:"Hotel Ébora",
    precio1:40,
    precio2:60,
    precio3:80,
    ciudad:"Talavera de la Reina"
    },
];
    var hotelesTole=[
    {
    nombre:"Hotel Beatriz",
    precio1:40,
    precio2:60,
    precio3:80,
    ciudad:"Toledo"
    },

    {
    nombre:"Hotel Alfonso VI",
    precio1:40,
    precio2:60,
    precio3:80,
    ciudad:"Toledo"
    }
];

desplegable();
function desplegable(){
    var selector="";
    if(document.getElementById('talavera').checked){
       
        selector=`<select name"talavera" id="selectala" onchange="detectavalor()">`;

    for(let x=0; x<hoteles.length;x++){
        selector+=`<option value="${x}" >${hoteles[x].nombre}</option>`;
    }

    selector+=`</select>`;
    document.getElementById("contenido").innerHTML=selector;
    }else{
        selector=`<select name"toledo" id="selectole"  onchange="detectavalor()">`;

        for(let x=0; x<hotelesTole.length;x++){
            selector+=`<option value="${x}">${hotelesTole[x].nombre}</option>`;
        }
    
        selector+=`</select>`;
        document.getElementById("contenido").innerHTML=selector;
    }
};

function dectectavalor(){
    if(document.getElementById("selectala")){
        document.getElementById("precio").innerHTML=hoteles[document.getElementById("selectala").value].precio1;
    }else{
        document.getElementById("precio").innerHTML=hotelesTole[document.getElementById("selectole").value].precio1;
    }
}