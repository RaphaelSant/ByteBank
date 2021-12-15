import Conta from "./Conta.js";

class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
    }

    // Está sobreescrevendo o comportamento de sacar (taxa da classe Conta)    
    sacar(valor) {
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}

export default ContaPoupanca;