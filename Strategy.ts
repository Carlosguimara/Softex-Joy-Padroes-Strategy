const leitor = require('readline-sync')
// Definir a interface Strategy com o método abstrato execute()
interface Strategy {
  execute(a: number, b: number): number;
}

// Definir as classes concretas que implementam a Strategy para realizar as operações de Soma, Subtração e Multiplicação
class EstrategiaDeSoma implements Strategy {
  execute(a: number, b: number): number {
    return a + b;
  }
}

class EstrategiaDeSubtracao implements Strategy {
  execute(a: number, b: number): number {
    return a - b;
  }
}

class EstrategiaDeMultiplicacao implements Strategy {
    execute(a: number, b: number): number {
      return a * b;
    }
  }
  

class EstrategiaDeDivisao implements Strategy {
  execute(a: number, b: number): number {
    return a / b;
  }
}
  
// Definir a classe calculadora que usa a Strategy para realizar a operação desejada
class Calculadora {
  private estrategia: Strategy;

  constructor(estrategia: Strategy) {
    this.estrategia = estrategia;
  }

  setStrategy(estrategia: Strategy) {
    this.estrategia = estrategia;
  }

  executeStrategy(a: number, b: number): number {
    return this.estrategia.execute(a, b);
  }
}

// Receber o input do usuário
// let PrimeiroOperador = parseInt(prompt("Digite o primeiro valor:"));
// let SegundoOperador = parseInt(prompt("Digite o segundo valor:"));
let PrimeiroOperador = parseInt(leitor.question("digite o primeiro valor: "));
let SegundoOperador = parseInt(leitor.question("digite o segundo valor: "));
let operacao = leitor.question("Digite a operação matemática que deseja realizar (+, -, /, *): ");
// Definir qual strategy será usada, com base na operação informada
let calculadora: Calculadora;
let oper: boolean = true
let resultado:number = 0
switch (operacao) {
  case "+":
    calculadora = new Calculadora(new EstrategiaDeSoma());
    resultado = calculadora.executeStrategy(PrimeiroOperador, SegundoOperador);
    break;
  case "-":
    calculadora = new Calculadora(new EstrategiaDeSubtracao());
    resultado = calculadora.executeStrategy(PrimeiroOperador, SegundoOperador);
    break;
  case "*":
    calculadora = new Calculadora(new EstrategiaDeMultiplicacao());
    resultado = calculadora.executeStrategy(PrimeiroOperador, SegundoOperador);
    break;
  case "/":
    calculadora = new Calculadora(new EstrategiaDeDivisao());
    resultado = calculadora.executeStrategy(PrimeiroOperador, SegundoOperador);
    break;
  default:
    console.log("Operação inválida!");
    oper = false;
    break;
}

// Imprimir o resultado da operação
if (oper) {
  console.log(`O resultado da operação ${PrimeiroOperador} ${operacao} ${SegundoOperador} é ${resultado}`);
}