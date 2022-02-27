// Language translations
var language = {
    ptbr: {
        presentation: "Aqui, os projetos que eu estive envolvido, desenvolvendo, executando e/ou gerenciando. Os projetos estão com uma simples descrição, mas nenhum foi publicado em meu GitHub por conta da política de privacidade estabelecida na empresa que trabalhei.",
        firsttitle: "Projeto: RPA Ingestão Livro Fiscal",
        firstdescription: "Desenvolvimento de RPA para realizar a extração do Livro Fiscal do site da prefeitura de Osasco e posteriormente fazer a ingestão dos dados em um datalake.",
        firstrole: "Função",
        froledescription: "Desenvolvedor"
    },
    eng: {
        presentation: "Here, the projects that I’ve been involved, developing, executing and/or managing. The projects are simply description, but none have been published because of a privacy policy established by the company I worked for.",
        firsttitle: "Project: RPA Tax Book",
        firstdescription: "Development of RPA to extract tax book from Osasco city hall and after performing data ingestion in a datalake.",
        firstrole: "Role",
        froledescription: "Desenvolvedor"
    }
};

// Define language via window hash
if (window.location.hash) {
    if (window.location.hash === "#eng") {
        portfolio_presentation.textContent = language.eng.presentation;
        titleone.textContent = language.eng.firsttitle;
        descriptionone.textContent = language.eng.firstdescription;
        roleone.textContent = language.eng.firstrole;
        roledescriptionone.textContent = language.eng.froledescription;
    }
}

// Reload page to set language
function reloadPage() {
    setTimeout(function () {
        location.reload();
    }, 100);
}
