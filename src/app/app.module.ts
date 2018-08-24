/*implementação de um módulo Angular (neste caso, o módulo principal) */
/*define o componente principal da aplicação (neste caso, o AppComponent)*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/* deixar espaço entre os imports dos itens do Angular e da aplicação*/
import { AppComponent } from './app.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { FormulariosComponent } from './formularios/formularios.component';
import { BotoesModule } from './botoes/botoes.module';

@NgModule({
  /*declarações de componentes (classes) de visualização do módulo.
  Caso houvesse mais de um módulo, eles também seriam
  declarados aqui*/
  declarations: [
    AppComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    CampoColoridoDirective,
    FormulariosComponent
  ],
  /*importações de módulos do qual este módulo depende */
  imports: [
    BrowserModule,
    FormsModule,
    BotoesModule
  ],
  providers: [],
  /*Declara qual o módulo principal da aplicação*/
  bootstrap: [AppComponent]
})
export class AppModule { }
