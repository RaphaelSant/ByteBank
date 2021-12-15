import Cliente from "./Cliente.js";
import Gerente from "./Funcionario/Gerente.js";
import Diretor from "./Funcionario/Diretor.js";
import SistemaAutenticacao from "./SistemaAutenticacao.js";

const diretor = new Diretor("Raphael", 10000, 12345678901);
diretor.cadastrarSenha("123456789");

const gerente = new Gerente("Ricardo", 5000, 12345678985);
gerente.cadastrarSenha("123");

const cliente = new Cliente("João", 12345685858, "abc123");

const diretorLog = SistemaAutenticacao.login(diretor, "123456789");
const gerenteLog = SistemaAutenticacao.login(gerente, "123");
const clienteLog = SistemaAutenticacao.login(cliente, "abc123");

console.log(diretorLog);
console.log(gerenteLog);
console.log(clienteLog);