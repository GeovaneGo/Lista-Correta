import { Injectable } from '@angular/core';
import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})

export class TarefaService {

  constructor() {}

  listarTodos(): Tarefa[]{
    const tarefas = localStorage['tarefas'];
    //verifica se há valor e retorna, senão retorna um array vazio
    return tarefas ? JSON.parse(tarefas):[];
  }

  cadastrar(tarefa: Tarefa): void{
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
  
  /**
   * Busca a tarefa por id dentro de uma lista
   * @param number
   */

  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefas => tarefas.id === id);
  }

  /**
   * Carrega, atualiza e grava no localStorage
   * @param tarefa 
   */

  atualizar(tarefa: Tarefa): void{
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((objeto, index, objetos) => {
        if(tarefa.id === objeto.id){
          objetos[index] = tarefa;
        }
      
    });
    //Assossia a lista de tarefas atualiza
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**
   * Irá verificar a condição do filter e ignorar o mesmo, não adicionando o valor no localStorage
   * @param id 
   */
  deletar(id: number): void{
    let tarefas: Tarefa[] = this.listarTodos();
    //Filter irá retornar todas as tarefas conforme a condição passada
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);     
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
  
  alterarTarefa(id: number): void{
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((objeto, index, objetos) => {
      if(id === objeto.id){
        objetos[index].concluida = !objeto.concluida;
      }
    });    
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}
