import serviceEstoque from "../service/serviceEstoque";
import { Data } from "../types/data.interface";

export async function addProduct(data: Data){
    try{
        await serviceEstoque.create(data); 
        console.log("Produto adicionado com sucesso!");
    } catch(error){
    console.log("Erro ao adicionar produto: ", error);
    }
}

export async function removeProduct(title: string){
    try{
        await serviceEstoque.remove(title);
        console.log("Produto removido com sucesso!");
    } catch(error){
        console.log("Erro ao remover produto:", error);
    }
}

export async function listProducts(){
    try{
        const items = await serviceEstoque.list();
        console.log("Produtos no estoque:", items);
    } catch(error){
        console.log("Erro ao listar produtos:", error);
    }
}
