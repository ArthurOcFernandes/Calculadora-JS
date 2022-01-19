(() => {
    const listaBotoes = document.querySelectorAll('.botao');
    const expressao = document.getElementById('expressao');

    const add = (number1, number2) => {
        return parseFloat(number1) + parseFloat(number2);
    }

    const subtract = (number1, number2) => {
        return parseFloat(number1) - parseFloat(number2);
    }

    const module = (number1, number2) => {
        return parseFloat(number1) % parseFloat(number2);
    }

    const sqrt = () => {
        expressao.innerText = Math.sqrt(parseFloat(expressao.innerText));
    }

    const mult = (number1, number2) => {
        return parseFloat(number1) * parseFloat(number2);
    }

    const div = (number1, number2) => {
        return parseFloat(number1) / parseFloat(number2)
    }

    const morl = () => {
        expressao.innerText = parseFloat(expressao.innerText) * -1;
    }

    const getRightFunc = (op) =>{
        return expressao.innerText.split(op, 2);
    }

    const do_op = (evento) => {
        const botao = evento.target;

        let numeros;
        let op;

        console.log(botao.innerText);

        if (expressao.innerText.includes("%")) {
            op = "%";
            numeros = getRightFunc(op);
            expressao.innerText = module(numeros[0], numeros[1]);
        }
        else if (expressao.innerText.includes("+")) {
            op = "+";
            numeros = getRightFunc(op);
            expressao.innerText = add(numeros[0], numeros[1]);
        }
        else if (expressao.innerText.includes('−')) {
            op = "−";
            numeros = getRightFunc(op);
            expressao.innerText = subtract(numeros[0], numeros[1]);
        }
        else if (expressao.innerText.includes("×")) {
            op = "×";
            numeros = getRightFunc(op);
            expressao.innerText = mult(numeros[0], numeros[1]);
        }
        else if (expressao.innerText.includes("÷")) {
            op = "÷";
            numeros = getRightFunc(op);
            expressao.innerText = div(numeros[0], numeros[1]);
        }
    }


    listaBotoes.forEach(botao => {
    let funct;
    if (botao.innerText === "CE") {
        botao.addEventListener('click', () => {
            expressao.innerText = "";
        })
    } else if (botao.innerText === "=") {
        botao.addEventListener('click', do_op);
    } else if (botao.innerText === '√') {
        botao.addEventListener('click', sqrt)
    } else if (botao.innerText === '±') {
        botao.addEventListener('click', morl);
    }
    else {
        botao.addEventListener('click', () => {
            
            expressao.innerText = expressao.innerText + botao.innerText;
            
        })
    }
    })
})()
