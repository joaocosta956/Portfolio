// Aqui fica a lógica dos projetos!!



var boxProjetos = document.querySelector('.projetos');
boxProjetos.innerHTML = "";

const projetos = [
    {
        nomeProjeto: 'Projeto Mandarin',
        gitHub :'https://joaocosta956.github.io/Desafio_Mandarin/',
        site : 'https://main--bespoke-quokka-c6b8ec.netlify.app/',
        img : 'images/background.jpg',
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
                            <a target="_blank" href="`+projetoAtual.gitHub+`"> Git </a>
                            <!--<a target="_blank" href="`+projetoAtual.site+`"> Site </a>-->
                        </div>
                    </div>
                </div>

    `
});
}
