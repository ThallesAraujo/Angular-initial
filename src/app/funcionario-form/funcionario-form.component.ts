import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  nome = '';
  adicionado = false;
  sexo = '';
  ultimoId = 0;
  /**
   * Output: anotação para saída de itens (eventos)
   * entre componentes. Tal como a Input, suporta
   * aliases
   */
  @Output() funcionarioAdicionado = new EventEmitter();

  adicionar(nome: string, sexo: string) {
    this.nome = nome;
    this.adicionado = true;
    this.sexo = sexo;

    const funcionario = {
      nome: this.nome,
      sexo : this.sexo,
      id: ++ this.ultimoId,
    };

    /**
     * No momento correto, diz-se ao emissor de eventos quando
     * o evento deve ser propagado. Envia-se, junto ao evento,
     * alguma coisa (objeto, propriedade, etc) que tenha a ver com
     * o mesmo (que faça sentido para os listeners do mesmo).
     */
    this.funcionarioAdicionado.emit(funcionario);

  }

}
