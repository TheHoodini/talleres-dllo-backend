function desglosarString(cadena, tipo) {
    const vocales = 'aeiou';
    const consonantes = 'bcdfghjklmnpqrstvwxyz';
    const caracteres = [...cadena.toLowerCase()];

    return tipo === 'vocales'
        ? caracteres.filter(char => vocales.includes(char)).length
        : tipo === 'consonantes'
        ? caracteres.filter(char => consonantes.includes(char)).length
        : 0;
}


function twoSum(nums, entero) {
    const indices = {};

    for (let i = 0; i < nums.length; i++) {
        const complemento = entero - nums[i];
        if (complemento in indices) {
            return [indices[complemento], i];
        }
        indices[nums[i]] = i;
    }

    return []; 
}

function conversionRomana(cadena) {
    const valoresRomanos = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

    return [...cadena].map((char, index) => {

        const valorActual = valoresRomanos[char];
        const valorSiguiente = valoresRomanos[cadena[index + 1]] || 0;
        return valorActual < valorSiguiente ? -valorActual : valorActual;

    }).reduce((total, valor) => total + valor, 0);
}
