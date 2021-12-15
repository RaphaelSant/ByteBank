import Conta from "./Conta.js";

class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    // Está sobreescrevendo o comportamento de sacar (taxa da classe Conta)
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}

export default ContaCorrente;