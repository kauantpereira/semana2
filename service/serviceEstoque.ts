import readCSV from '../model/readCSV';
import writeCSV from '../model/writeCSV';
import { Data } from '../types/data.interface';
import fs from 'fs';

const filePath = './model/estoque.csv'

class estoqueService {
    async create(data: Data){
       
        const products = await readCSV(filePath);
        const verify = products.find(p => p.title == data.title);
        if (verify) {
            throw new Error("Já existe um produto com este título");
        }

        await writeCSV(filePath, [data]);
    }

    async remove(title: string) {
        const products = await readCSV(filePath);
        const productIndex = products.findIndex((produto) => produto.title === title);

        if (productIndex === -1) {
            throw new Error(`Não foi encontrado um produto com o título ${title}`);
        }

        products.splice(productIndex, 1);

        fs.writeFileSync(filePath, '');
        fs.appendFileSync(filePath, 'id,title,value\n');

        await writeCSV(filePath, products);
    }

    async list() {
        return await readCSV(filePath);
    }

    async count(){
        const products = await readCSV(filePath);
        const numberOfProducts = products.length;
        return numberOfProducts;
    }
    
    async totalValue(){
        const data = await this.list();
        let total = 0;
    
        for (const item of data) {
            if (!isNaN(item.value)) {
                total += +item.value;
            }
        }
        return total;
    }

    async totalWeigth(){
        const data = await this.list();
        let total = 0;
    
        for (const item of data) {
            if (!isNaN(item.weigth)) {
                total += +item.weigth;
            }
        }
        return total;
    }
}

export default new estoqueService();