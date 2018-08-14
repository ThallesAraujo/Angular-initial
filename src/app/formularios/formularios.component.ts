import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';

class Cliente{

  nome: string;
  email: string;
  profissao: string;

}

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent{

  cliente = new Cliente ();

  profissoes = ['Programador', 'Analista de Sistemas', 'Gerente de Projetos', 'Outra'];

  salvar(form: NgForm){
    console.log(form);
    /*Por exemplo: caso se quisesse pegar o nome:
    form.value.nome
    modelo-> form.value.nome_da_propriedade_no_template.*/

    form.reset({ profissao: '' });

  }

}
