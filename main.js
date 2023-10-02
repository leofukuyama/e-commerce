class Produto {
    constructor(){
        this.id = 1;
        this.ObjArray = [];
    };

    lerDados(){
        let prod = {};
        prod.id = this.id;
        prod.nome = document.getElementById("nameProd").value;
        prod.valor = document.getElementById("valueProd").value;
        return prod;   
    };

    adicionar(produto){
        this.ObjArray.push(produto);
        this.cancelar();
    };

    validarCampos(produto){
        let alerta = "";
        if (produto.nome == ""){
            alerta += "-Digite o nome do produto\n";
        };
        if (produto.valor == ""){
            alerta += "-Digite o valor do produto\n";
        };
        if (alerta != ""){
            alert(alerta);
            return false;
        };
        return true;
    };

    salvar(){
        let prodSalvo = this.lerDados();
        if (this.validarCampos(prodSalvo)){
            this.adicionar(prodSalvo);
            this.id++;
            console.log(this.ObjArray);
        };
    };

    cancelar(){
        document.getElementById("nameProd").value = "";
        document.getElementById("valueProd").value = "";
    };

    editar(){

    };

    excluir(){

    };
};

let produto = new Produto();
