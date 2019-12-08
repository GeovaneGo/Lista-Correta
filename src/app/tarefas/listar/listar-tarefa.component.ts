import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }
  
  ngOnInit() {
    this.tarefas = this.listarTodos();
  }

  /**
   * Método que retorna lista de tarefas
   */
  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }

  deletar($event: any, tarefa: Tarefa): void{
    $event.preventDefault();
 
      if(confirm("Deseja deletar a tarefa '" + tarefa.descricao +"' da lista de tarefas?")){
        this.tarefaService.deletar(tarefa.id);
        this.tarefas = this.listarTodos();
      }
  } 
  
  alterarTarefa(tarefa: Tarefa): void{ 
      if(confirm("Deseja alterar a tarefa '" + tarefa.descricao +"' da lista de tarefas?")){
        this.tarefaService.alterarTarefa(tarefa.id);
        this.tarefas = this.tarefaService.listarTodos();
      }
  }

  /**
   * Inverte a data do prazo para padrão DD/MM/YYYY
   * @param tarefa 
   */
  corrigeData(tarefa: Tarefa):void{
      if(tarefa.prazo !== ''){
      let data = tarefa.prazo.split('-');
      let dataInvertida = data[2] +'/'+data[1]+'/'+data[0];
      tarefa.prazo = dataInvertida;
    }
  }

}
