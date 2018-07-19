import { Component } from '@angular/core';

@Component({
  /*tag utilizada no template (index)*/
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Thalles';

  adicionar(){
    return this.nome;
  }

  alterarNome(event: any){
    this.nome = event.target.value;
  }

}
