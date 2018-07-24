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

  adicionar(nome : string){
    this.nome = nome
    this.adicionado = true;
  }

  alterarNome(event: any){
    this.nome = event.target.value;
  }

}
