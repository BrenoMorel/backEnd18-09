const express = require('express')
const porta = 3005
const servidor = express()

 servidor.use(express.json());

let array_pesca = [
    {
        "Descrição":"Varas De Pesca",
        "preço":154.90,
        "cor":"Preta",
        "tamanho":"1.90M",
        "Marca":"Shimano"
    }
]


servidor.listen(porta,()=>{
    console.log("Servidor Rodando!!!")
})

servidor.get("/ver_Produtos",(req,res)=>{
    res.json(array_pesca)
})


servidor.post("/cadastrar_produtos",(req,res)=>{
    const {Descrição,preço,cor,tamanho,Marca} = req.body
    

    if(Descrição == ""){
        return res.send("Preencha a Descrição do Produto!")
    
    }else if(preço <= 0){
        return res.send("Preencha um preço!")
    
    }else if(cor ==""){
        return res.send("Preencha uma cor")
    }else if(tamanho <= 3){
        return res.send("Preencha um tamanho valido")
    }else if(Marca ==""){
        return res.send("Preencha uma Marca ")
    }
   
   
   
    const produtos = {Descrição,preço,cor,tamanho,Marca}
    
    
    array_pesca.push(produtos)
    
    res.send("Produto Adicionado")
})


servidor.delete("/deletar_produto",(req,res)=>{
  const deletar = req.body.apagar
  array_pesca.splice(deletar,1)
  res.send("Produto Apagado com sucesso!!!")
})