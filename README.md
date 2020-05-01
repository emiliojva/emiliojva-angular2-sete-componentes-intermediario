# SON - Angular2 - Versão 7 - Componentes - Nível INTERMEDIÁRIO
  Manipulação de componentes usando ng-content sections, generalização, herança componentes e manipulação de eventos herdada por compomentes filhos.
  Angular é uma plataforma de desenvolvimento para a construção de aplicativos Web e dispositivos móveis usando TypeScript / JavaScript e outros linguagens. Foco em componentização.
  - Site ```https://angular.io```
  - Documentação ```https://angular.io/api```
  - Repositório ```https://github.com/angular/angular```
  - Repositório Team ```https://github.com/angular/angular```
  - ChangeLo - ```https://github.com/angular/angular/blob/master/CHANGELOG.md```
  - Quick Start ```https://angular.io/start```

## Repositórios do projeto
- Repositório GIT ANGULAR7 COMPONENTES INTERMEDIÁRIO(ATUAL)
- Repositório GIT ANGULAR7 COMPONENTES```https://github.com/emiliojva/emiliojva-angular2-sete-componentes```  
- Repositório GIT ANGULAR7 STARTED ```https://github.com/emiliojva/emiliojva-angular2-sete```  
  

## Notas da Versão 
  - Lançada meado de outubro
  - Adição da feature virtual scroll
  - Adição da feature CLI prompts / angular material commands
  - Adição da Drag and Drop feature
  
## Instalação - Criação de novo projeto (Gerando aplicação Angular)
  - Referencia ```https://angular.io/guide/setup-local```
  - Pré-requisitos
    - NodeJS instalado
      * Em nodejs.org/en/download 
      * Windows - Baixar pacote .exe
      * Linux - executar apt get install nodejs -y  
      * Checar versão do node e do gerenciador de pacotes
        ```
        node -v
        npm -v 
        ```
  - Instalação do Angular (via node npm cli / need root user)
    ```
    npm install -g @angular/cli
    ```
  - Checar versão e listar particularidades
    ```
    ng version
    ```
  - Update - Caso esteja com um projeto em uma versão anterior. varre aplicação e lista dependencias legadas
    ```
    ng update --all 
    // em caso de erro rodar novamente
    ```
  - Usando Angular CLI
    ```
    ng new <nome-do-projeto>
    ```
    - irá perguntar ?
      * Trabalhar com Rotas?
      * Qual tipo de folha de estilos trabalhar
  - Testando aplicação (build and run http://localhost:4200)
    ```
    ng serve
    ||
    ng serve --open
    ```


## Conhecimento prévio desejável:
  * TypeScript ```https://www.typescriptlang.org/docs/home.html```
  * Javascript ```https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript```
  * HTML ```https://developer.mozilla.org/docs/Learn/HTML/Introduction_to_HTML```
  * CSS ```https://developer.mozilla.org/docs/Learn/CSS/First_steps```
  * Getstared ```https://angular.io/start```
  * Repositório GIT ANGULAR7 COMPONENTES```https://github.com/emiliojva/emiliojva-angular2-sete-componentes```  
  * Repositório GIT ANGULAR7 STARTED ```https://github.com/emiliojva/emiliojva-angular2-sete```  
  
  
## Componentes - Intro
  Um componente controla um pedaço de tela chamado ```view```. Por exemplo, componentes individuais definem e controlam suas próprias views
  - Referência ```https://angular.io/guide/architecture-components```
  - Metadados @Component define uma simples classe como um Componente em angular:
    ```
    @Component({
      selector:    'app-hero-list',
      templateUrl: './hero-list.component.html',
      providers:  [ HeroService ]
    })
    export class HeroListComponent implements OnInit {
    /* . . . */
    }
    ```
  - Angular sempre trabalha com uma hieraquia de componentes:
    ```
      -- AppComponent
        -- EmployeeListComponent
          -- EmployeeAddComponent
        -- NavbarComponent
          (...)
    ```
  
  - Criando um componente (via ng cli) (nome dos Components no kebab-style) (g: generation)
    ```
    ng g component employee-list
    ```
  - View Html do Component Employee-list
    ```
    <section>
      <employee-list>1</employee-list>
      <employee-list>2</employee-list>
      <employee-list>3</employee-list>
      <employee-list>4</employee-list>
    </section>
    ```
  - Dentro do html do component employee-list, edito o html e o mesmo será replicado onde o componente for chamado na forma:
    ```
    <employee-list></employe-list>
    ```
  - O componente Raiz chama-se <app-root></app-root> contido no index.html por default. E pode ser manipulado através do arquivo app.component.(html|scss|ts) na pasta src/app. O app.component é importado e inicializado pelos módulo ```platformBrowserDynamic().bootstrapModule(AppModule)``` que dá sentido a aplicação



## Prefixo de componentes e Tslint
  O TSLint é uma ferramenta de análise estática extensível que verifica o código TypeScript quanto a erros de legibilidade, manutenção e funcionalidade. É amplamente suportado por editores modernos e sistemas de construção e pode ser personalizado com suas próprias regras, configurações e formatadores de fiapos.
  - CoC ou Convention Over Convention
  - Podemos definir convenções obrigatórios ao nosso app. Ex: Obrigar nome do ```selector``` ter o prefito ```app-``` na frente. 
    ```
    @Component({
      selector:    'app-hero-list',
      templateUrl: './hero-list.component.html',
      providers:  [ HeroService ]
    })
    export class HeroListComponent implements OnInit {
    /* . . . */
    }
    ```
    
