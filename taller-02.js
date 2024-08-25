function findMax(lista){
    let max = lista[0];
    for (let i = 1; i < lista.length; i++){
        if (lista[i] > max){
            max = lista[i];
        }
    }
    return max;
}

function includes(lista, num){
    for (let i = 0; i < lista.length; i++){
        if (lista[i] === num){
            return true;
        }
    }
    return false;
}

function sum(lista){
    let suma = 0;
    for (let i = 0; i < lista.length; i++){
        suma += lista[i];
    }
    return suma;
}

function missingNumbers(lista){
    let faltantes = [];
    let menor = lista[0];
    let mayor = findMax(lista);
    for (let i = 1; i < lista.length; i++){
        if (lista[i] < menor){
            menor = lista[i];
        }
    }
    
    for (let i = menor; i < mayor; i++){
        if (!includes(lista, i)){
            faltantes.push(i);
        }
    }
    return faltantes;
}
