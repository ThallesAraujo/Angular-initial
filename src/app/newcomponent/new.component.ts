import { Component } from "../../../node_modules/@angular/core";

@Component({
    selector: 'app-new',
    template: `
      <h1>
        Olá, {{ nome }}
      </h1>  
    `, 
})
export class NewComponent{

    nome = 'Thalles'; 

}