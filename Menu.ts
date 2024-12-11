import readlinesync = require("readline-sync");
import {colors} from "./src/util/Cores"; 
import { Conta } from "./src/model/Conta";

export function main() {
    let opcao: number;

    // Cria novas instâncias (Objetos) da Classe Conta
    const c1 = new Conta(1, 123, 1, "Jonas", 100000);
    c1.visualizar();
    // Saque
    console.log(c1.sacar(200000.00));
    c1.visualizar();
 

    const c2 = new Conta(2, 123, 2, "Aline", 200000);
    c2.visualizar();
    // Depósito
    c2.depositar(100.00);
    c2.visualizar();


    while (true) {
        console.log(colors.bg.black, colors.fg.red, 
            "**********************************************************************");
        console.log("                                                                      ");
        console.log("                        BANCO FUTURO DO BRASIL                        ");
        console.log("                                                                      ");
        console.log("**********************************************************************");
        console.log("                                                                      ");
        console.log("               1 - Criar Conta                                        ");
        console.log("               2 - Listar todas as Contas                             ");
        console.log("               3 - Buscar Conta por Numero                            ");
        console.log("               4 - Atualizar Dados da Conta                           ");
        console.log("               5 - Apagar Conta                                       ");
        console.log("               6 - Sacar                                              ");
        console.log("               7 - Depositar                                          ");
        console.log("               8 - Transferir valores entre Contas                    ");
        console.log("               9 - Sair                                               ");
        console.log("                                                                      ");
        console.log("**********************************************************************");
        console.log("                                                                      ");


        console.log("Entre com a opção desejada: ", colors.reset);
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("\nBanco Futuro do Brasil - O seu futuro começa aqui!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");

                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");

                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                break;
            case 6:
                console.log("\n\nSaque\n\n");

                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n")

                break;
        }
    }
}

export function sobre() : void{
    console.log("\n**********************************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Adrielly do Nascimento - adriellynr@gmail.com");
    console.log("github.com/AdriellyN");
    console.log("\n**********************************************************************");
}

main();