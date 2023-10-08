import readline from 'readline';
import { addProduct, removeProduct } from './controller/controleEstoque';
import { Data } from './types/data.interface';

function menu() {
    console.log("Escolha uma opção:");
    console.log("1. Adicionar Produto");
    console.log("2. Listar Itens");
    console.log("3. Calcular Valor Total");
    console.log("4. Calcular Média de Valor");
    console.log("5. Calcular Quantidade Total");
    console.log("6. Remover Produto");
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
            
            case '6':
                const title = await ask("Título do produto: ");
                await removeProduct(title);
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