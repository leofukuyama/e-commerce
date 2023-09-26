class Produto {
    constructor(){
        this.id = 1;
        this.ObjArray = [];
    }

    lerDados(){
        let prod = {};
        prod.id = this.id;
        prod.nome = document.getElementById("nameProd").value;
        prod.valor = document.getElementById("valueProd").value;
        return prod;
    }

    validarDados(){
        if (this.prod.nome == "" || this.prod.valor == ""){
            return false
        } else {
            return true
        }
    }

    adicionar(produto){
        this.ObjArray.push(produto);
    }

    salvar(){
        let prodSalvo = this.lerDados();
        this.adicionar(prodSalvo);
        this.id++
        console.log(this.ObjArray)
    }

    cancelar(){
        alert("Cancelado!")
    }
}

let produto = new Produto()
