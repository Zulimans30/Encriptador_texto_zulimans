const input = document.getElementById('input')
const output = document.getElementById('output')

const btnEncriptar = document.getElementById('encriptar')
const btnDesencriptar = document.getElementById('desencriptar')
const btnTextCopy = document.getElementById('textCopy')

const letras = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};


/**@param {string} entrada  */
function encriptar(entrada) {
    const arrayEntrada = entrada.split('')
    const salida = [];

    for(let i = 0; i < arrayEntrada.length; i++) {
        switch(arrayEntrada[i]) {
            case 'a':
                salida.push(letras['a'])
                break;
            case 'e':
                salida.push(letras['e'])

                break;
            case 'i':
                salida.push(letras['i'])
                break;
            case 'o':
                salida.push(letras['o'])
                break;
            case 'u':
                salida.push(letras['u'])
                break;
            default:
                salida.push(arrayEntrada[i])
                break;
        }
    }

    return salida.join('')
}

/**@param {string} entrada  */
function desencriptar(entrada) {

    let salida = entrada;

    for (let i = 0; i < entrada.length; i++) {
        if (salida.includes(letras.a)) {
            salida = salida.replace(letras.a, "a")
        } else if (salida.includes(letras.e)) {
            salida = salida.replace(letras.e, "e")
        } else if (salida.includes(letras.i)) {
            salida = salida.replace(letras.i, "i")

        } else if (salida.includes(letras.o)) {
            salida = salida.replace(letras.o, "o")

        } else if (salida.includes(letras.u)) {
            salida = salida.replace(letras.u, "u")
        }
    }

    return salida
}

function btnEncriptarClick(event) {
    const value = input.value

    const resultado = encriptar(value);

    output.innerText = resultado
}
function btnDesencriptarClick(event) {
    const value = input.value
    const resultado = desencriptar(value)

    output.innerText = resultado
}

function btnTextCopyClick(event) {
    navigator.clipboard.writeText(output.textContent)
        .then(() => {
            alert('texto copiado')
        })
}


btnEncriptar.addEventListener('click', btnEncriptarClick )
btnDesencriptar.addEventListener('click', btnDesencriptarClick )
btnTextCopy.addEventListener('click',btnTextCopyClick)