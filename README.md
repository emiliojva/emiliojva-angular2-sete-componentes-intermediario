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
- Repositório GIT ANGULAR7 COMPONENTES INTERMEDIÁRIO(ATUAL) ```https://github.com/emiliojva/emiliojva-angular2-sete-componentes-intermediario```
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

## Criando componentes inlines
  - Criando um Component simplificado com angular cli : 
  ```
  npm run ng g component ./components/Modal --inline-template --inline-styles
  ```
  - Refatorando AlertComponent para um Component inline-(style|template)
    ```
    import { Component } from '@angular/core';

    @Component({
      selector: 'alert-success',
      template: `
        <div class="alert alert-success" role="alert">
          <ng-content></ng-content>
        </div>`,
      styles: ['.alert { text-transform:uppercase}'],
    })
    export class AlertSuccessComponent {}
    ```
  - Foram deletados os arquivos .scss e .html do Component

## Criando componente genérico modal para o recurso modal bootstrap(componente bootstrap) 
  - Criando componente Modal Genérico de forma simplificada.
    ```
    ng g component ./components/modal --inline-template --inline-style
    ```
  - Modal do Component Modal aceitando tags ```modal-[title,body,footer]```
    ```
    import { Component, OnInit } from '@angular/core';
    @Component({
      selector: 'modal',
      template: `
      <div class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
      `,
      styles: [
      ]
    })
    export class ModalComponent implements OnInit {
     constructor(private element: ElementRef) { }

      ngOnInit(): void {
      }

      show(){
        const divModal = this.getDivModal();
        $(divModal).modal('show');

      }

      hide(){
        const divModal = this.getDivModal();
        $(divModal).modal('hide')
      }

      getDivModal(): HTMLElement{
        const elementDOM:HTMLElement = this.element.nativeElement;
        // return elementDOM.firstElementChild as HTMLElement;
        return elementDOM.querySelector('.modal') as HTMLElement;
      }
    }
    ```
  - Desta forma podemos encapsular todo wrapper de tags para gerar um modal no bootstrap
  usando agora apenas a tag ```<modal>``` em qualquer outra viewComponent e inserir apenas o content necessário paras as seções(divs .modal) title, body e footer
    ```
    <modal>

      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Novo Empregado</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">

        <div class="form-group">
          <label for="name">Name:</label>
          <input name="name" type="text" [(ngModel)]="employee.name"/>
        </div>

        <div class="form-group">
          <label for="salary">Salary:</label>
          <input name="salary" type="number" [(ngModel)]="employee.salary"/>
        </div>

        <div class="form-group">

          <!-- diretiva hidden -->
          <div [hidden]="employee.salary<1000">
            <label for="bonus">Bonus:</label>
            <input name="bonus" type="number" [(ngModel)]="employee.bonus"/>
          </div>

        </div>

      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Incluir</button>
        <!-- <button type="button" (click)="addEmployee($event)">adicionar</button> -->
      </div>

    </modal>
    ```  
  - Mais ainda sim precisamos pegar o component filho com ViewChild(ModalComponent). Para ter a instancia do Modal Component chamado <modal> dentro da view pai. A classe do component EmployeeNewComponent ficaria assim: 
    ```  
    export class EmployeeNewModalComponent implements OnInit {

      employee: Employee;

      @Output()
      onSubmit:EventEmitter<Employee> = new EventEmitter<Employee>();
      @ViewChild(ModalComponent)
      modal:ModalComponent;

      constructor(private element: ElementRef, public employeeService: EmployeeService) {
        this.employee = {name:'',salary:0};
      }

      ngOnInit(): void {
      }

      addEmployee(event: Event){
        // event.preventDefault();
        let copy:Employee = Object.assign({}, this.employee);
        copy.bonus = copy.salary >= 1000 ? 0 : copy.bonus;
        this.employeeService.addEmployee(copy);
        this.onSubmit.emit(copy);
        this.hide();
      }

      show(){
        this.modal.show()
      }

      hide(){
        this.modal.hide();
      }
    }
    ```  

## ng-content targeted
  Dividir um Component em vários ng-contents, específicos.
  - Reference ```https://blog.angular-university.io/angular-ng-content/```
  - Propriedade select=""
    ```
    <div>
      <ng-content select="div"></ng-content>
    </div>
    <div>
      <ng-content select="outra-div"></ng-content>
    </div>
    ```
  - Exemplo de um ng-content que casa dois elemento <p> ou um elemento com a propriedade ```sunda```
    ```
    import { Component, OnInit } from '@angular/core';

    @Component({
      selector: 'test-ng-content',
      template: `
        <section>
          <p>
            <ng-content select="modal"></ng-content>
          </p>

          <p>
            <ng-content select="div"></ng-content>
          </p>

          <p>
            <ng-content select="[sunda]"></ng-content>
          </p>

        </section>
      `,
      styles: [
      ]
    })
    export class TestNgContentComponent implements OnInit {

      constructor() { }

      ngOnInit(): void {
      }

    }
    ```
  - No viewComponent
    ```
    <test-ng-content>
      <div>conteudo</div>
      <modal></modal> 
      <!-- Mesmo alterando a posição dos ng-content válidos, não altera a saída definida no component pai TestNgContent -->
      <span bunda>É possível usar ng-content capturando por atributo</span>
      <span>outro texto</span> <!--Span será descartado. POis não existe ng-content com este seletor definido-->
    </test-ng-content>
    ```
