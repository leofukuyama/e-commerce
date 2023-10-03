class Produto {
    constructor() {
        this.id = 1;
        this.ObjArray = [];
    };

    lerDados() {
        let prod = {};
        prod.id = this.id;
        prod.nome = document.getElementById("nameProd").value;
        prod.valor = document.getElementById("valueProd").value;
        return prod;   
    };

    adicionar(produto) {
        this.ObjArray.push(produto);
        this.cancelar();
    };

    validarCampos(produto) {
        let alerta = "";
        if (produto.nome == "") {
            alerta += "-Digite o nome do produto\n";
        };
        if (produto.valor == "") {
            alerta += "-Digite o valor do produto\n";
        };
        if (alerta != "") {
            alert(alerta);
            return false;
        };
        return true;
    };

    salvar() {
        let prodSalvo = this.lerDados();
        if (this.validarCampos(prodSalvo)) {
            this.adicionar(prodSalvo);
            this.inserirCampos();
            this.id++;
            console.log(this.ObjArray);
        };
        
    };

    cancelar() {
        document.getElementById("nameProd").value = "";
        document.getElementById("valueProd").value = "";
    };

    inserirCampos() {
        let tbody = document.getElementById("tbody"); //Acessa o campo tbody
        tbody.innerText = "";

        for (let i = 0; i < this.ObjArray.length; i++) {
            let tr = tbody.insertRow(); //Cria a linha

            let td_id = tr.insertCell(); //Cria uma célula (td)
            let td_nome = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acao = tr.insertCell();

            td_id.innerText = this.ObjArray[i].id; //Adiciona o texto em ordem
            td_nome.innerText = this.ObjArray[i].nome;
            td_valor.innerText = this.ObjArray[i].valor;

            let imgEdit = document.createElement("img");
            imgEdit.src = "editar.png";
            td_acao.appendChild(imgEdit);
            let imgExc = document.createElement("img");
            imgExc.src = "excluir.png";
            td_acao.appendChild(imgExc);
        };
    };

    editar() {
    
    };

    excluir() {

    };
};

let produto = new Produto();
