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
  ultimoId = 0;
  funcionarios = [];

  adicionar(nome : string){
    this.nome = nome;
    this.adicionado = true;
    this.funcionarios.push({
      nome: this.nome,
      id: ++ this.ultimoId,
    });
  }

}
