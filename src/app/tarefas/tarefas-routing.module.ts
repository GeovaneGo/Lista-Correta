import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar';
import { CadastrarTarefasComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    //Assossia um path ao compnente específico, se houver na url um path tarefas/listar, irá direcionar para o component
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefasComponent
    },
    {
        //Necessita de um parametro para saber exatamente qual tarefa será editada
        path: 'tarefas/editar/:id',
        component: EditarTarefaComponent
    }
    
]