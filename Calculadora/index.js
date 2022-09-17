/* Escuchamos cuando carga el html */
window.addEventListener('load', ()=>{
    /* Creacion de constantes para poder realizar todas las funcionalidades */
    // const displayValorAnterior = document.getElementById('valorAnterior');
    const display = document.getElementById('valorActual');
    const botonesNumeros = document.getElementsByClassName('.numero', );
    const botonesOperadores = document.getElementsByClassName('.operador');

    /* Creamos constantes para convertir el HTMLCollection a Array */
    const botonesNumerosArray = Array.from(botonesNumeros);
    const botonesOperadoresArray = Array.from(botonesOperadores);

    /* Iteramos array de botones */
    botonesNumerosArray.forEach( (button)=>{
        /* Agregamos un listener a cada boton */
        button.addEventListener('click', ()=>{
            calculadora(button, display);
        } )
    })

    botonesOperadoresArray.forEach( (button)=>{
        /* Agregamos un listener a cada boton */
        button.addEventListener('click', ()=>{
            calculadora(button, display);
        } )
    })
});

function calculadora(button, display){
    switch (button.innerHTML) {
        case 'AC':
            borrar(display);
            break;
        case '=':
            calcular(display);
            break;
        case '⇦':
            borrarUno(display);
            break;
            
        default:
            actualizar(display, button)
            break;
    }
};

function calcular(display){
    display.innerHTML = eval(display.innerHTML)/* Tomar el string, resolverlo y guardarlo en el innerHTML */
};

function actualizar(display, button){
    if(display.innerHTML == 0){
        display.innerHTML='';
    };
    display.innerHTML += button.innerHTML;
}


