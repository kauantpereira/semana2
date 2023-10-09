import readline from 'readline';
import { addProduct, removeProduct, listProducts, countProducts, totalValueProducts, totalWeigthProducts } from './controller/controleEstoque';
import { Data } from './types/data.interface';

function menu() {
    console.log("Menu");
    console.log("1. Adicionar Produto");
    console.log("2. Remover Produto");
    console.log("3. Listar Itens");
    console.log("4. Ver Valor Total do Inventário");
    console.log("5. Ver Peso Total do Inventário");

    /*
    console.log("6. Calcular Média de Valor dos Itens");
    console.log("7. Calcular Média de Peso dos Itens");
    console.log("8. Ver Quantidade Total de Itens no Inventário");
    */

    console.log("9. Ver Quantidade Total de Produtos no Inventário");
    console.log("0. Sair");
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main() {
    while (true) {
        menu();

        const option = await ask("Insira uma opção: ");

        switch (option) {
            case '1':
                const data: Data = {
                    title: "",
                    value: 0,
                    weigth: 0,
                    amount: 0,
                };

                data.title = await ask("Título do produto: ");
                data.value = parseFloat(await ask("Valor do produto: "));
                data.weigth = parseFloat(await ask("Peso do produto: "));
                data.amount = parseInt(await ask("Quantidade do produto: "));

                await addProduct(data);
                break;
            
            case '2':
                const title = await ask("Título do produto: ");
                await removeProduct(title);
                break;

            case '3':
                await listProducts();
                break;

            case '4':
                await totalValueProducts();
                break;

            case '5':
                await totalWeigthProducts();
                break;
            
            case '9':
                await countProducts();
                break;

            case '0':
                rl.close();

            default:
                console.log("Opção inválida!");
        }
    }
}

function ask(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (option) => {
            resolve(option);
        });
    });
}

main();