import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent{

  /**
   * @Input: Expõe essa propriedade para fora do componente
   * como um widget de entrada
   * 
   * Importante: o alias atribuído ('funcionarioOnComponent')
   * só funciona nos templates externos onde este componente for
   * usado. Dentro do próprio componente funcionario-card
   * deve-se usar o nome do próprio atributo, no caso,
   * funcionario
   */
  @Input('funcionarioOnComponent') funcionario: any;

  /**
   * Adição dinâmica de CSS
   */
  getEstiloCartao(){

    return {
      'background-color': this.funcionario.sexo == 'men'? '#5d9faf' : '#af5caa'
    };

  }

}
