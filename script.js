// Aqui fica a lógica dos projetos!!



var boxProjetos = document.querySelector('.projetos');
boxProjetos.innerHTML = "";

const projetos = [
    {
        nomeProjeto: 'Projeto 1',
        gitHub :'https://github.com/joaocosta956',
        site : 'Site1',
        img : 'images/background0.jpg',
    },
    {
        nomeProjeto: 'Projeto 2',
        gitHub :'Git2',
        site : 'Site2',
        img : 'images/background1.jpg',
    },
    {
        nomeProjeto: 'Projeto 3',
        gitHub :'Git3',
        site : 'Site3',
        img : 'images/background2.jpg',
    },
];

const tamanhoProjetos = Object.keys(projetos).length;


let funcionando = 1; // Liga/Desliga


    if(tamanhoProjetos == 0 || funcionando == 0){
        boxProjetos.innerHTML+=`

        <h3 class="nenhum-projeto"> Nenhum Projeto disponivel, volte mais tarde :)</h3>

    `
    }
    else{
        projetos.forEach((projetoAtual) => {
        

        boxProjetos.innerHTML+=`


        <div class="box-projetos">
                    <div class="img-projeto" style="background-image: url(`+projetoAtual.img+`);"></div>
                    <div class="text-projetos">
                        <h3><p >`+projetoAtual.nomeProjeto+`</p></h3>
                        <div class="buttons-url">
                            <a href="`+projetoAtual.gitHub+`"> Git </a>
                            <a href="`+projetoAtual.site+`"> Site </a>
                        </div>
                    </div>
                </div>

    `
});
}
