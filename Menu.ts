import readlinesync = require("readline-sync");
import {colors} from "./src/util/Cores"; 
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {
    let opcao: number;

    //Contas correntes
    const cc1 = new ContaCorrente(3, 789, 1,"Andressa", 100000, 1000);
    cc1.visualizar();
    
    // Saque na Conta Corrente
    cc1.sacar(100500);
    cc1.visualizar();

    // Depósito na Conta Corrente
    cc1.depositar(2000);
    cc1.visualizar();

    const cp1 = new ContaPoupanca(4, 789, 2, "Andrew", 10500, 29);
    cp1.visualizar();

    console.log('');

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