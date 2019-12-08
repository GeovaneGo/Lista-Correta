import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaRoutes } from './tarefas';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/tarefas/listar',
        pathMatch: 'full'
    },
    // ...TarefasRoutes é um comando typeScript que permite concatenar arrays, irá adicionar as tarefaRoutes na rota principal
    ...TarefaRoutes
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ], // é utilizado para garantir que o módulo de rotas seja unico
    exports:  [ RouterModule ]
})

export class AppRoutingModule{}