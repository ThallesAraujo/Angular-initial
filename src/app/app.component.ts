import { Component } from '@angular/core';

@Component({
  /*tag utilizada no template (index)*/
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  funcionarios = [];

  onFuncionarioAdicionado(funcionario){
    this.funcionarios.push(funcionario);
  }

}
