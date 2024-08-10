// PUNTO 1
function convertidorTemp(celsius) {
    return (celsius * (9 / 5)) + 32;
}

// PUNTO 2
function resolvedor(a, b, c, esPositivo) {
    let x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    let x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    if (esPositivo) {
        return x1;
    } else {
        return x2;
    }
}

// PUNTO 3
function mejorParidad(num) {
    return num % 2 == 0
}

// PUNTO 4
function peorParidad(num) {
    let verdadero = true;
    let esPar = verdadero;
    if (num == 1) {
        return false;
    } if (num == 2) {
        return true;
    } if (num == 3) {
        return false;
    } if (num == 4) {
        return true;
    } if (num == 5) {
        return false;
    } if (num == 6) {
        return true;
    } if (num == 7) {
        return false;
    } if (num == 8) {
        return true;
    } if (num == 9) {
        return false;
    } if (num == 10) {
        return true;
    }
    if (num >= 0 && num != 1 && num != 2 && num != 3 && num != 4 && num != 5 && num != 6 && num != 7 && num != 8 && num != 9 && num != 10) {
        let literalmenteElNumeroDos = 2;
        while (num >= literalmenteElNumeroDos) {
            num = num - literalmenteElNumeroDos;
        }
        if (num === 1) {
            let falso = false;
            esPar = falso;
        }
    }
    // Por si num es negativo
    if (num < 0 && num != 1 && num != 2 && num != 3 && num != 4 && num != 5 && num != 6 && num != 7 && num != 8 && num != 9 && num != 10) {
        let numOriginal = num;
        let negativo = false;
        while (numOriginal < 0) {
            negativo = !negativo;
            numOriginal = numOriginal + 1;
        }
        if (negativo) {
            esPar = !esPar;
        }
    }
    return esPar;
}
