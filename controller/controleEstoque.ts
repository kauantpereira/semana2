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

export async function totalValueProducts(){
    try{
        const valueProducts = await serviceEstoque.totalValue();
        console.log("Valor total dos produtos:", valueProducts);
    } catch(error){
        console.log("Erro ao listar produtos:", error);
    }
}

export async function totalWeigthProducts(){
    try{
        const weigthProducts = await serviceEstoque.totalWeigth();
        console.log("Peso total dos produtos:", weigthProducts);
    } catch(error){
        console.log("Erro ao listar produtos:", error);
    }
}

export async function totalAmountItems(){
    try{
        const amountItems = await serviceEstoque.totalAmount();
        console.log("Peso total dos produtos:", amountItems);
    } catch(error){
        console.log("Erro ao listar produtos:", error);
    }
}

export async function countProducts(){
    try{
        const numberProducts = await serviceEstoque.count();
        console.log("Quantidade de produtos no estoque:", numberProducts);
    } catch(error){
        console.log("Erro ao listar produtos:", error);
    }
}

export async function averageWeigthProducts(){
    try{
        const average = await serviceEstoque.averageWeigth();
        console.log("Peso médio dos itens:", average);
    } catch(error){
        console.log("Erro ao listar produtos:", error);
    }
}

export async function averageValueProducts(){
    try{
        const average = await serviceEstoque.averageValue();
        console.log("Valor médio dos itens:", average);
    } catch(error){
        console.log("Erro ao listar produtos:", error);
    }
}