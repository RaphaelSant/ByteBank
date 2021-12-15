import Conta from "./Conta.js";

class ContaSalario extends Conta {
    constructor(cliente) {
        super(0, cliente, 100);
    }

    // Está sobreescrevendo o comportamento de sacar (taxa da classe Conta)
    sacar(valor) {
        let taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}

export default ContaSalario;