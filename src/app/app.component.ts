import { Component } from '@angular/core';

@Component({
  /*tag utilizada no template (index)*/
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = '';
  adicionado = false;
  sexo = '';
  ultimoId = 0;
  funcionarios = [];

  adicionar(nome : string, sexo: string){
    this.nome = nome;
    this.adicionado = true;
    this.sexo = sexo;
    this.funcionarios.push({
      nome: this.nome,
      sexo : this.sexo,
      id: ++ this.ultimoId,
    });
  }

}
