function listaNumeros(){
    for(let i= 0; i < 3; i++){
        console.log(i)
    }
}

function ejecutar(numEjercico){
    if(numEjercico == 1){
        listaNumeros();
    }else if(numEjercico == 2){
        listaNumerosReversa();
    }else if(numEjercico == 3){
        listarPares();
    }

}

function listaNumerosReversa(){
    for(let i= 3; i > 0; i--){
        console.log(i)
    }
}

function listarPares(){
    for(let i=0; i<10; i+=2){
        console.log(i)
    }
}