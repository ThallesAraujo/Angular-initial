import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent{

  salvar(form: NgForm){
    console.log(form);
    /*Por exemplo: caso se quisesse pegar o nome:
    form.value.nome
    modelo-> form.value.nomeDaPropriedadeNoTemplate*/
  }

}
